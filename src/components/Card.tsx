import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Card = () => {
	return (
		<Box className="group w-48 h-64 rounded-xl bg-gray-100 relative p-7 border-2 border-gray-300 transition ease-out duration-500 overflow-visible group-hover:border-light-secondary group-hover:shadow-lg">
			<Box className="text-black h-full gap-2 grid place-content-center">
				<Typography variant="h5" component="p" className="font-bold">
					Card title
				</Typography>
				<Typography variant="body2" component="p" className="text-gray-500">
					Here are the details of the card
				</Typography>
			</Box>
			<Button
				className="transform -translate-x-1/2 translate-y-[125%] w-[60%] rounded-lg bg-blue-500 text-white text-base py-2 px-4 absolute left-1/2 bottom-0 opacity-0 transition ease-out duration-300 group-hover:translate-y-1/2 group-hover:opacity-100"
				variant="contained"
			>
				More info
			</Button>
		</Box>
	);
};

export default Card;
