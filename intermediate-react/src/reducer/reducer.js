export function countReducer(state, action) {
  switch (action?.type) {
    case "increment":
      return { ...state, count: state.count + action.step };
    case "decrement":
      return { ...state, count: state.count - action.step };
  }

  return { ...state };
}
