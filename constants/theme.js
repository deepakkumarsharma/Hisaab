export const colors = {
  cream: {
    50: "#fffdfa",
    100: "#f9f5f0",
    200: "#f3ece2",
  },
  paper: "#fffcf8",
  ink: {
    DEFAULT: "#1a1a1a",
    900: "#1a1a1a",
    700: "#3a3a3a",
    500: "#7a736b",
    300: "#9a9188",
    100: "#d2ccc4",
  },
  peach: {
    DEFAULT: "#ff8a65",
    light: "#ff9e7d",
    dark: "#e66e4b",
  },
  coral: "#ffb5a7",
  mint: {
    DEFAULT: "#b8e6d1",
    light: "#c8f0e0",
    dark: "#a0d2b9",
  },
  butter: {
    DEFAULT: "#ffe08c",
    light: "#fff0b8",
  },
  lavender: {
    DEFAULT: "#d4c1f5",
    light: "#e3d4ff",
  },
  lavendar: "#d4c1f5",
  sky: {
    DEFAULT: "#a8d8f0",
    light: "#c5e7f7",
  },
  sage: "#d1e7dd",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#c44444",
  info: "#2196f3",
  borderBase: "#ede7e0",
  white: "#ffffff",
  black: "#333333",
};

export const fonts = {
  sans: "Inter",
  mono: "monospace",
};

export const radii = {
  base: 16,
  lg: 26,
  pill: 999,
};

export const shadows = {
  sm: {
    shadowColor: colors.ink.DEFAULT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  base: {
    shadowColor: colors.ink.DEFAULT,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 4,
  },
  md: {
    shadowColor: colors.ink.DEFAULT,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 40,
    elevation: 6,
  },
};

export const theme = {
  colors,
  fonts,
  radii,
  shadows,
};

export default theme;
