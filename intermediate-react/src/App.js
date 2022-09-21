// useReducer: simple Counter

import * as React from "react";

function countReducer(count, change) {
  console.log("Running countReducer Function!");
  console.log("value of state", count);
  console.log("value of newState", change);
  return count + change;
}

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  console.log("Counter is Running");
  console.log("Current Value of count", count);

  const increment = () => setCount(step);

  return <button onClick={increment}>{count}</button>;
}

function App() {
  console.log("App is running");
  return <Counter />;
}

export default App;
