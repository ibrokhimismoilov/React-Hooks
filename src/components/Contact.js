import React from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  firstName: "",
  email: "",
  text: "",
};
const Contact = () => {
  const [value, changeHandler] = useForm(initialState);

  console.log(value);

  return (
    <form>
      <h1>Contact</h1>
      <input
        type="text"
        name="firstName"
        value={value.firstName}
        onChange={changeHandler}
      />
      <input
        type="email"
        name="email"
        value={value.email}
        onChange={changeHandler}
      />
      <textarea name="text" value={value.text} onChange={changeHandler} />
    </form>
  );
};

export default Contact;
