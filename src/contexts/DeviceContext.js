import { createContext, useContext, useEffect, useState } from "react";

const ScreenContext = createContext();

const useScreen = () => useContext(ScreenContext);

const ScreenProvider = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(
    () =>
      window.addEventListener("resize", () => {
        setIsSmallScreen(window.innerWidth < 768);
      }),
    [window.innerWidth]
  );

  return (
    <ScreenContext.Provider value={isSmallScreen}>
      {children}
    </ScreenContext.Provider>
  );
};

export { ScreenProvider, useScreen };
