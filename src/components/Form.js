import React, { useRef } from "react";
import { useForm } from "../customHooks/useForm";

const initialState = {
  ism: "",
  parol: "",
};
const Form = () => {
  const [value, handleChange] = useForm(initialState);

  const inputRef = useRef(() => console.log("hello world"));

  const SubmitHandler = (e) => {
    e.preventDefault();
    inputRef.current();
    // if (!value.parol) {
    //   inputRef.current.focus();
    // } else {
    //   console.log(value);
    // }
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
