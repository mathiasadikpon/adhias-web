import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          {/* Links */}
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Social */}
          <Col xs="6" sm="3" className="text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
              target="_blank"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
              target="_blank"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-youtube"
              href="http://youtube.com/"
              target="_blank"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>

          {/* Contact */}
          <Col sm="4" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+16469824102">
              <i className="fa fa-phone" /> +1 646-982-4102
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:mathiasadikpon@gmail.com"
            >
              <i className="fa fa-envelope-o" /> mathiasadikpon@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
