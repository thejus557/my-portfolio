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
      main: "#f6f6f6", // White for secondary elements
    },
    background: {
      default: "#f6f6f6", // White background
      paper: "#f6f6f6", // Light grey for paper components
    },
    text: {
      primary: "#000", // Black text
      secondary: "#555555", // Dark grey text
    },
    divider: "#e0e0e0", // Light grey dividers
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px 0px #f6b84699", // Add a light shadow to Paper components,
          border:"1px solid #f6b846d1",
          borderRadius:"1rem"
          // position: "relative", // Ensure the root is positioned relatively for the pseudo-elements
          // borderRadius: "1rem", // Adjust the border radius of the Paper component
          // "&::before, &::after": {
          //   content: '""',
          //   position: "absolute",
          //   border: "1px solid #f6b846d1",
          //   borderRadius: "1rem", // Adjust the border radius for the pseudo-elements
          // },
          // "&::before": {
          //   top: 0,
          //   left: 0,
          //   width: "50px", // Adjust the length of the border
          //   height: "25px", // Adjust the length of the border
          //   borderBottom: "none",
          //   borderRight: "none",
          //   borderTopLeftRadius: "18rem", // Match the Paper component's border radius
          //   borderBottomRightRadius: "30rem", // No curvature for the bottom-right corner
          // },
          // "&::after": {
          //   bottom: 0,
          //   right: 0,
          //   width: "50px", // Adjust the length of the border
          //   height: "25px", // Adjust the length of the border
          //   borderTop: "none",
          //   borderLeft: "none",
          //   borderTopRightRadius: "0", // No curvature for the top-left corner
          //   borderBottomLeftRadius: "0", // Match the Paper component's border radius
          // },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f6f6f6", // Set the AppBar background color to white
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
      main: "#f6f6f6", // White for primary elements
    },
    secondary: {
      main: "#1c1c1c ", // Black for secondary elements
    },
    background: {
      default: "#1c1c1c ", // Black background
      paper: "#1c1c1c", // Dark grey for paper components
    },
    text: {
      primary: "#f6f6f6", // White text
      secondary: "#aaaaaa", // Light grey text
    },
    divider: "#333333", // Dark grey dividers
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px 0px #f6b84699", // Add a light shadow to Paper components,
          border:"1px solid #f6b846d1",
          borderRadius:"1rem"
          // position: "relative", // Ensure the root is positioned relatively for the pseudo-elements
          // borderRadius: "1rem", // Adjust the border radius of the Paper component
          // "&::before, &::after": {
          //   content: '""',
          //   position: "absolute",
          //   border: "1px solid #f6b846d1",
          //   borderRadius: "1rem", // Adjust the border radius for the pseudo-elements
          // },
          // "&::before": {
          //   top: 0,
          //   left: 0,
          //   width: "50px", // Adjust the length of the border
          //   height: "25px", // Adjust the length of the border
          //   borderBottom: "none",
          //   borderRight: "none",
          //   borderTopLeftRadius: "18rem", // Match the Paper component's border radius
          //   borderBottomRightRadius: "30rem", // No curvature for the bottom-right corner
          // },
          // "&::after": {
          //   bottom: 0,
          //   right: 0,
          //   width: "50px", // Adjust the length of the border
          //   height: "25px", // Adjust the length of the border
          //   borderTop: "none",
          //   borderLeft: "none",
          //   borderTopRightRadius: "0", // No curvature for the top-left corner
          //   borderBottomLeftRadius: "0", // Match the Paper component's border radius
          // },
        },
      },
    },
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
