import { Box, Typography } from "@mui/material";

import ProfilePic from "../assets/profile-pic-2.png";

import { FaAward } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <Box className="flex flex-col justify-center items-center">
      <Typography
        variant="h6"
        sx={{ color: "text.secondary" }}
        component="div"
        className="text-center mb-2 text-sm"
      >
        Get To Know More
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold" }}
        component="div"
        className="text-center mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        About Me
      </Typography>
      <Box className="flex flex-col justify-center items-center lg:flex-row gap:10 lg:gap-20">
        <Box className="flex flex-col my-4 lg:my-0">
          <img
            src={ProfilePic}
            className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[320px] lg:h-[320px] xl:w-[420px] xl:h-[420px]"
          />
        </Box>
        <Box className="flex flex-col text-center items-center justify-center">
          <Box className="flex text-center justify-between flex-col md:flex-row lg:flex-row gap-5 p-4">
            <Box
              sx={{
                border: "1px solid",
                borderColor: "text.secondary",
                width: "245px",
                borderRadius: "1rem",
                padding: "1rem",
              }}
            >
              <Typography>
                <FaAward fontSize={"24px"} />
              </Typography>

              <Typography>Experience</Typography>
              <Typography sx={{ color: "text.secondary" }}>4+ years</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Frontend Development
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid",
                borderColor: "text.secondary",
                width: "245px",
                borderRadius: "1rem",
                padding: "1rem",
              }}
            >
              <Typography>
                <FaUserGraduate fontSize={"24px"} />
              </Typography>

              <Typography>Education</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                B.Tech Bachelors Degree
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Computer Science & Engineering
              </Typography>
            </Box>
          </Box>
          <Box className="flex text-center">
            <Box
              sx={{
                maxWidth: "580px",
                textAlign: "left",
              }}
              className="mx-4 md:mx-0"
            >
              <Typography sx={{ color: "text.secondary", marginY: "1rem" }}>
                Well, I'm a Frontend Developer passionate about creating
                top-tier user interfaces. With extensive experience in UI
                development and a keen eye for detail, I've made significant
                contributions to various projects and organizations.
              </Typography>
              <Typography sx={{ color: "text.secondary", marginY: "1rem" }}>
                Currently, I'm a Senior UI Developer at Techolution, where I've
                led UI modernization projects. I excel in creating
                pixel-perfect, responsive, and accessible UIs that delight users
                and meet business goals.
              </Typography>
              <Typography sx={{ color: "text.secondary", marginY: "1rem" }}>
                I'm always eager to learn and grow, and I'm excited about the
                opportunity to work on innovative projects that push the
                boundaries of what's possible.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
