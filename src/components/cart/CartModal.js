import React, { useContext } from "react";
import classes from "./CartModal.module.css";
import CartItem from "./CartItem";
import CartContext from "./CartContext";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.cart;

  const createOrder = () => {
    console.log("Creating order...");
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        {items.length == 0 && (
          <div className={classes.empty}>
            There are no items in your cart. Try adding some!
          </div>
        )}
        {items.length > 0 && (
          <React.Fragment>
            <div>
              {items.map((entry, i) => {
                return <CartItem entry={entry} key={i} />;
              })}
            </div>
            <div className={classes.total}>
              <div>Total Amount</div>
              <div>
                $
                {Math.round(
                  (items.reduce(
                    (prev, curr) => prev + curr.item.price * curr.amount,
                    0
                  ) +
                    Number.EPSILON) *
                    100
                ) / 100}
              </div>
            </div>
            <div className={classes.buttons}>
              <input
                type="button"
                value="Close"
                onClick={props.onClose}
                className={classes.cancelbtn}
              />
              <input
                type="button"
                value="Order"
                onClick={createOrder}
                className={classes.activebtn}
              />
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default CartModal;
