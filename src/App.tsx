import { useEffect, useState } from "react";
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
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Typography from "@mui/material/Typography";
import DialogComponent from "./components/Chat";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const theme = useAtomValue(themeAtom);
  const setTheme = useSetAtom(themeAtom);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { sender: "user", text: message }]);
      setMessage("");
    }
  };

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
  }, [setTheme]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Header />
        {isOpen && (
          <DialogComponent
            isOpen={isOpen}
            closeDialog={() => setIsOpen(false)}
            chat={chat}
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />
        )}
        <div className={`relative main-app ${theme} m-2 md:m-0`}>
          <Typography
            variant="h5"
            component="div"
            className="fixed bottom-8 right-8"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setIsOpen(true)}
          >
            <IoChatboxEllipsesOutline width={30} height={30} className="" />
          </Typography>
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
