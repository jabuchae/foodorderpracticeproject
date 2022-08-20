import classes from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CartModal from "./CartModal";
import CartContext from "./CartContext";

const CartButton = () => {
  const modalRoot = document.getElementById("modal-root");
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const cartCtx = useContext(CartContext);

  const [cartChanged, setCartChanged] = useState(false);

  const btnClasses = classes.cart + (cartChanged ? " " + classes.bump : "");

  const { cart: items } = cartCtx;
  useEffect(() => {
    if (items.reduce((prev, curr) => prev + curr.amount, 0) == 0) {
      return;
    }
    setCartChanged(true);
    const timer = setTimeout(() => setCartChanged(false), 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <React.Fragment>
      {modalIsShowing &&
        ReactDOM.createPortal(
          <CartModal onClose={() => setModalIsShowing(false)} />,
          modalRoot
        )}
      <div className={btnClasses} onClick={() => setModalIsShowing(true)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className={classes.text}>Your Cart</span>
        <span className={classes.counter}>
          {cartCtx.cart.reduce((prev, curr) => prev + curr.amount, 0)}
        </span>
      </div>
    </React.Fragment>
  );
};

export default CartButton;
