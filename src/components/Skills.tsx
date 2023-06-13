import styled from "styled-components";
import Animated from "./AnimatedText";
import Skill from "./Skill";
import { TS, SASS, React, Neo4j, MsSQL, Csharp, Bootstrap, FramerMotion, ExpressJS, Astro } from "../assets/img/skills/index";

const Layout = styled.div`
  width: 100%;
  height: 50vh;
  margin: 0px auto;
  padding: 3vh 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkillsText = styled.div`
  font-size: 4vh;
  color: var(--default-color);
  line-height: 6vh;
`;

const SkillsTitle = styled(SkillsText)`
  font-size: 6vh;
  line-height: 8vh;
  font-weight: bold;
`;

const SkillsList = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 60px;
  transform: translateY(50%);
`;

const Skills = () => {
  return (
    <Layout>
      <Animated>
        <SkillsTitle>Here are my skills.</SkillsTitle>
        <SkillsText>A couple of things I have experience with... Oops, looks like they've moved. Maybe you can fix it?</SkillsText>
        <SkillsList>
          <Skill img={TS} />
          <Skill img={SASS} />
          <Skill img={React} />
          <Skill img={Neo4j} />
          <Skill img={MsSQL} />
          <Skill img={Csharp} />
          <Skill img={Bootstrap} />
          <Skill img={FramerMotion} />
          <Skill img={ExpressJS} />
          <Skill img={Astro} />
        </SkillsList>
      </Animated>
    </Layout>
  );
};

export default Skills;
