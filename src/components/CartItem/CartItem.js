import { ChevronDown, ChevronUp } from '../../icons';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount } from '../../features/cart/cartSlice';

const CartItem = ({ id, img, price, title, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => dispatch(increaseAmount())}
        >
          <ChevronUp />
        </button>
        <div className='amount'>{amount}</div>
        <button
          className='amount-btn'
          onClick={() => dispatch(decreaseAmount())}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
