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
import GitIcon from "../assets/skills/icons8-git-480.png";
import NxIcon from "../assets/skills/nx-logo.png";

function shuffleArray(
  array: {
    name: string;
    icon: string;
    experience: string;
  }[]
) {
  const shuffledArray = array.slice(); // Create a copy of the array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j;

    // Ensure that the selected element is not the same as the previous one
    do {
      j = Math.floor(Math.random() * (i + 1));
    } while (j === i && shuffledArray[i].name === shuffledArray[j].name);

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Final check to ensure no two adjacent elements are the same
  for (let i = 1; i < shuffledArray.length; i++) {
    if (shuffledArray[i].name === shuffledArray[i - 1].name) {
      // Swap with a non-adjacent element
      const swapIndex = (i + 1) % shuffledArray.length;
      [shuffledArray[i], shuffledArray[swapIndex]] = [
        shuffledArray[swapIndex],
        shuffledArray[i],
      ];
    }
  }

  return shuffledArray;
}

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
    name: "Nx Monorepo",
    icon: NxIcon,
    experience: "2",
  },
];

const Skills = () => {
  const shuffledSkillsOne = shuffleArray(skillsJson);
  const shuffledSkillsTwo = shuffleArray(skillsJson);
  const shuffledSkillsThree = shuffleArray(skillsJson);

  return (
    <Box
      id="skills"
      className="flex flex-col justify-center items-center mb-4 min-h-[calc(100dvh-120px)]"
    >
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
            {shuffledSkillsOne.map((skill, index) => (
              <HallowBox
                key={index}
                image={skill.icon}
                skillName={skill.name}
              />
            ))}
            {shuffledSkillsOne.map((skill, index) => (
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
          <Box className="slide-track-reverse flex text-center justify-between md:flex-row lg:flex-row gap-5 p-4">
            {shuffledSkillsTwo.reverse().map((skill, index) => (
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
      <Box className="flex md:hidden flex-col justify-center items-center gap:10 lg:gap-20">
        <Box className="slider flex text-center items-center justify-center mix-blend-plus-darker">
          <Box className="slide-track flex text-center justify-between md:flex-row lg:flex-row gap-5 p-4">
            {shuffledSkillsThree.map((skill, index) => (
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
