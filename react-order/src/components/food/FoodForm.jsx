import { useRef, useState } from "react";
import Input from "../ui/Input";
import { IoIosAddCircle } from "react-icons/io";
const FoodForm = (props) => {
  const [amount, setAmount] = useState(true);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQty = inputRef.current.value;
    const enteredQtyNum = +enteredQty;
    if (
      enteredQty.trim().length === 0 ||
      enteredQtyNum < 1 ||
      enteredQtyNum > 5
    ) {
      setAmount(false);
      return;
    }
    props.onAddToCart(enteredQtyNum);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex justify-between">
        <Input
          ref={inputRef}
          label="Qty"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>
          <IoIosAddCircle className=" text-4xl text-yellow-500" />
        </button>
        {!amount && <p>Enter only from 1-5</p>}
      </div>
    </form>
  );
};

export default FoodForm;
