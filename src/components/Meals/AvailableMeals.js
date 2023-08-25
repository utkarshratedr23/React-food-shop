import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Samosa',
      description: 'Delicious & spicy',
      price: 22,
    },
    {
      id: 'm2',
      name: 'Burger',
      description: 'Our specialty!',
      price: 110,
    },
    {
      id: 'm3',
      name: 'Cheese Burger',
      description: 'Loaded with extra cheese',
      price: 150,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 100,
    },
  ];
  
const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map(meal=><MealItem id={meal.id} 
         key={meal.id}
         name={meal.name}
          description={meal.description}
         price={meal.price}
        />);
    return <section className={classes.meals}>
        <Card>
       <ul> {mealsList} </ul>
        </Card>
    </section>
};

export default AvailableMeals;