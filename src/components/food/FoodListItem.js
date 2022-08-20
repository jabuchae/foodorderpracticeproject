import { useContext, useEffect, useId, useRef } from "react";
import CartContext from "../cart/CartContext";
import classes from "./FoodListItem.module.css";

const FoodListItem = (props) => {
  const item = props.item;
  const amountRef = useRef();
  const labelId = useId();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    amountRef.current.value = 1;
  }, []);

  const addToCart = () => {
    const amount = parseInt(amountRef.current.value);
    if (amount == null || amount < 1) {
      return;
    }
    cartCtx.addItem(item, amount);
  };

  return (
    <div className={classes.row}>
      <div className={classes.productInfo}>
        <div className={classes.productName}>{item.name}</div>
        <div className={classes.productDescription}>{item.desc}</div>
        <div className={classes.productPrice}>${item.price}</div>
      </div>
      <div className={classes.cartInfo}>
        <div className={classes.amount}>
          <label htmlFor={labelId}>Amount</label>
          <input type="number" id={labelId} ref={amountRef} />
        </div>
        <input type="button" value="+Add" onClick={addToCart} />
      </div>
    </div>
  );
};

export default FoodListItem;
