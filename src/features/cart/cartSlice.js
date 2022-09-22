import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseAmount: (state) => {
      state.amount += 1;
    },
    decreaseAmount: (state) => {
      state.amount -= 1;
    },
  },
});

export const { clearCart, increaseAmount, decreaseAmount } = cartSlice.actions;

export default cartSlice.reducer;
