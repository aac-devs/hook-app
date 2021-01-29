import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className="btn btn-warning" onClick={increment}>
        +1
      </button>
      <button className="btn btn-success ml-2" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
