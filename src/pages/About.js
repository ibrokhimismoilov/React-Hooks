import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const About = () => {
  const { state } = useContext(UserContext);
  return (
    <div>
      <h1>About page</h1>
      <p>{state}</p>
    </div>
  );
};
