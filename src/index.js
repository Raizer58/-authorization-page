import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import Home from "./component/Home";
import Authorization from "./component/Authorization";

function App() {
  function reducer(value = { message: "AuthenticatedFalse" }, action) {
    switch (action.type) {
      case "AUTHORIZATION_SUCSSES":
        return action.state;
      default:
        return { message: "AuthenticatedFalse" };
    }
  }

  const store = createStore(reducer);

  return (
    <Switch>
      <Route exact path="/">
        {store.getState().message === "AuthenticatedFalse" ? <Redirect to="/login" /> : <Home />}
      </Route>
      <Route path='/login' component={Authorization}></Route>
    </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("main")
);
