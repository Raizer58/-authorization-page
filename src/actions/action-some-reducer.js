function incriment() {
  return {
    type: "INCRIMENT"
  };
}

function decrement() {
  return {
    type: "DECREMENT"
  };
}

const actionSomeReducer = {
  incriment,
  decrement
}

export default actionSomeReducer;
