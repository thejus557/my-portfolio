import { Box, Button, Typography } from "@mui/material";
import { USER_DETAILS } from "../json";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
// import ProfilePic from "../assets/profile-pic.png";
import ProfilePicDark from "../assets/profile-pic-dark.png";
import ProfilePicLight from "../assets/profile-pic-light.png";
import { useAtomValue } from "jotai";
import { themeAtom } from "../store";

const Intro = () => {
  const theme = useAtomValue(themeAtom);

  return (
    <Box className="flex flex-col justify-center items-center lg:flex-row gap:10 lg:gap-20  h-[calc(100dvh-120px)]">
      <Box className="flex flex-col">
        <img
          src={theme === "light" ? ProfilePicDark : ProfilePicLight}
          className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[320px] lg:h-[320px] xl:w-[420px] xl:h-[420px]"
        />
      </Box>
      <Box className="flex flex-col text-center">
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "text.secondary" }}
          className="mt-4"
        >
          Hello I'm
        </Typography>
        <Typography
          variant="h3"
          component="div"
          className="my-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        >
          {USER_DETAILS.NAME.FIRST_NAME} {USER_DETAILS.NAME.MIDDLE_NAME}{" "}
          {USER_DETAILS.NAME.LAST_NAME}
        </Typography>
        <Typography
          variant="h4"
          component="div"
          fontWeight={"bold"}
          sx={{ color: "text.secondary" }}
          className="mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          {USER_DETAILS.PROFESSION}
        </Typography>
        <Box className="flex gap-4 justify-center">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "2rem",
              padding: "0.5rem",
              textTransform: "none",
            }}
          >
            Download CV
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "2rem",
              padding: "0.5rem",
              textTransform: "none",
              backgroundColor: "primary.main",
              color: "secondary.main",
              ":hover": {
                color: "text.secondary",
              },
            }}
          >
            Contact Info
          </Button>
        </Box>
        <Box className="flex gap-4 justify-center mt-4">
          <Typography variant="h5" component="div">
            <FaLinkedin fontSize={"24"} />
          </Typography>
          <Typography variant="h5" component="div">
            <FaGithub fontSize={"24"} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
