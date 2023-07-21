import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';



function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username)
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      
      { cart.length === 0 ? 
    
      
        <EmptyCart />
        :
        <>
        <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
        <h2 className="text-xl font-semibold mt-7">Your cart, {username}</h2>
      

      <ul className='mt-3 mb-6 border-b divide-y divide-stone-200'>
        {cart.map((item) => <CartItem item={item} key={item.pizzaId}/>)}
      </ul>

      <div className="space-x-2">
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>Clear Cart</Button>

      </div>
        </>
      }
    </div>
  );
}

export default Cart;
