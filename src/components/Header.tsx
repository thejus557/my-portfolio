import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { USER_DETAILS } from "../json/index";
import Sidebar from "./Sidebar";

import { AppBar } from "@mui/material";
import { useAtom } from "jotai";
import ScrollAnimation from "react-animate-on-scroll";
import { RxSun } from "react-icons/rx";
import { RxMoon } from "react-icons/rx";
import { themeAtom } from "../store";

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
			<AppBar
				className="shadow-none bg-transparent relative"
				sx={{ backgroundImage: "unset", border: "unset" }}
			>
				<Box
					className="min-h-[64px] h-[120px] flex justify-between mx-2 md:mx-4 lg:mt-0 lg:justify-evenly items-center shadow-none"
					sx={{ backgroundImage: "unset", border: "unset" }}
				>
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
								className="text-xl md:text-2xl lg:text-3xl xl:text-4xl first-letter:text-dark-gold first-letter:italic 
              first-letter:text-2xl first-letter:md:text-3xl first-letter:lg:text-4xl first-letter:xl:text-5xl"
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
										key={e.toString()}
										className="hidden lg:flex flex-col group mx-6"
										onClick={() => handleItemClick(e)}
									>
										<Typography
											variant="h5"
											component="div"
											className="first-letter:capitalize hidden lg:flex cursor-pointer hover:text-light-gold dark:hover:text-dark-goldtext-light-gold transition-all duration-300"
										>
											{e}
										</Typography>
										<Box className="h-[2px] hidden lg:block w-0 group-hover:w-full transition-all duration-300 bg-light-gold dark:bg-dark-gold" />
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
