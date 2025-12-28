import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";

const projects = [
  {
    id: 1,
    title: "Web Calculator",
    description:
      "A sophisticated web-based calculator with advanced functionality using JavaScript, HTML, and CSS.",
  },
  {
    id: 2,
    title: "Lehman App",
    description:
      "A student-focused app for Lehman College featuring course management, weather, and transportation integration.",
  },
  {
    id: 3,
    title: "Tip Calculator",
    description:
      "A mobile-friendly app to calculate tips and split bills accurately among multiple users.",
  },
];

const ProjectsList = () => {
  return (
    <Row className="row-content">
      {projects.map((project) => (
        <Col md="6" lg="4" key={project.id} className="mb-4">
          <Card className="h-100 shadow-sm">
            <CardBody>
              <CardTitle tag="h5">{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
