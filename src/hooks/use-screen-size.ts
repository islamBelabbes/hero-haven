import { useState, useEffect } from "react";

const isClient = typeof window === "object";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: isClient ? window.innerWidth : 1440,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
