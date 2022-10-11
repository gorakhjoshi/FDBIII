import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment Counter</button>
      <button onClick={decrementHandler}>Decrement Counter</button>
    </main>
  );
};

export default Counter;
