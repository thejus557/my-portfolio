import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const container = document.getElementById("root");

interface SibebarProps {
	drawerState: boolean;
	onToggle: () => void;
	navItemsList: Array<string>;
}

const Sidebar = ({ drawerState, onToggle, navItemsList }: SibebarProps) => {
	const handleItemClick = (e: string) => {
		onToggle();
		const element = document.getElementById(e.toLowerCase());
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<Drawer
			container={container}
			variant="temporary"
			open={drawerState}
			onClose={onToggle}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
			sx={{
				"& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
			}}
		>
			<Box
				sx={{
					margin: "26px 10px 26px 26px",
					marginRight: "1px",
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<RxCross2
					fontSize={36}
					className="mx-2 mt-4 block"
					onClick={onToggle}
				/>
			</Box>
			<Box
				sx={{
					margin: "36px",
					display: "flex",
					flexDirection: "column",
					gap: 5,
					alignItems: "center",
				}}
			>
				{React.Children.toArray(
					navItemsList.map((e) => (
						<Box
							key={e.toString()}
							className="group mx-6 flex flex-col justify-center items-center"
							onClick={() => handleItemClick(e)}
						>
							<Typography
								variant="h5"
								component="div"
								className="first-letter:capitalize cursor-pointer hover:text-light-gold dark:hover:text-dark-goldtext-light-gold transition-all duration-300"
							>
								{e}
							</Typography>
							<Box className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-light-gold dark:bg-dark-gold" />
						</Box>
					)),
				)}
			</Box>
		</Drawer>
	);
};

export default Sidebar;
