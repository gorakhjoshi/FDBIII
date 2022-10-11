import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const { counter } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement(5));
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
