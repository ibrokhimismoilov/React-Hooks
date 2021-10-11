import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import { useMeasure } from "../customHooks/useMeasure";
import Form from "./Form";

const Product = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(count);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, dataRef] = useMeasure([count]);

  return (
    <div>
      <Form />
      <h1 ref={dataRef}>{loading ? "Loading..." : data}</h1>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button onClick={() => setCount((prev) => prev + 1)}>I++</button>
    </div>
  );
};

export default Product;
