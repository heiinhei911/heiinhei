import { useEffect } from "react";

const useDarkMode = (darkMode) => {
  // const prefersDarkMode = usePrefersDarkMode();
  useEffect(() => {
    const className = "dark";
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem("dark-mode-enabled", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode];
};

// const usePrefersDarkMode = () => {
//   return useMedia(["(prefers-color-scheme: dark)"], [true], false);
// };

export default useDarkMode;
