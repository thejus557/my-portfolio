import { useEffect } from "react";
import Header from "./components/Header";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import { useAtomValue } from "jotai";
import { themeAtom } from "./store";
import { useSetAtom } from "jotai/react";

import Intro from "./pages/Intro";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  const theme = useAtomValue(themeAtom);
  const setTheme = useSetAtom(themeAtom);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#1c1c1c" : "#fff";
  }, [theme]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.body.style.backgroundColor = "#1c1c1c";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#fff";
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Header />
        <div className={`main-app ${theme} pt-[120px]`}>
          <div
            className={`h-full ${
              theme === "dark" ? "dark:bg-[#1c1c1c]" : "bg-white"
            }`}
          >
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
