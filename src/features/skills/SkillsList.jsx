import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const skills = [
  { id: 1, name: "HTML", experience: "2 years experience" },
  { id: 2, name: "JavaScript", experience: "3 years experience" },
  { id: 3, name: "Java", experience: "4 years experience" },
  { id: 4, name: "React", experience: "4 years experience" },
  { id: 5, name: "Node.js", experience: "4 years experience" },
  { id: 6, name: "CSS", experience: "4 years experience" },
];

const SkillsList = () => {
  return (
    <Row className="row-content">
      {skills.map((skill) => (
        <Col sm="6" md="4" lg="3" key={skill.id} className="mb-4">
          <Card className="h-100 text-center shadow-sm">
            <CardBody>
              <CardTitle tag="h6">{skill.name}</CardTitle>
              <p className="text-muted">{skill.experience}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SkillsList;
