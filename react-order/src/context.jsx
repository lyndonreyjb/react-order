import { createContext, useState, useReducer, useContext } from "react";

const AppContext = createContext();
const defaultCart = {
  items: [],
  total: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotal = state.total + action.item.price * action.item.amount;
    return {
      items: updateItems,
      total: updateTotal,
    };
  }
  return defaultCart;
};

export const AppProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [cartState, cartAction] = useReducer(cartReducer, defaultCart);
  const addItemToCart = (item) => {
    cartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    cartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ cartContext, isModalOpen, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
