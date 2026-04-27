import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export const FLOATING_TAB_BAR_BOTTOM_OFFSET = 16;

export const useFloatingTabBarBottomPadding = () =>
  useBottomTabBarHeight() + FLOATING_TAB_BAR_BOTTOM_OFFSET;
