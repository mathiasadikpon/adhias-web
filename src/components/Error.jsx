import { Col } from "reactstrap";

const Error = ({ errMsg }) => {
  return (
    <Col className="text-center my-5">
      <h4 className="text-danger">{errMsg}</h4>
    </Col>
  );
};

export default Error;
