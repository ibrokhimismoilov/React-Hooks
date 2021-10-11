import React, { useState } from "react";
import Form from "./components/Form";
import Product from "./components/Product";

const App = () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Form />
      {state && <Product />}
      <button onClick={() => setState((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default App;
