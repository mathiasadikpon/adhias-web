import React from "react";
import SkillCard from "./SkillCard";
import { Row, Col } from "reactstrap";

const skills = [
  { name: "React", experience: "4 years", image: "react.png" },
  { name: "JavaScript", experience: "5 years", image: "js.png" },
  { name: "Node.js", experience: "4 years", image: "node.png" },
  { name: "HTML", experience: "5 years", image: "html.png" },
  { name: "CSS", experience: "5 years", image: "css.png" },
];

const SkillsList = () => {
  return (
    <Row className="justify-content-center">
      {skills.map((skill, index) => (
        <Col
          key={index}
          xs="12"
          sm="6"
          md="4"
          lg="2"
          className="d-flex justify-content-center"
        >
          <SkillCard skill={skill} />
        </Col>
      ))}
    </Row>
  );
};

export default SkillsList;
