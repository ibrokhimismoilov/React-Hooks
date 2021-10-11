import { useState, useEffect, useRef } from "react";

const initialState = {
  data: null,
  loading: true,
};

export const useFetch = (urlNumber) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(`http://numbersapi.com/${urlNumber}`)
      .then((res) => res.text())
      .then((data) => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: data, loading: false });
          }
        }, 2000);
      });
  }, [urlNumber]);

  return state;
};
