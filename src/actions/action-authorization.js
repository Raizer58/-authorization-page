function userLogIn(data) {
  return {
    type: "LOG_IN",
    user: data
  };
}

function userLogOut() {
  return {
    type: "LOG_OUT"
  };
}

const actionAuthorization = {
  userLogIn,
  userLogOut
};

export default actionAuthorization;
