import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/**
 ** [store] ➡ Store uygulamının mevcut tüm state'ini oluşturur.
 */
