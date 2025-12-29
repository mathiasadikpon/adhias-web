import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const ProjectCard = ({ project }) => {
  const { name, description, image = "logo.png", link } = project;

  return (
    <Card className="m-2 project-card" style={{ width: "16rem" }}>
      {image && (
        <CardImg
          top
          src="/images/img.jpg" //{`/images/${image}`}
          alt={name}
          style={{ height: "120px", objectFit: "cover" }}
        />
      )}
      <CardBody className="text-center">
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{description}</CardText>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Project
          </a>
        )}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
