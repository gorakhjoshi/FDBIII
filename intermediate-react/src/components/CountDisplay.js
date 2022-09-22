import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export function CountDisplay() {
  const [count] = useContext(CountContext);

  return <div>{`The current count is ${count}`}</div>;
}
