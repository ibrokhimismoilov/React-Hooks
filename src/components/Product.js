import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

const Product = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(count);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <h1>{loading ? "Loading..." : data}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>I++</button>
    </div>
  );
};

export default Product;
