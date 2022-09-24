import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
