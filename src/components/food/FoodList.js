import classes from "./FoodList.module.css";
import FoodListItem from "./FoodListItem";

const FoodList = (props) => {
  const items = [
    {
      id: 1,
      name: "Sushi",
      desc: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Sushi 2",
      desc: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 3,
      name: "Sushi 3",
      desc: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 4,
      name: "Sushi 4",
      desc: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 5,
      name: "Sushi 5",
      desc: "Finest fish and veggies",
      price: 22.99,
    },
  ];
  return (
    <div className={classes.foodlist}>
      {items.map((item, i) => {
        return <FoodListItem key={i} item={item} />;
      })}
    </div>
  );
};

export default FoodList;
