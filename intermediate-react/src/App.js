// useReducer: simple Counter

import * as React from "react";

function countReducer(state, action) {
  console.log("Running countReducer Function!");
  console.log("value of state", state);
  console.log("value of newState", action);

  return { ...state, ...action };
}

function Counter({ initialValue = 0, step = 1, totalCount = 100 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialValue,
    total: totalCount,
  });

  console.log(state);

  const { count, total } = state;

  console.log("Counter is Running");
  console.log("Current Value of count", count);

  const increment = () => setState({ count: count + step });

  return (
    <>
      <button onClick={increment}>{count}</button>
      <div>{total}</div>
    </>
  );
}

function App() {
  console.log("App is running");
  return <Counter />;
}

export default App;
