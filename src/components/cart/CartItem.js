import { useContext } from "react";
import CartContext from "./CartContext";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const entry = props.entry;
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.item}>
      <div className={classes.info}>
        <div className={classes.name}>{entry.item.name}</div>
        <div className={classes.detail}>
          <div className={classes.price}>${entry.item.price}</div>
          <div className={classes.amount}>x{entry.amount}</div>
        </div>
      </div>
      <div className={classes.controls}>
        <input
          type="button"
          value="-"
          onClick={() => cartCtx.removeItem(entry.item)}
        />
        <input
          type="button"
          value="+"
          onClick={() => cartCtx.addItem(entry.item, 1)}
        />
      </div>
    </div>
  );
};

export default CartItem;
