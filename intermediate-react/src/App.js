// useContext: simple Counter

import * as React from "react";
import { CountDisplay } from "./components/CountDisplay";
import { Counter } from "./components/Counter";
import { CountContext } from "./context/CountContext";

function App() {
  const [count, setCount] = React.useState(10);

  return (
    <CountContext.Provider value={[count, setCount]}>
      <CountDisplay />
      <Counter />
    </CountContext.Provider>
  );
}

export default App;
