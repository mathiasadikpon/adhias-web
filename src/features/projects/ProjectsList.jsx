import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const projects = [
  {
    id: 1,
    title: "Web Calculator",
    description:
      "Constructed a sophisticated web-based calculator with advanced functionality using JavaScript, HTML, CSS.",
    link: "#",
  },
  {
    id: 2,
    title: "Lehman App",
    description:
      "Contributed to the development of a comprehensive app designed to streamline course management for Lehman College students.",
    link: "#",
  },
  {
    id: 3,
    title: "Tip Calculator",
    description:
      "Engineered a user-friendly mobile app capable of accurately calculating tips and splitting bills among multiple parties.",
    link: "#",
  },
];

const ProjectsList = () => {
  return (
    <Row className="row-content">
      {projects.map((project) => (
        <Col md="4" className="mb-4" key={project.id}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
              <Button color="primary" href={project.link}>
                View Project
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
