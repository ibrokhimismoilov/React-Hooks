import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Home = () => {
  const { state, setState } = useContext(UserContext);
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => setState((p) => p + 1)}>Increment</button>
    </div>
  );
};
