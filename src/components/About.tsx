import styled from "styled-components";
import Animated from "./AnimatedText";

const Layout = styled.div`
  width: 100%;
  height: 50vh;
  margin: 0px auto;
  padding: 3vh 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled.div`
    font-size: 4vh;
    color: var(--default-color);
    line-height: 6vh;
`;
const AboutTitle = styled(AboutText)`
    font-size: 6vh;
    line-height: 8vh;
    font-weight: bold;
`;

const About = () => {
  return (
    <Layout>
      <Animated>
        <AboutTitle>Hello there!</AboutTitle> 
        <AboutText>My name is Pavlo, and this is my portfolio.</AboutText> 
        <AboutText>I am engaged in web development and software engineering.</AboutText>
        <AboutText>I mainly do freelancing and creating my own projects for fun.</AboutText>
        <AboutText>This page looks pretty empty. I want to fill it!</AboutText>
      </Animated>
    </Layout>
  );
};

export default About;
