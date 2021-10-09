import React from "react";
import { useState } from "react/cjs/react.development";
import Product from "./components/Product";

const App = () => {
  const [show, setSHow] = useState(false);

  return (
    <div>
      {show && <Product />}
      <button onClick={() => setSHow((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default App;
