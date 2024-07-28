import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff", // Black for primary elements
    },
    secondary: {
      main: "#ffffff", // White for secondary elements
    },
    background: {
      default: "#ffffff", // White background
      paper: "#f5f5f5", // Light grey for paper components
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#555555", // Dark grey text
    },
    divider: "#e0e0e0", // Light grey dividers
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff", // White for primary elements
    },
    secondary: {
      main: "#000000", // Black for secondary elements
    },
    background: {
      default: "#000000", // Black background
      paper: "#1c1c1c", // Dark grey for paper components
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#aaaaaa", // Light grey text
    },
    divider: "#333333", // Dark grey dividers
  },
});
