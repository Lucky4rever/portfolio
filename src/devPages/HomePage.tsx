import { About, TitleContent, Floater, Skills, ScrollTracker } from "../components";
import styled from "styled-components";

const HomepageLayout = styled.div`
  width: 90%;
  height: calc(100% - 240px);
  margin: 120px 5% 0px;
`;

const Container = styled.div`
  position: relative;
  top: 30vh;
  width: 70%;
  height: 138vh;
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <>
      <ScrollTracker />
      <HomepageLayout>
        <TitleContent />
        <Floater />
        <Container>
          <About />
          <Skills />
        </Container>
      </HomepageLayout>
    </>
  );
};

export default HomePage;