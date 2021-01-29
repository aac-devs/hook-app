import React, { useCallback, useEffect, useState } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((p) => p + num);
    },
    [setCounter]
  );

  //Otro uso:
  useEffect(() => {
    ///
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
