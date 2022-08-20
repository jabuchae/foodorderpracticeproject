import CartButton from "../cart/CartButton";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <section className={classes.navbar}>
      <div className={classes.appname}>ReactMeals</div>
      <div className={classes.cart}>
        <CartButton />
      </div>
    </section>
  );
};

export default Navigation;
