import { Col, Row } from "reactstrap";
import SkillsList from "../skills/SkillsList";
import ProjectsList from "../projects/ProjectsList";
import CertificatesList from "../certificates/CertificatesList";

const DisplayList = () => {
  return (
    <>
      <Row className="row-content">
        <Col>
          <h2>Skills</h2>
          <SkillsList />
        </Col>
      </Row>

      <Row className="row-content">
        <Col>
          <h2>Projects</h2>
          <ProjectsList />
        </Col>
      </Row>

      <Row className="row-content">
        <Col>
          <h2>Certifications</h2>
          <CertificatesList />
        </Col>
      </Row>
    </>
  );
};

export default DisplayList;
