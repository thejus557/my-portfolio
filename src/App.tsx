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

import Bg from './assets/bg.svg'
import Background from "./components/Background";
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

    window.scrollBy(0, 1);
  }, [setTheme]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Background />
        
        <Header />
        <div className={`main-app ${theme} m-2 md:m-0 overflow-x-hidden`}>
          <div
            className={`h-full bg-transparent
            `}
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
