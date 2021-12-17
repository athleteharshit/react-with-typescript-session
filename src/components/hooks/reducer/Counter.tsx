import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        decrement
      </button>
    </div>
  );
}

export default Counter;

// Discriminating Unions
