import { useState, useCallback } from "react";
import Cookies from "js-cookie";

const useCookie = (title, defaultValue) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(title);
    if (cookie) {
      return cookie;
    }
    Cookies.set(title, defaultValue);
    return defaultValue;
  });

  const deleteCookie = useCallback(() => {
    Cookies.remove(title);
    setValue(null);
  }, [title]);

  const updateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(title, newValue, options);
      setValue(newValue);
    },
    [title]
  );

  return [value, deleteCookie, updateCookie];
};

export default useCookie;
