'use client';

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';

type FavoritesState = {
  ids: number[];
};

type FavoritesAction =
  | { type: 'TOGGLE'; payload: { id: number } }
  | { type: 'CLEAR' };

function favoritesReducer(
  state: FavoritesState,
  action: FavoritesAction,
): FavoritesState {
  switch (action.type) {
    case 'TOGGLE': {
      const exists = state.ids.includes(action.payload.id);
      return {
        ids: exists
          ? state.ids.filter((id) => id !== action.payload.id)
          : [...state.ids, action.payload.id],
      };
    }
    case 'CLEAR':
      return { ids: [] };
    default:
      return state;
  }
}

type FavoritesContextValue = {
  ids: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
  clearFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoritesReducer, { ids: [] });

  const value = useMemo<FavoritesContextValue>(
    () => ({
      ids: state.ids,
      isFavorite: (id) => state.ids.includes(id),
      toggleFavorite: (id) => dispatch({ type: 'TOGGLE', payload: { id } }),
      clearFavorites: () => dispatch({ type: 'CLEAR' }),
    }),
    [state],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
