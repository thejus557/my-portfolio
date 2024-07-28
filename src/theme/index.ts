import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000", // Black for primary elements
    },
    secondary: {
      main: "#ffffff", // White for secondary elements
    },
    background: {
      default: "#ffffff", // White background
      paper: "#f5f5f5", // Light grey for paper components
    },
    text: {
      primary: "#000", // Black text
      secondary: "#555555", // Dark grey text
    },
    divider: "#e0e0e0", // Light grey dividers
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Set the AppBar background color to white
          color: "#000000", // Set the AppBar text color to black
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000000", // Default text color
        },
      },
    },
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
      main: "#1c1c1c ", // Black for secondary elements
    },
    background: {
      default: "#1c1c1c ", // Black background
      paper: "#1c1c1c", // Dark grey for paper components
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#aaaaaa", // Light grey text
    },
    divider: "#333333", // Dark grey dividers
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1c1c1c", // Set the AppBar background color to white
          color: "#fff", // Set the AppBar text color to black
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff", // Default text color
        },
      },
    },
  },
});
