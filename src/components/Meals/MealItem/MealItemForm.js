import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  //const cartContext = useContext(CartContext);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amount = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }
    //console.log(amount);
    props.onAddToCart(amount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && (
        <p className={classes.error}>Please input a valid amount !</p>
      )}
    </form>
  );
};

export default MealItemForm;
