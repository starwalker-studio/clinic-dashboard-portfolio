import { useEffect, useState } from "react";

export const useMobileScreen = () => {
  const MAX_MOBILE_WIDTH = 736;

  type isMobileScreenType = () => boolean;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const isMobileScreen: isMobileScreenType = () => {
    return width <= MAX_MOBILE_WIDTH;
  };

  return {
    isMobileScreen,
  };
};
