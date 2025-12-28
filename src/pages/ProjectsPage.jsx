import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ProjectsList from "../features/projects/ProjectsList"; // placeholder component

const ProjectsPage = () => {
  return (
    <Container>
      <SubHeader current="Projects" />
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
