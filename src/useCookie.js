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

  const updateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(title, newValue, options);
      setValue(newValue);
    },
    [title]
  );

  const removeCookie = useCallback(() => {
    Cookies.remove(title);
    setValue(null);
  }, [title]);

  return [value, updateCookie, removeCookie];
};

export default useCookie;
