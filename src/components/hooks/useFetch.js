import { useEffect, useState } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const useFetch = (url) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      })
      .catch(console.log);
  }, [url]);

  return state;
};
