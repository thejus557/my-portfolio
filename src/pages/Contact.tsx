import { Box, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Experience = () => {
  const handleMailClick = () => {
    window.open("mailto:suryatejakandukuru8@gmail.com");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/thejus557");
  };

  const handleLinkedInClick = () => {
    window.open("https://in.linkedin.com/in/suryateja-k-1825b8151");
  };

  return (
    <Box
      id="contact"
      className="mb-4 min-h-[calc(100dvh-120px)] flex flex-col justify-center items-center"
    >
       <ScrollAnimation
        initiallyVisible={false}
        animateIn="fadeInDown"
        animatePreScroll={false}
      >
      <Typography
        variant="h6"
        sx={{ color: "text.secondary" }}
        component="div"
        className="text-center mb-2 text-sm"
      >
        Get in Touch
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold" }}
        component="div"
        className="text-center mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Contact Me
      </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        initiallyVisible={false}
        animateIn="flipInX"
        animatePreScroll={false}
      >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "text.secondary",
          borderRadius: "1rem",
          padding: "1rem",
          margin: "0 auto",
        }}
      >
        
        <Box className="flex flex-col gap-4 p-1 lg:p-4 lg:flex-row">
          
          <Typography
            variant="h6"
            sx={{ color: "text.secondary" }}
            component="div"
            className="text-center text-sm flex justify-center items-center"
            onClick={handleMailClick}
          >
            <Box className="group lg:mx-6 flex flex-col justify-center items-center">
              <Typography
                variant="h5"
                component="div"
                className="cursor-pointer hover:text-light-textSecondary dark:hover:text-dark-textSecondary transition-all duration-300 text-sm md:text-xl flex justify-center items-center "
              >
                <IoIosMail className="inline-block mr-2" fontSize={24} />
                suryatejakandukuru8@gmail.com
              </Typography>
              <Box className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-light-textSecondary dark:bg-dark-textSecondary"></Box>
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "text.secondary" }}
            component="div"
            className="text-center text-sm flex justify-center items-center"
            onClick={handleGithubClick}
          >
            <Box className="group mx-6 flex flex-col justify-center items-center">
              <Typography
                variant="h5"
                component="div"
                className="cursor-pointer hover:text-light-textSecondary dark:hover:text-dark-textSecondary transition-all duration-300 text-sm md:text-xl flex justify-center items-center"
              >
                <FaGithub className="inline-block mr-2" fontSize={24} />
                Github
              </Typography>
              <Box className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-light-textSecondary dark:bg-dark-textSecondary"></Box>
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "text.secondary" }}
            component="div"
            className="text-center text-sm flex justify-center items-center"
            onClick={handleLinkedInClick}
          >
            <Box className="group mx-6 flex flex-col justify-center items-center">
              <Typography
                variant="h5"
                component="div"
                className="cursor-pointer hover:text-light-textSecondary dark:hover:text-dark-textSecondary transition-all duration-300 text-sm md:text-xl flex justify-center items-center"
              >
                <IoLogoLinkedin className="inline-block mr-2" fontSize={24} />
                LinkedIn
              </Typography>
              <Box className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-light-textSecondary dark:bg-dark-textSecondary"></Box>
            </Box>
          </Typography>
        </Box>
      </Box>
        </ScrollAnimation>
    </Box>
  );
};

export default Experience;
