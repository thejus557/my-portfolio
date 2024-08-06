import { Box, keyframes, Typography } from "@mui/material";

import AngularIcon from "../assets/skills/icons8-angular-480.png";
import CSSIcon from "../assets/skills/icons8-css-480.png";
// import ExpressIcon from "../assets/skills/icons8-express-js-480.png";
// import FirebaseIcon from "../assets/skills/icons8-google-firebase-console-480.png";
import HTMLIcon from "../assets/skills/icons8-html-480.png";
import JavaScriptIcon from "../assets/skills/icons8-javascript-480.png";
// import MongoDBIcon from "../assets/skills/icons8-mongodb-480.png";
// import NodeJSIcon from "../assets/skills/icons8-nodejs-480.png";
import ReactNativeIcon from "../assets/skills/icons8-react-native-480.png";
import ReduxIcon from "../assets/skills/icons8-redux-480.png";
import TailwindIcon from "../assets/skills/icons8-tailwind-css-480.png";
import TypeScriptIcon from "../assets/skills/icons8-typescript-480.png";
import VueJSIcon from "../assets/skills/icons8-vuejs-240.png";
import RxjsIcon from "../assets/skills/rxjs.png";
import VuexIcon from "../assets/skills/vuex-1.svg";
import GitIcon from "../assets/skills/icons8-git-480.png";
import NxIcon from "../assets/skills/nx-logo.png";
import ScrollAnimation from "react-animate-on-scroll";

const frameworks = [
  {
    name: "React",
    icon: ReactNativeIcon,
    experience: "4.5",
  },
  {
    name: "Angular",
    icon: AngularIcon,
    experience: "3.5",
  },
  {
    name: "Vue",
    icon: VueJSIcon,
    experience: "2.5",
  },
];

const stateMangement = [
  {
    name: "Redux",
    icon: ReduxIcon,
    experience: "4.5",
  },
  {
    name: "Rxjs",
    icon: RxjsIcon,
    experience: "3.5",
  },
  {
    name: "Vuex",
    icon: VuexIcon,
    experience: "2.5",
  },
];

const styling = [
  {
    name: "Tailwind",
    icon: TailwindIcon,
    experience: "3",
  },
  {
    name: "HTML",
    icon: HTMLIcon,
    experience: "4.5",
  },
  {
    name: "CSS",
    icon: CSSIcon,
    experience: "4.5",
  },
];

const languages = [
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    experience: "4.5",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    experience: "4.5",
  },
];

// const backend = [
//   {
//     name: "NodeJS",
//     icon: NodeJSIcon,
//     experience: "2",
//   },
//   {
//     name: "Express",
//     icon: ExpressIcon,
//     experience: "2",
//   },
//   {
//     name: "Firebase",
//     icon: FirebaseIcon,
//     experience: "2",
//   },
//   {
//     name: "MongoDB",
//     icon: MongoDBIcon,
//     experience: "2",
//   },
// ];

const developmentTools = [
  {
    name: "Git",
    icon: GitIcon,
    experience: "2",
  },
  {
    name: "Nx Repo",
    icon: NxIcon,
    experience: "2",
  },
];

const skillsJson: Record<
  string,
  | typeof frameworks
  | typeof stateMangement
  | typeof styling
  | typeof languages
  | typeof developmentTools
> = {
  Frameworks: frameworks,
  "State Management": stateMangement,
  Styling: styling,
  Languages: languages,
  // backend,
  "Development Tools": developmentTools,
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Skills = () => {
  return (
    <Box
      id="skills"
      className="flex flex-col justify-center items-center mb-4 min-h-[calc(100dvh-120px)]"
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
          Explore my
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold" }}
          component="div"
          className="text-center mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl first-letter:text-dark-gold first-letter:italic 
          first-letter:text-2xl first-letter:md:text-3xl first-letter:lg:text-4xl first-letter:xl:text-5xl"
        >
          Skills
        </Typography>
      </ScrollAnimation>
      <Box className="grid grid-flow-row gap-4 md:gap-6 p-4">
        {Object.keys(skillsJson).map((ele) => (
          <ScrollAnimation
            animateOnce={true}
            initiallyVisible={false}
            animateIn="zoomIn"
            animateOut="fadeOut"
            animatePreScroll={false}
            className="h-full flex w-full"
          >
            <Box className="h-full flex flex-col md:flex-row justify-between items-center w-full gap-4">
              <Typography
                variant="body2"
                component={"div"}
                className="text-xl xl:text-2xl mr-4"
              >
                {ele}
              </Typography>
              <Box className="flex gap-2">
                {skillsJson &&
                  skillsJson?.[ele] &&
                  skillsJson?.[ele].map((skill) => (
                    <Box
                      sx={
                        ele === "Frameworks"
                          ? {
                              backgroundColor: "secondary.main",
                              position: "relative",
                              overflow: "hidden",
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              border: "none",
                              fontSize: "1rem",
                              fontWeight: 500,
                              cursor: "pointer",
                              zIndex: 1,
                              "&:active": {
                                transform: "scale(0.95)",
                              },
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: "-1px 30px",
                                backgroundColor: "#f6b846",
                                transition: "500ms",
                                animation: `${rotate} 4s linear infinite`,
                                zIndex: -1,
                              },
                              "&:hover::before": {
                                inset: "-1px",
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: "3px",
                                borderRadius: "50%",
                                backgroundColor: "secondary.main",
                                zIndex: -1,
                              },
                            }
                          : {
                              backgroundColor: "secondary.main",
                              borderRadius: "50%",
                              position: "relative",
                              overflow: "hidden",
                              width: "80px",
                              height: "80px",
                              border: "none",
                              fontSize: "1rem",
                              fontWeight: 500,
                              cursor: "pointer",
                              zIndex: 1,
                              "&:active": {
                                transform: "scale(0.95)",
                              },
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: "-1px 100px",
                                backgroundColor: "#f6b846",
                                transition: "500ms",
                                zIndex: -1,
                              },
                              "&:hover::before": {
                                inset: "-1px",
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: "3px",
                                borderRadius: "50%",
                                backgroundColor: "secondary.main",
                                zIndex: -1,
                              },
                            }
                      }
                      className="w-[64px] md:w-[64px] h-[64px] md:h-[64px] p-4 flex justify-center items-center flex-col"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                      <Typography
                        sx={{
                          color: "text.primary",
                        }}
                        className="text-xs"
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          </ScrollAnimation>
        ))}

        <Box>Click Me</Box>
      </Box>
    </Box>
  );
};

export default Skills;
