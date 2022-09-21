// useReducer: simple Counter

import * as React from "react";

function countReducer(state, newState) {
  console.log("Running countReducer Function!");
  console.log("value of state", state);
  console.log("value of newState", newState);
  return newState;
}

function Counter({ initialCount = 0 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  console.log("Counter is Running");
  console.log("Current Value of count", count);

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
}

function App() {
  console.log("App is running");
  return <Counter />;
}

export default App;
