import { Box, Paper, Typography } from "@mui/material";

import AngularIcon from "../assets/skills/icons8-angular-480.png";
import CSSIcon from "../assets/skills/icons8-css-480.png";
import ExpressIcon from "../assets/skills/icons8-express-js-480.png";
import FirebaseIcon from "../assets/skills/icons8-google-firebase-console-480.png";
import HTMLIcon from "../assets/skills/icons8-html-480.png";
import JavaScriptIcon from "../assets/skills/icons8-javascript-480.png";
import MongoDBIcon from "../assets/skills/icons8-mongodb-480.png";
import NodeJSIcon from "../assets/skills/icons8-nodejs-480.png";
import ReactNativeIcon from "../assets/skills/icons8-react-native-480.png";
import ReduxIcon from "../assets/skills/icons8-redux-480.png";
import TailwindIcon from "../assets/skills/icons8-tailwind-css-480.png";
import TypeScriptIcon from "../assets/skills/icons8-typescript-480.png";
import VueJSIcon from "../assets/skills/icons8-vuejs-240.png";
import RxjsIcon from "../assets/skills/rxjs.png";
import NGRXIcon from "../assets/skills/ngrx.svg";
import VuexIcon from "../assets/skills/vuex-1.svg";
import GitIcon from "../assets/skills/icons8-git-480.png";
import NxIcon from "../assets/skills/nx-logo.png";
import ScrollAnimation from "react-animate-on-scroll";

const skillsJson = [
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
  {
    name: "Tailwind",
    icon: TailwindIcon,
    experience: "3",
  },
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
  {
    name: "React",
    icon: ReactNativeIcon,
    experience: "4.5",
  },

  {
    name: "Redux",
    icon: ReduxIcon,
    experience: "4.5",
  },

  {
    name: "Angular",
    icon: AngularIcon,
    experience: "3.5",
  },

  {
    name: "Rxjs",
    icon: RxjsIcon,
    experience: "3.5",
  },
  {
    name: "NGRX",
    icon: NGRXIcon,
    experience: "3.5",
  },
  {
    name: "VueJS",
    icon: VueJSIcon,
    experience: "2.5",
  },

  {
    name: "Vuex",
    icon: VuexIcon,
    experience: "2.5",
  },

  {
    name: "NodeJS",
    icon: NodeJSIcon,
    experience: "2",
  },

  {
    name: "Express",
    icon: ExpressIcon,
    experience: "2",
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
    experience: "2",
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
    experience: "2",
  },
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

const Skills = () => {
  return (
    <Box
      id="skills"
      className="flex flex-col justify-center items-center mb-4 min-h-[calc(100dvh-120px)]"
    >
      <ScrollAnimation
        animateOnce={false}
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
          Look at my
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
      <Box className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 p-4">
        {skillsJson.map((skill) => (
          <ScrollAnimation
            animateOnce={false}
            initiallyVisible={false}
            animateIn="zoomIn"
             animateOut="fadeOut"
            animatePreScroll={false}
          >
            <Paper
              sx={{
                // border: "1px solid",
                // borderColor: "text.secondary",
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              className="w-[100px] md:w-[120px] p-4"
            >
              <img src={skill.icon} alt={skill.name} className="w-4 h-4 md:w-6 md:h-6" />
              <Typography
                sx={{
                  color: "text.secondary",
                }}
                className="text-xs md:text-base"
              >
                {skill.name}
              </Typography>
            </Paper>
          </ScrollAnimation>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
