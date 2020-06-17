import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actionAuthorization from "../actions/action-authorization";
import actionSomeReducer from "../actions/action-some-reducer";

const loginUser = async user => {
  console.log(JSON.stringify(user));
  const rawResponse = await fetch(
    "https://afternoon-falls-25894.herokuapp.com/signin", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
  );
  const content = await rawResponse.json();
  return content;
};

const Authorization = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const sendAuthorization = async (event) => {
    event.preventDefault();
    const user = await loginUser({ email, password });
    dispatch(actionAuthorization.userLogIn(user));
    dispatch(actionSomeReducer.incriment());
  };

  return (
    <form onSubmit = {(event) => sendAuthorization(event)} >
      <input type="text" value={email} placeholder="Email" required onChange={(event) => setEmail(event.target.value)}></input>
      <input type="password" value={password} placeholder="Password" required onChange={(event) => setPassword(event.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Authorization;
