import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { RxHamburgerMenu } from "react-icons/rx";
import { USER_DETAILS } from "../json/index";
import { useState } from "react";
import Sidebar from "./Sidebar";

import { RxSun } from "react-icons/rx";
import { RxMoon } from "react-icons/rx";
import { useAtom } from "jotai";
import { themeAtom } from "../store";

const navItems = ["About", "Experience", "Projects", "Contact"];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useAtom(themeAtom);

  const handleToggleSidebar = () => setToggle((p) => !p);

  const handleToggleTheme = () =>
    setTheme((p) => (p === "dark" ? "light" : "dark"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="h-[12dvh] flex justify-center shadow-none"
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            className="first-letter:capitalize"
          >
            {USER_DETAILS.NAME.FIRST_NAME} {USER_DETAILS.NAME.MIDDLE_NAME}
          </Typography>
          {navItems.map((e) => (
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="first-letter:capitalize hidden lg:flex cursor-pointer"
            >
              {e}
            </Typography>
          ))}

          {theme === "dark" && (
            <RxSun
              fontSize={36}
              className="mx-2 lg:hidden"
              onClick={handleToggleTheme}
            />
          )}

          {theme === "light" && (
            <RxMoon
              fontSize={36}
              className="mx-2 lg:hidden"
              onClick={handleToggleTheme}
            />
          )}

          <RxHamburgerMenu
            fontSize={36}
            className="mx-2 lg:hidden"
            onClick={handleToggleSidebar}
          />
        </Toolbar>
      </AppBar>
      <Sidebar
        drawerState={toggle}
        navItemsList={navItems}
        onToggle={handleToggleSidebar}
      />
    </Box>
  );
};

export default Header;
