import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../features/contact/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Me" />

      <Row className="row-content align-items-center my-3">
        <Col sm="4">
          <h5>My Address</h5>
          <address>
            Bronx, NY 10457
            <br />
            U.S.A.
          </address>
        </Col>

        <Col>
          <a
            role="button"
            className="btn btn-link"
            href="mailto:mathiasadikpon@gmail.com"
          >
            <i className="fa fa-envelope-o" /> mathiasadikpon@gmail.com
          </a>
        </Col>
      </Row>

      <Row className="row-content my-4">
        <Col xs="12">
          <h2>Send Me Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
