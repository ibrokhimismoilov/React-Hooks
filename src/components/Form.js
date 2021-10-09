import React from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  ism: "",
  parol: "",
};
const Form = () => {
  const [value, handleChange] = useForm(initialState);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="ism"
        value={value.ism}
        name="ism"
      />
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={value.parol}
        name="parol"
      />
      <button>Yuborish</button>
    </form>
  );
};

export default Form;
