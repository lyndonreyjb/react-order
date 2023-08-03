import { IoCart } from "react-icons/io5";
import { useGlobalContext } from "../../context";

const HeaderBtn = (props) => {
  const { cartContext } = useGlobalContext();
  const itemQuantity = cartContext.items.reduce((num, item) => {
    return num + item.amount;
  }, 0);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={props.onClick}
        className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all focus:outline-none">
        <IoCart className="mr-2" />
        <span className="ml-1 font-semibold h-8 w-8 flex items-center justify-center rounded-md bg-yellow-800">
          {itemQuantity}
        </span>
      </button>
    </div>
  );
};

export default HeaderBtn;
