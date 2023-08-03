import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="border-b border-gray-200 py-3">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{props.name}</h2>
          <span className="text-gray-600">{price}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={props.onRemove}
            className="text-yellow-500 hover:text-yellow-600 focus:outline-none">
            <AiOutlineLeft className="text-2xl" />
          </button>
          <span className="text-lg font-medium">{props.amount}</span>
          <button
            onClick={props.onAdd}
            className="text-yellow-500 hover:text-yellow-600 focus:outline-none">
            <AiOutlineRight className="text-2xl" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
