import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [breakpoints, setBreakpoints] = useState({
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      setBreakpoints({
        isXs: window.matchMedia("(max-width: 639px)").matches,
        isSm: window.matchMedia("(max-width: 767px)").matches,
        isMd: window.matchMedia("(max-width: 1023px)").matches,
        isLg: window.matchMedia("(max-width: 1279px)").matches,
        isXl: window.matchMedia("(min-width: 1280px)").matches,
      });
    };

    window.addEventListener("resize", updateBreakpoints);

    // Call it once to set initial value
    updateBreakpoints();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", updateBreakpoints);
    };
  }, []);

  return breakpoints;
};

export default useMediaQuery;
