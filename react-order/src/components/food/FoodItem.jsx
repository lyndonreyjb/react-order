import FoodForm from "./FoodForm";
import { useGlobalContext } from "../../context";
const FoodItem = (props) => {
  const { cartContext } = useGlobalContext();

  const price = `$${props.price.toFixed(2)}`;
  const addToCart = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      image: props.image,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="flex w-full list-none p-2 rounded-lg bg-neutral-50 border-2 shadow-lg">
      <div className="w-full">
        <div className="h-40 w-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-2">
          <h3 className="text-lg font-bold text-gray-800">{props.name}</h3>
        </div>
        <div>
          <FoodForm onAddToCart={addToCart} />
        </div>
        <p className="mt-2 text-yellow-600 font-bold">{price}</p>
        <p className="text-gray-600">{props.description}</p>
      </div>
    </li>
  );
};
export default FoodItem;
