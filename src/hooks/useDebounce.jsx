import { useEffect, useRef } from "react";


const useDebounce = (cb, delay) => {
  const timeoutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
