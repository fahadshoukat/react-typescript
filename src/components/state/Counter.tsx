import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
    type: 'INCREMENT' | 'DECREMENT'
    payload: number
}

type ResetAction = {
    type: 'RESET'
}

type CounterAction = UpdateAction | ResetAction
const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload }

    case "DECREMENT":
      return { count: state.count - action.payload }
    
    case "RESET":
      return initialState

    default:
      return state
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count Value: {state.count}
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
          Increment 10
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
          Decrement 10
        </button>
        <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
