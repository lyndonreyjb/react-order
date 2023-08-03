import Food from "./components/food/Food";
import Header from "./components/layout/Header";
import HeaderBtn from "./components/layout/HeaderBtn";
import Cart from "./components/cart/Cart";
import { useGlobalContext } from "./context";
export default function App() {
  const { openModal } = useGlobalContext();

  return (
    <>
      <Header />
      <Cart />
      <main>
        <Food />
        <HeaderBtn onClick={openModal} />
      </main>
    </>
  );
}
