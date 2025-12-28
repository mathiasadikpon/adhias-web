import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DisplayList from "../features/display/DisplayList"; // placeholder component

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <DisplayList />
    </Container>
  );
};

export default HomePage;
