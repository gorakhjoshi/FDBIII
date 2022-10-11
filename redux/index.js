import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  console.log("Running countReducer");
  console.log(action);

  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 10 };
  }
}

const store = createStore(counterReducer);

store.subscribe(countSubscriber);

function countSubscriber() {
  console.log("countSubscriber Running!");
  const latestCount = store.getState();
  console.log(latestCount);
}

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

console.log(store.getState());
