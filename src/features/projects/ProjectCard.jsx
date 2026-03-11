import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const ProjectCard = ({ project }) => {
  const { name, description, image, link } = project;

  return (
    <Card className="m-2 project-card" style={{ width: "16rem" }}>
      <CardImg
        top
        src={image ? `/images/proj_img/${image}` : "/images/img.jpg"}
        alt={name}
        //style={{ height: "120px", objectPosition: "center" }} // Set a fixed height for the image
        // objectFit: "cover" to maintain aspect ratio and cover the area
        // objectPosition: "center" to center the image within the container
      />

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
