const firstValue = 0;

export default function someReducer(state = firstValue, action) {
  switch (action.type) {
    case "INCRIMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}