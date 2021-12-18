import { useReducer } from "react";

type CounterState = {
  count: number;
};

type Rest = {
  type: "reset";
}

type Increment = {
  type: "increment" | "decrement";
  payload: number;
};

type CounterAction = Rest | Increment

const initialState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
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
      <button onClick={() => dispatch({ type: "reset"})}>reset</button>
    </div>
  );
}

export default Counter;

// Discriminating Unions
