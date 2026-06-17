import { useCallback, useEffect, useState } from "react";

const MAX_MOBILE_WIDTH = 736;
const MAX_TABLET_WIDTH = 1024;

type ScreenType = "mobile" | "tablet" | "desktop";

interface UseMobileTabletScreenReturn {
  width: number;
  screenType: ScreenType;
  isMobileScreen: () => boolean;
  isTabletScreen: () => boolean;
  isDesktopScreen: () => boolean;
  isMobileOrTablet: () => boolean;
}

export const useMobileTabletScreen = (): UseMobileTabletScreenReturn => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileScreen = useCallback(() => width <= MAX_MOBILE_WIDTH, [width]);

  const isTabletScreen = useCallback(
    () => width > MAX_MOBILE_WIDTH && width <= MAX_TABLET_WIDTH,
    [width],
  );

  const isDesktopScreen = useCallback(() => width > MAX_TABLET_WIDTH, [width]);

  const isMobileOrTablet = useCallback(
    () => width <= MAX_TABLET_WIDTH,
    [width],
  );

  const screenType: ScreenType = isMobileScreen()
    ? "mobile"
    : isTabletScreen()
      ? "tablet"
      : "desktop";

  return {
    width,
    screenType,
    isMobileScreen,
    isTabletScreen,
    isDesktopScreen,
    isMobileOrTablet,
  };
};
