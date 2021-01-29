import React from "react";
import { useCounter } from "../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => decrement(1)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
