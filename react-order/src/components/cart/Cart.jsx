import { AiFillCloseCircle } from "react-icons/ai";
import { useGlobalContext } from "../../context";
const Cart = () => {
  const cartItems = [];
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={
        isModalOpen
          ? "fixed inset-0 flex items-center justify-center "
          : "hidden fixed inset-0  items-center justify-center "
      }>
      <div
        className="absolute bg-neutral-800 bg-opacity-60 h-screen w-full"
        onClick={closeModal}></div>
      <div className="w-96 bg-white p-4 rounded-lg z-20">
        <button className="" onClick={closeModal}>
          <AiFillCloseCircle className="text-2xl text-yellow-500" />
        </button>
        {cartItems}
        <div className="h-full w-full p-2">
          <div className="flex justify-between">
            <span className="text-2xl font-bold">Total Amount</span>
            <span className="text-lg text-green-600 font-bold">22.33</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="ml-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
