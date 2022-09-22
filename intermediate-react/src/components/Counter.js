import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export function Counter() {
  const [, setCount] = useContext(CountContext);

  const increment = () => setCount((prevState) => prevState + 1);
  return <button onClick={increment}>Increment count</button>;
}
