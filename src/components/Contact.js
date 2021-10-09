import React, { useEffect } from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  firstName: "",
  email: "",
  text: "",
};

const Contact = () => {
  const [value, changeHandler] = useForm(initialState);

  useEffect(() => {
    console.log("DidMount");

    return () => {
      console.log("WillunMount");
    };
  }, []);

  useEffect(() => {
    console.log("firstName render");
  }, [value.firstName, changeHandler]);

  useEffect(() => {
    console.log("email render");
  }, [value.email]);

  return (
    <form>
      <h1>Contact</h1>
      <input
        type="text"
        name="firstName"
        placeholder="firstName"
        value={value.firstName}
        onChange={changeHandler}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={value.email}
        onChange={changeHandler}
      />
      <br />
      <textarea
        name="text"
        placeholder="text"
        value={value.text}
        onChange={changeHandler}
      />
    </form>
  );
};

export default Contact;
