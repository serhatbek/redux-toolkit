import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/**
 ** [store] ➡ Store uygulamının mevcut tüm state'ini oluşturur.
 **1 [useSelector] ➡ useSelector ile componentlerden statelere ulaşıyoruz.
 **2 Component de context api de oluşturduğumuz useContext costum hook gibi
 */
