import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

const SkillCard = ({ skill }) => {
  const { name, experience, image } = skill;
  console.log(image);
  return (
    <Card className="m-2 skill-card" style={{ width: "12rem" }}>
      <CardImg
        top
        src={`/images/${image}`}
        alt={name}
        style={{ height: "100px", padding: "1rem" }}
      />
      <CardBody className="text-center">
        <CardTitle tag="h5">{name}</CardTitle>
        <p>{experience}</p>
      </CardBody>
    </Card>
  );
};

export default SkillCard;
