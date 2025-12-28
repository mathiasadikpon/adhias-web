import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail = false }) => {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          {/* Breadcrumb navigation */}
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            {detail && (
              <BreadcrumbItem>
                <Link to="/">Back</Link>
              </BreadcrumbItem>
            )}
            <BreadcrumbItem active>{current}</BreadcrumbItem>
          </Breadcrumb>

          {/* Page title */}
          <h2>{current}</h2>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default SubHeader;
