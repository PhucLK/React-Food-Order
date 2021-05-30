import meals from "../Const/Meals-datas";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = meals.map((m) => (
    <MealItem
      id={m.id}
      key={m.id}
      name={m.name}
      description={m.description}
      price={m.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
