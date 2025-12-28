import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Me" />

      <Row className="row-content">
        <Col sm="6">
          <h3>My Mission</h3>
          <p>
            Hi, I'm Mathias Adikpon. I am proficient in programming languages
            such as Java, Python, C++, SQL, HTML, CSS, JavaScript, and R. In
            addition, I have a strong foundation in advanced mathematics,
            including calculus, linear algebra, trigonometry, and geometry. I
            aim to leverage my technical skills and mathematical expertise to
            contribute to innovative projects and create meaningful solutions.
          </p>
        </Col>

        <Col sm="6">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Highlights</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Years of Experience</dt>
                <dd className="col-6">4+</dd>

                <dt className="col-6">Languages</dt>
                <dd className="col-6">Java, Python, C++, JavaScript, R</dd>

                <dt className="col-6">Frameworks</dt>
                <dd className="col-6">React, Node.js, Bootstrap</dd>

                <dt className="col-6">Education</dt>
                <dd className="col-6">
                  Advanced Mathematics & Computer Science
                </dd>
              </dl>
            </CardBody>
          </Card>
        </Col>

        <Col className="mt-3">
          <Card className="bg-light">
            <CardBody>
              <blockquote className="blockquote mb-0">
                <p>
                  "I will not follow where the path may lead, but I will go
                  where there is no path, and I will leave a trail."
                </p>
                <footer className="blockquote-footer">Muriel Strode</footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
