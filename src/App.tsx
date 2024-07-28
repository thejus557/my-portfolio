import { useEffect } from "react";
import Header from "./components/Header";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import { useAtomValue } from "jotai";
import { themeAtom } from "./store";

const App = () => {
  // const [theme, setTheme] = useState<"dark" | "light">("light");

  const theme = useAtomValue(themeAtom);

  console.log(theme);
  useEffect(() => {
    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <div className={`main-app ${theme}`}>
          <div
            className={`h-full ${
              theme === "dark" ? "dark:bg-black" : "bg-white"
            }`}
          >
            <Header />
          </div>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
