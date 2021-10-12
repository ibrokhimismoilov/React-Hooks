import React, { useCallback, useState } from "react";
import { Increment } from "./components/Increment";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("App render");
  const increment = useCallback(
    (n) => {
      setCount((p) => p + n);
    },
    [setCount]
  );

  return (
    <div>
      <h1>{count}</h1>
      <Increment increment={increment} />
      <button onClick={() => increment(2)}>inc 2</button>
    </div>
  );
};

export default App;
