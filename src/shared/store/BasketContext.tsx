'use client';

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import type { BasketItemType } from '@/shared/components/BasketCard/types';

type BasketState = {
  items: BasketItemType[];
};

type AddItemPayload = Omit<BasketItemType, 'quantity'> & { quantity?: number };

type BasketAction =
  | { type: 'ADD_ITEM'; payload: AddItemPayload }
  | { type: 'INCREMENT'; payload: { id: number } }
  | { type: 'DECREMENT'; payload: { id: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'CLEAR' };

function basketReducer(state: BasketState, action: BasketAction): BasketState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity ?? 1) }
              : item,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity ?? 1 },
        ],
      };
    }
    case 'INCREMENT':
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case 'DECREMENT':
      return {
        items: state.items.flatMap((item) => {
          if (item.id !== action.payload.id) return [item];
          if (item.quantity <= 1) return [];
          return [{ ...item, quantity: item.quantity - 1 }];
        }),
      };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.payload.id) };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

type BasketContextValue = {
  items: BasketItemType[];
  total: number;
  addItem: (item: AddItemPayload) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeItem: (id: number) => void;
  clearBasket: () => void;
};

const BasketContext = createContext<BasketContextValue | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(basketReducer, { items: [] });

  const value = useMemo<BasketContextValue>(() => {
    const total = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return {
      items: state.items,
      total,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
      increment: (id) => dispatch({ type: 'INCREMENT', payload: { id } }),
      decrement: (id) => dispatch({ type: 'DECREMENT', payload: { id } }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: { id } }),
      clearBasket: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state]);

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
