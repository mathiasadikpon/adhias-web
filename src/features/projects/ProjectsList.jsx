import React from "react";
import ProjectCard from "./ProjectCard";
import { Row, Col } from "reactstrap";

// const projects = [
//   {
//     name: "Web Calculator",
//     description:
//       "A sophisticated web-based calculator using JavaScript, HTML, CSS.",
//     image: "calculator.png",
//     link: "https://github.com/mathiasadikpon/tip-calculator-.git",
//   },
//   {
//     name: "Lehman App",
//     description:
//       "Course management app for Lehman College students, with weather & transport integration.",
//     image: "lehmanapp.png",
//     //link: "https://github.com/mathiasadikpon/lehman-app",
//     link: "https://youtu.be/cvb3rLF4baU",
//   },
//   {
//     name: "Tip Calculator",
//     description: "Mobile app to calculate tips and split bills among parties.",
//     image: "tipcalc.png",
//     //link: "https://github.com/mathiasadikpon/tip-calculator",
//     link: "https://youtu.be/gLP8kYH-aVI",
//   },
// ];

const projects = [
  {
    name: "Web Calculator",
    description:
      "A sophisticated web-based calculator using JavaScript, HTML, CSS.",
    image: "calculator.png",
    link: "https://github.com/mathiasadikpon/tip-calculator-.git",
  },
  {
    name: "Lehman App",
    description:
      "Course management app for Lehman College students, with weather & transport integration.",
    image: "lehmanapp.png",
    link: "https://youtu.be/cvb3rLF4baU",
  },
  {
    name: "Tip Calculator",
    description: "Mobile app to calculate tips and split bills among parties.",
    image: "tipcalc.png",
    link: "https://youtu.be/gLP8kYH-aVI",
  },
  {
    name: "JavaScript Project",
    description: "A recent JavaScript-based project demonstration.",
    image: "jsproject.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "Mathias Project 1",
    description: "Personal development project showcase.",
    image: "mathiasproject1.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw", // Replace with correct ID if different
  },
  {
    name: "MP6 I AM HOME",
    description: "Project demonstration for MP6.",
    image: "mp6.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "MP5 Foodie App",
    description:
      "A foodie application project with physical device demonstration.",
    image: "foodieapp.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "MP4 Tip Calculator with menu",
    description:
      "Extended Tip Calculator project featuring a custom menu system.",
    image: "tipcalc_menu.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "MP3 Score Counter",
    description: "A score tracking application project.",
    image: "scorecounter.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "MP2 CMP430",
    description: "Project for CMP430 course requirements.",
    image: "cmp430.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
];

const ProjectsList = () => {
  return (
    <Row className="justify-content-center g-4">
      {projects.map((project, index) => (
        <Col
          key={index}
          xs="12"
          sm="6"
          md="4"
          lg="3"
          className="d-flex justify-content-center"
        >
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
