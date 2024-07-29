import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const experienceJson = [
  {
    company: "Techolution",
    location: "Hyderabad, Telangana, India",
    positions: [
      {
        title: "Senior UI Developer",
        dates: "Aug 2022 - Present",
        duration: "2 years",
        responsibilities: [
          "Led the design and implementation of dynamic user interfaces, improving user engagement and application performance.",
          "Managed cross-functional teams to deliver high-quality UI components, adhering to best practices and design guidelines.",
          "Enhanced application scalability and efficiency by leveraging advanced technologies and optimizing code.",
        ],
      },
      {
        title: "Associate UI Developer",
        dates: "Mar 2021 - Aug 2022",
        duration: "1 year 6 months",
        responsibilities: [
          "Collaborated with design and development teams to convert complex UI/UX requirements into functional, user-friendly interfaces.",
          "Implemented responsive design elements to improve user experience across various devices and platforms.",
          "Assisted in debugging and troubleshooting to maintain application stability and performance.",
        ],
      },
      {
        title: "UI Intern",
        dates: "Sep 2020 - Mar 2021",
        duration: "7 months",
        responsibilities: [
          "Supported the development and styling of web pages, gaining practical experience with modern web technologies.",
          "Assisted senior developers in creating and testing user interfaces, following best practices in UI development.",
          "Contributed to project documentation and participated in code reviews to enhance technical skills.",
        ],
      },
    ],
  },
  {
    company: "SmartX Connected Products",
    location: "Chennai Area, India",
    positions: [
      {
        title: "Mean Stack Developer Intern",
        dates: "Jan 2020 - Mar 2020",
        duration: "3 months",
        responsibilities: [
          "Contributed to the development of full-stack applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js).",
          "Engaged in coding, debugging, and testing to ensure robust and scalable web solutions.",
          "Collaborated with the development team to meet project requirements and deliver high-quality features.",
        ],
      },
    ],
  },
  {
    company: "Ideal Village Development",
    location: "Hyderabad, India",
    positions: [
      {
        title: "Web Developer Intern",
        dates: "Aug 2019 - Sep 2019",
        duration: "1 month",
        responsibilities: [
          "Assisted in the development and maintenance of web applications, focusing on coding and debugging.",
          "Collaborated with senior developers to implement and refine website features and functionalities.",
          "Supported project documentation and participated in team meetings and code reviews.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      className="mb-4 min-h-[calc(100dvh-120px)] flex flex-col justify-center items-center"
    >
      <Typography
        variant="h6"
        sx={{ color: "text.secondary" }}
        component="div"
        className="text-center mb-2 text-sm"
      >
        Go through my
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold" }}
        component="div"
        className="text-center mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Experience
      </Typography>

      <Box
        sx={{
          border: "1px solid",
          borderColor: "text.secondary",
          borderRadius: "1rem",
          padding: "1rem",
          margin: "0 auto",
        }}
      >
        <Timeline>
          {experienceJson.map((exp) => (
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                <Typography variant="body1" component="div" gutterBottom>
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize={12}>
                  {exp.location}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {exp.positions.map((position, posIndex) => (
                  <div key={posIndex}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {position.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      fontSize={10}
                    >
                      {position.dates} ({position.duration})
                    </Typography>
                  </div>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};

export default Experience;
