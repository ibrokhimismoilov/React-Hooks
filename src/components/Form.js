import React, { useRef } from "react";
import { useForm } from "../customHooks/useForm";
import { useMeasure } from "../customHooks/useMeasure";

const initialState = {
  ism: "",
  parol: "",
};
const Form = () => {
  const [value, handleChange] = useForm(initialState);

  const inputRef = useRef(() => console.log("hello world"));

  const [rect, inputRef2] = useMeasure([]);

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
        ref={inputRef2}
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
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button>Yuborish</button>
    </form>
  );
};

export default Form;
