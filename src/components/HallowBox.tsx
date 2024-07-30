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
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="w-16 md:w-24 p-2 md:p-4"
    >
      <img src={image} alt={skillName} className="w-6 h-6 md:h-12 md:w-12" />
      <Typography
        sx={{
          color: "text.secondary",
        }}
        className="text-xs md:text-sm lg:text-base"
      >
        {skillName}
      </Typography>
    </Box>
  );
};

export default HallowBox;
