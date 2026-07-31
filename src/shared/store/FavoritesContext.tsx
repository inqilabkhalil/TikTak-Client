'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react';

const STORAGE_KEY = 'tiktak:favorites';

type FavoritesState = {
  ids: number[];
};

type FavoritesAction =
  | { type: 'TOGGLE'; payload: { id: number } }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; payload: { ids: number[] } };

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
    case 'HYDRATE':
      return { ids: action.payload.ids };
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
  const isFirstPersist = useRef(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        dispatch({ type: 'HYDRATE', payload: { ids: JSON.parse(raw) } });
      }
    } catch {
      // corrupted/inaccessible storage — start from an empty favorites list
    }
  }, []);

  useEffect(() => {
    if (isFirstPersist.current) {
      isFirstPersist.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.ids));
  }, [state.ids]);

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
