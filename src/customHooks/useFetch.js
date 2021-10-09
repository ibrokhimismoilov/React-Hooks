import { useState, useEffect } from "react";

const initialState = {
  data: null,
  loading: true,
};

export const useFetch = (urlNumber) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(`http://numbersapi.com/${urlNumber}`)
      .then((res) => res.text())
      .then((data) => {
        setState({ data: data, loading: false });
      });
  }, [urlNumber]);

  return state;
};
