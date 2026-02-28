import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Me" />
      <p>
        Hi, I’m Mathias Adikpon, dual-certified IT Professional and Full-Stack
        Developer with a strong academic foundation, holding a Bachelor of
        Science in Computer Science and a Bachelor of Arts in Mathematics, both
        earned Magna Cum Laude. Expert in hardware troubleshooting, network
        configuration, and building scalable web/mobile applications. Proven
        track record of bridging the gap between hardware infrastructure and
        software engineering to solve complex technical challenges.
      </p>

      <Row className="row-content">
        <Col sm="6">
          <h3>My Mission</h3>
          <p>
            My mission is to leverage software engineering and mathematical
            reasoning to build innovative, accessible, and reliable digital
            solutions. I aim to contribute to meaningful projects that solve
            complex problems, improve systems, and deliver value to users and
            organizations.
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
                <dd className="col-6">
                  Java · Python · C++ · JavaScript · SQL · R · HTML · CSS
                </dd>

                <dt className="col-6">Frameworks</dt>
                <dd className="col-6">
                  React · Node.js · React Native · Bootstrap · Git · REST APIs ·
                  Databases
                </dd>

                <dt className="col-6">Education</dt>
                <dd className="col-6">
                  Computer Science & Advanced Mathematics Degrees, Magna Cum
                  Laude
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
