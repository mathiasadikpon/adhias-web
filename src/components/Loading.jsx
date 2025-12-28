import { Col } from "reactstrap";

const Loading = () => {
  return (
    <Col className="text-center my-5">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
      <p className="mt-3">Loading...</p>
    </Col>
  );
};

export default Loading;
