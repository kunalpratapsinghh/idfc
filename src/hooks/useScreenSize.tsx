"use client";

import { useEffect, useState } from "react";

const DEFAULT_SCREEN_SIZE = {
  width: 1280,
  height: 720
};

const getInitialScreenSize = () => {
  if (typeof window === "undefined") {
    return DEFAULT_SCREEN_SIZE;
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getInitialScreenSize);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
