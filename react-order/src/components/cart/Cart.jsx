import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartContext, isModalOpen, closeModal } = useGlobalContext();

  const totalAmount = `$${cartContext.total.toFixed(2)}`;
  const inCart = cartContext.items.length > 0;
  const addItemToCart = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeItemFromCart = (id) => {
    cartContext.removeItem(id);
  };
  const cartItems = (
    <ul className="max-h-96 overflow-y-auto">
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          img={item.image}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={() => addItemToCart(item)}
          onRemove={() => removeItemFromCart(item.id)}
        />
      ))}
    </ul>
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <div
      className={
        isModalOpen
          ? "fixed inset-0 flex items-center justify-center p-2"
          : "hidden fixed inset-0 items-center justify-center p-2"
      }>
      <div
        className="absolute bg-neutral-800 bg-opacity-60 h-screen w-full"
        onClick={closeModal}></div>
      <div className="sm:w-2/6 bg-white p-4 rounded-lg z-30">
        <button className="" onClick={closeModal}>
          <AiFillCloseCircle className="text-2xl text-yellow-500" />
        </button>
        {cartItems}
        <div className="h-full w-full mt-2">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total Amount</span>
            <span className="text-lg text-yellow-500 font-bold">
              {totalAmount}
            </span>
          </div>
        </div>
        <div className="flex mt-2">
          {inCart && (
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg">
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
