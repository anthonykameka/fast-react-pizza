import { formatCurrency } from "../../utils/helpers";
import Button  from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";



export function MenuItem({ pizza }) {

  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;


  const currentQuantity = useSelector(
    getCurrentQuantityById(id)
  )

  const isInCart = currentQuantity > 0;



  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: 1 * unitPrice,
  };

  dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img  className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ""}`} src={imageUrl} alt={name} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">{ingredients.join(", ")}</p>
        <div className="flex items-center justify-between w-100">
          {!soldOut ? <><p className="text-sm">{formatCurrency(unitPrice)}</p> {isInCart && <div className="flex items-center gap-3 sm:gap-8"><UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} /><DeleteItem pizzaId={id}/> </div>} </>: <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
        
          {!soldOut && !isInCart && <Button onClick={handleAddToCart} type="small">Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}
