import FoodList from "../components/food/FoodList";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <main className={classes.content}>
      <div className={classes.explanation}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
      <div className={classes.foodlist}>
        <FoodList />
      </div>
    </main>
  );
};

export default Home;
