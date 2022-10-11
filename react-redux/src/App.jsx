import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Auth from "./components/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter />
      <Auth />
    </div>
  );
}

export default App;
