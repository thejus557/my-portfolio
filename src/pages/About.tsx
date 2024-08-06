import { Box, Paper, Typography } from "@mui/material";

import ProfilePic from "../assets/profile-pic-2.png";

import { FaAward } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <Box
      id="about"
      className="flex flex-col justify-center items-center py-[44px]"
    >
      <ScrollAnimation
        animateOnce={true}
        initiallyVisible={false}
        animateIn="fadeInDown"
        animateOut="fadeOut"
        animatePreScroll={false}
      >
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
          sx={{
            fontWeight: "bold",
          }}
          component="div"
          className="text-center mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl first-letter:text-dark-gold first-letter:italic 
          first-letter:text-2xl first-letter:md:text-3xl first-letter:lg:text-4xl first-letter:xl:text-5xl"
        >
          About Me
        </Typography>
      </ScrollAnimation>
      <Box className="flex flex-col justify-center items-center lg:flex-row gap:10 lg:gap-20 relative">
        <ScrollAnimation
          animateOnce={true}
          initiallyVisible={false}
          animateIn="bounceInLeft"
           animateOut="fadeOut"
          animatePreScroll={false}
          delay={0.2}
          className="relative"
        >
          <Box className="flex flex-col my-4 lg:my-0">
            {/* <Box className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[320px] lg:h-[320px] xl:w-[420px] xl:h-[420px] absolute bg-gradient-to-br from-gold-40 to-gold-1 z-0 right-[6%] top-[6%]"></Box> */}
            <Box className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[320px] lg:h-[320px] xl:w-[420px] xl:h-[420px] absolute bg-gradient-to-br from-gold-40 to-gold-1 z-0 right-[6%] top-[4%] md:top-[2%] lg:top-[6%] rounded-[20%]"></Box>

            <img
              src={ProfilePic}
              className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[320px] lg:h-[320px] xl:w-[420px] xl:h-[420px] relative z-10 rounded-[20%]"
            />
          </Box>
        </ScrollAnimation>
        <Box className="flex flex-col text-center items-center justify-center">
          <ScrollAnimation
            animateOnce={true}
            initiallyVisible={false}
            animateIn="bounceInRight"
             animateOut="fadeOut"
            animatePreScroll={false}
            delay={0.2}
          >
            <Box className="flex text-center justify-between flex-col md:flex-row lg:flex-row gap-5 p-4">
              <Paper
                sx={{
                  // border: "1px solid",
                  // borderColor: "text.secondary",
                  width: "245px",
                  borderRadius: "1rem",
                  padding: "1rem",
                }}
              >
                <Typography>
                  <FaAward fontSize={"24px"} />
                </Typography>

                <Typography>Experience</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  4+ years
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Frontend Development
                </Typography>
              </Paper>

              <Paper
                sx={{
                  // border: "1px solid",
                  // borderColor: "text.secondary",
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
              </Paper>
            </Box>
          </ScrollAnimation>
          <Box className="flex text-center">
            <ScrollAnimation
              animateOnce={true}
              initiallyVisible={false}
              animateIn="bounceInRight"
               animateOut="fadeOut"
              animatePreScroll={false}
              delay={0.2}
            >
              <Paper
                sx={{
                  maxWidth: "580px",
                  textAlign: "left",
                }}
                className="mx-4 md:mx-0"
              >
                <Typography sx={{ color: "text.secondary", padding: "1rem" }}>
                  Well, I'm a Frontend Developer expert in creating
                  top-tier user interfaces. With extensive experience in UI
                  development and a keen eye for detail, I've made significant
                  contributions to various projects and organizations.
                </Typography>
                <Typography sx={{ color: "text.secondary", padding: "1rem" }}>
                  Currently, I'm a Senior UI Developer at Techolution, where
                  I've led UI modernization projects. I excel in creating
                  pixel-perfect, responsive, and accessible UIs that delight
                  users and meet business goals.
                </Typography>
                <Typography sx={{ color: "text.secondary", padding: "1rem" }}>
                  I'm always eager to learn and grow, and I'm excited about the
                  opportunity to work on innovative projects that push the
                  boundaries of what's possible.
                </Typography>
              </Paper>
            </ScrollAnimation>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
