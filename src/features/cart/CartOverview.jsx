import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {

    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const totalCartPrice = useSelector(getTotalCartPrice);
    if (totalCartQuantity === 0) return null;
  return (
    
    <div className=" uppercase text-stone-200 bg-stone-800 px-4, py-4 sm:px-6 text-sm md:text-base flex items-center justify-between " >
      <p className="space-x-4 font-semibold sm:space-x-6 text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
