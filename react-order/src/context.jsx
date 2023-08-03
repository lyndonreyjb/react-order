import { createContext, useState, useReducer, useContext } from "react";

const AppContext = createContext();
const defaultCart = {
  items: [],
  total: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotal = state.total + action.item.price * action.item.amount;
    const alreadyInCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const alreadyInCart = state.items[alreadyInCartIndex];

    let updatedItems;
    if (alreadyInCart) {
      const updatedItem = {
        ...alreadyInCart,
        amount: alreadyInCart.amount + action.item.amount, // Corrected the line here
      };
      updatedItems = [...state.items];
      updatedItems[alreadyInCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      total: updateTotal,
    };
  }

  if (action.type === "REMOVE") {
    const alreadyInCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const alreadyInCart = state.items[alreadyInCartIndex];
    const updateTotal = state.total - alreadyInCart.price;
    let updatedItems;
    if (alreadyInCart.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...alreadyInCart,
        amount: alreadyInCart.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[alreadyInCartIndex] = updatedItem;
    }
    return {
      items: updatedItems,
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
