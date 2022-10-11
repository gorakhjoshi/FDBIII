import { createStore } from "redux";

function counterReducer(state = { counter: 20 }, action) {
  console.log(action);
  if (action.type === "increment") {
    return { counter: state.counter + action.amount };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return { counter: state.counter };
}

export const store = createStore(counterReducer);
