import React, { useMemo, useState } from "react";
import { useFetch } from "./customHooks/useFetch";
import { findLongestWord } from "./utils/findLongestWord";

const App = () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(13);
  const longestWord = useMemo(() => findLongestWord(data), [data]);

  return (
    <div>
      <h1>{loading ? "loading..." : data}</h1>
      <h1>{loading ? null : longestWord}</h1>
      <hr />
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((p) => p + 1)}>Increment</button>
    </div>
  );
};

export default App;
