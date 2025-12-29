import React from "react";
import SkillCard from "./SkillCard";
import { Row, Col } from "reactstrap";

const skills = [
  { name: "React", experience: "4 years", image: "/assets/images/react.png" },
  { name: "JavaScript", experience: "3 years", image: "/assets/images/js.png" },
  { name: "Node.js", experience: "4 years", image: "/assets/images/node.png" },
  { name: "HTML", experience: "4 years", image: "/assets/images/html.png" },
  { name: "CSS", experience: "4 years", image: "/assets/images/css.png" },
];

const SkillsList = () => {
  return (
    <Row className="justify-content-center">
      {skills.map((skill, index) => (
        <Col key={index} xs="6" sm="4" md="3" lg="2">
          <SkillCard skill={skill} />
        </Col>
      ))}
    </Row>
  );
};

export default SkillsList;
