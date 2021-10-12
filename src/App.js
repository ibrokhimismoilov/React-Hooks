import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { DECREMENT, INCREMENT } from "./reducer/types";

const initialState = {
  user: null,
  isLoggendIn: false,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        onClick={() =>
          dispatch({
            type: INCREMENT,
            payload: { user: "Ibrokhim", isLoggendIn: true },
          })
        }
      >
        Login
      </button>
      <button
        onClick={() => dispatch({ type: DECREMENT, payload: initialState })}
      >
        Logout
      </button>
    </div>
  );
};

export default App;
