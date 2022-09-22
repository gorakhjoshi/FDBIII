// useReducer: simple Counter

import { useReducer } from "react";
import { countReducer } from "./reducer/reducer";

const initialValue = {
  count: 0,
  total: 100,
};

function Counter({ step = 1 }) {
  const [state, dispatch] = useReducer(countReducer, initialValue);

  const { count, total } = state;
  const increment = () => dispatch({ type: "increment", step });
  const decrement = () => dispatch({ type: "decrement", step });
  const neutral = () => dispatch();

  return (
    <>
      <h3>Count: {count}</h3>
      <h3>Total Count: {total}</h3>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={neutral}>Do Nothing</button>
    </>
  );
}

function App() {
  console.log("App is running");
  return <Counter />;
}

export default App;
