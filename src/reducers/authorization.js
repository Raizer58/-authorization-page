const defaultUser = {
  user: false
};

export default function authorization(state = defaultUser, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        user: action.user
      };
    case "LOG_OUT":
      return {
        user: false
      };
    default:
      return state;
  }
}
