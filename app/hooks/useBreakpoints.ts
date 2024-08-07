import { useEffect, useState } from "react";

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

/** 
* Use this hook to check screen breakpoint  
* This uses the same tailwindcss break points for css classes
* @see https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints
* @example
  const { lg } = useBreakpoints();
  "lg is true is screen is lg size and up"
* 
*/
export const useBreakpoints = () => {
  function checkAll() {
    if (typeof window === "undefined") {
      return {
        sm: false,
        md: false,
        lg: false,
        xl: false,
        "2xl": false,
      };
    }
    return {
      sm: window.matchMedia(`(min-width: ${screens.sm})`).matches,
      md: window.matchMedia(`(min-width: ${screens.md})`).matches,
      lg: window.matchMedia(`(min-width: ${screens.lg})`).matches,
      xl: window.matchMedia(`(min-width: ${screens.xl})`).matches,
      "2xl": window.matchMedia(`(min-width: ${screens["2xl"]})`).matches,
    };
  }

  const [breakpoints, setBreakpoints] = useState(checkAll());

  useEffect(() => {
    setBreakpoints(checkAll());
    const observer = new ResizeObserver(() => {
      setBreakpoints(checkAll());
    });
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  return breakpoints;
};
