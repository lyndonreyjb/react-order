import Food from "./components/food/Food";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
export default function App() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Food />
      </main>
    </>
  );
}
