import React from "react";

export const Increment = React.memo(({ increment }) => {
  console.log("Increment Render");
  return (
    <div>
      <button onClick={() => increment(1)}>Increment</button>
    </div>
  );
});
