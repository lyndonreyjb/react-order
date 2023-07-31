import food from "../../assets/food.jpg";
import HeaderBtn from "./HeaderBtn";
const Header = () => {
  return (
    <>
      <header>
        <h1>React Order</h1>
        <HeaderBtn />
      </header>
      <div>
        <img src={food} alt="food on table" />
      </div>
    </>
  );
};

export default Header;
