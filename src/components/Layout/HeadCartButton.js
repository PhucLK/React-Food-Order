import CartIcon from "../Cart/CartIcon";
import classes from "./HeadCartButton.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItem = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const [isCartChange, setIsCartChange] = useState(false);

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsCartChange(true);
    const timer = setTimeout(() => {
      setIsCartChange(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext]);

  const btn_classes = `${classes.button} ${isCartChange ? classes.bump : ""}`;
  return (
    <button className={btn_classes} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
