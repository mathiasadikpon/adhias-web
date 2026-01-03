import React from "react";
import ProjectCard from "./ProjectCard";
import { Row, Col } from "reactstrap";

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
    link: "https://github.com/yourusername/lehman-app",
  },
  {
    name: "Tip Calculator",
    description: "Mobile app to calculate tips and split bills among parties.",
    image: "tipcalc.png",
    link: "https://github.com/yourusername/tip-calculator",
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
