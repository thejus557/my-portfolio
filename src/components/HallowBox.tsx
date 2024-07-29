import { Box, Typography } from "@mui/material";

interface HallowBoxProps {
  image: string;
  skillName: string;
}

const HallowBox = ({ image, skillName }: HallowBoxProps) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "text.secondary",
        width: "100px",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <img src={image} alt={skillName} className="w-6 h-6 md:h-12 md:w-12" />
      <Typography sx={{ color: "text.secondary" }}>{skillName}</Typography>
    </Box>
  );
};

export default HallowBox;
