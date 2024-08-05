import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { RxHamburgerMenu } from "react-icons/rx";
import { USER_DETAILS } from "../json/index";
import { useState } from "react";
import Sidebar from "./Sidebar";

import { RxSun } from "react-icons/rx";
import { RxMoon } from "react-icons/rx";
import { useAtom } from "jotai";
import { themeAtom } from "../store";
import { AppBar } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

const navItems = ["About", "Skills", "Experience", "Contact"];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useAtom(themeAtom);

  const handleToggleSidebar = () => setToggle((p) => !p);

  const handleToggleTheme = () =>
    setTheme((p) => (p === "dark" ? "light" : "dark"));

  const handleItemClick = (e: string) => {
    const element = document.getElementById(e.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <AppBar className="shadow-none bg-none relative">
        <Box className="min-h-[64px] h-[120px] flex justify-between mx-2 md:mx-4 lg:mt-0 lg:justify-evenly items-center shadow-none">
          <ScrollAnimation
            animateOnce={true}
            duration={2}
            initiallyVisible={true}
            animateIn="backInLeft"
            animatePreScroll={false}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                component="div"
                sx={{ flexGrow: 1 }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
              >
                {USER_DETAILS.NAME.FIRST_NAME} {USER_DETAILS.NAME.MIDDLE_NAME}
              </Typography>
            </Box>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            duration={2}
            initiallyVisible={true}
            animateIn="backInRight"
            animatePreScroll={false}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {navItems.map((e) => (
                <>
                  <Box
                    className="hidden lg:flex flex-col group mx-6"
                    onClick={() => handleItemClick(e)}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      className="first-letter:capitalize hidden lg:flex cursor-pointer hover:text-light-textSecondary dark:hover:text-dark-textSecondary transition-all duration-300"
                    >
                      {e}
                    </Typography>
                    <Box className="h-[2px] hidden lg:block w-0 group-hover:w-full transition-all duration-300 bg-light-textSecondary dark:bg-dark-textSecondary"></Box>
                  </Box>
                </>
              ))}
              <Typography
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {theme === "dark" && (
                  <RxSun
                    fontSize={36}
                    className="mx-2 "
                    onClick={handleToggleTheme}
                  />
                )}

                {theme === "light" && (
                  <RxMoon
                    fontSize={36}
                    className="mx-2 "
                    onClick={handleToggleTheme}
                  />
                )}
              </Typography>

              <RxHamburgerMenu
                fontSize={36}
                className="mx-2 lg:hidden"
                onClick={handleToggleSidebar}
              />
            </Box>
          </ScrollAnimation>
        </Box>
      </AppBar>

      <Sidebar
        drawerState={toggle}
        navItemsList={navItems}
        onToggle={handleToggleSidebar}
      />
    </>
  );
};

export default Header;
