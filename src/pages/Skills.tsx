import { Box, Typography } from "@mui/material";

import HallowBox from "../components/HallowBox";

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
import RxjsIcon from "../assets/skills/images.jpeg";
import NGRXIcon from "../assets/skills/ngrx.svg";
import VuexIcon from "../assets/skills/vuex-1.svg";

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
];

const Skills = () => {
  return (
    <Box className="flex flex-col justify-center items-center mb-4 h-[calc(100dvh-120px)]">
      <Typography
        variant="h6"
        sx={{ color: "text.secondary" }}
        component="div"
        className="text-center mb-2 text-sm"
      >
        Checkout my
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold" }}
        component="div"
        className="text-center mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Skill Set
      </Typography>
      <Box className="flex flex-col justify-center items-center lg:flex-row gap:10 lg:gap-20">
        <Box className="slider flex text-center items-center justify-center">
          <Box className="slide-track flex text-center justify-between md:flex-row lg:flex-row gap-5 p-4">
            {skillsJson.map((skill, index) => (
              <HallowBox
                key={index}
                image={skill.icon}
                skillName={skill.name}
              />
            ))}
            {skillsJson.map((skill, index) => (
              <HallowBox
                key={index + skillsJson.length}
                image={skill.icon}
                skillName={skill.name}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col justify-center items-center lg:flex-row gap:10 lg:gap-20">
        <Box className="slider flex text-center items-center justify-center mix-blend-plus-darker">
          <Box className="slide-track-reverse flex text-center justify-between md:flex-row-reverse lg:flex-row-reverse gap-5 p-4">
            {skillsJson.map((skill, index) => (
              <HallowBox
                key={index}
                image={skill.icon}
                skillName={skill.name}
              />
            ))}
            {skillsJson.map((skill, index) => (
              <HallowBox
                key={index + skillsJson.length}
                image={skill.icon}
                skillName={skill.name}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
