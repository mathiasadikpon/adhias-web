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
    link: "https://youtu.be/Ih-sg8RdwdA",
  },
  {
    name: "JavaScript Project",
    description: "A recent JavaScript-based project demonstration.",
    image: "jsproject.png",
    link: "https://youtu.be/WdXm9kuVJvI",
  },

  // Add Data Visualization projects as needed
  {
    name: "Class Project: Data visualization cars dataset",
    description:
      "Data visualization project using a cars dataset for class demonstration.",
    image: "dataviz.png",
    link: "https://youtu.be/e6auyPK6c2w",
  },
  {
    name: "Class Project: Data visualization food security dataset",
    description:
      "Data visualization project using a food security dataset for class demonstration.",
    image: "dataviz.png",
    link: "https://youtu.be/aQw_O99sD9Y",
  },
  {
    name: "MP6 I AM HOME",
    description: "Project demonstration for MP6.",
    image: "mp6.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "Foodie App",
    description:
      "A foodie application project with physical device demonstration.",
    image: "foodieapp.png",
    link: "https://youtu.be/0-9-JTLcTLXNLsSaw",
  },
  {
    name: "Tip Calculator with menu",
    description:
      "Extended Tip Calculator project featuring a custom menu system.",
    image: "tipcalc_menu.png",
    link: "https://youtu.be/gLP8kYH-aVI",
  },
  {
    name: "Score Counter",
    description: "A score tracking application project.",
    image: "scorecounter.png",
    link: "https://youtu.be/CY4Dir1YTS4",
  },
  {
    name: "Foodie App",
    description:
      "A foodie application project with physical device demonstration.",
    image: "foodieapp.png",
    link: "https://youtu.be/MvncBR_RiZw",
  },

  // Add Mathematics projects as needed
  {
    name: "Mathematics: Law of Cosines Explained",
    description:
      "Educational video explaining the Law of Cosines in trigonometry.",
    image: "law_of_cosines.png",
    link: "https://youtu.be/Pv9DawB0cSI",
  },
  {
    name: "Factorization Degree 2 Eplained",
    description:
      "Educational video explaining factorization of degree 2 polynomials.",
    image: "factorization.png",
    link: "https://youtu.be/RCE6ggiSYgs",
  },
  {
    name: "Mathematics: Find the Fourier Siries of Functions",
    description:
      "Exploration of finding Fourier series for various functions in mathematical analysis.",
    image: "fourier_series.png",
    link: "https://youtu.be/XLVZthT3-Os",
  },
  {
    name: "Mathematics: Orthogonal Systems of Functions",
    description:
      "Exploration of orthogonal systems of functions in mathematical analysis.",
    image: "orthogonal.png",
    link: "https://youtu.be/9s8n2Xo7l3E",
  },
  {
    name: "Mathematics: Convergence of Trigonometric Fourier Series",
    description:
      "Exploration of the convergence properties of trigonometric Fourier series.",
    image: "convergence.png",
    link: "https://youtu.be/B1AJw7tKG9g",
  },
  {
    name: "Trigonometric Series with Decreasing Coefficients",
    description:
      "Exploration of trigonometric series with decreasing coefficients.",
    image: "trigonometric.png",
    link: "https://youtu.be/OaS1s3OvAak",
  },
  {
    name: "Mathematics: Operations on Fourier Series",
    description: "Demonstration of mathematical operations on Fourier series.",
    image: "fourier.png",
    link: "https://youtu.be/etQU9sYjN3E",
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
