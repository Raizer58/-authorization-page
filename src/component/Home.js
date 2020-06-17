import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const userId = useSelector(state => state.authorization.user.userId);
  const some = useSelector(state => state.someReducer);
  return (
    <p>Hello, {`UserID: ${userId}` || "Unnamed"}, {some}</p>
  );
}

export default Home;