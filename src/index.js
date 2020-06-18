import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import allReducers from "./reducers/index";
import ReactDOM from "react-dom";
import Home from "./component/Home";
import Authorization from "./component/Authorization";
import actionSomeReducer from "./actions/action-some-reducer";

const store = createStore(allReducers);

function App() {
  const dispatch = useDispatch();
  const authorization = useSelector(state => state.authorization.user);
  const value = useSelector(state => state.someReducer);
  useEffect(() => {
    const counter = setTimeout(() => {
      dispatch(actionSomeReducer.incriment());
    }, 1000);

    return () => clearTimeout(counter);
  }, [dispatch, value]);

  return (
    <Switch>
    <Route exact path="/">
      {authorization ? <Home /> : <Redirect to="/login" />}
    </Route>
    <Route exact path="/login" component={Authorization}>
      {authorization ? <Redirect to="/" /> : null}
    </Route>
  </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#wrapper")
);
