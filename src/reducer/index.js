import { DECREMENT, INCREMENT } from "./types";

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return (state = action.payload);
    case DECREMENT:
      return (state = action.payload);
    default:
      return state;
  }
}
