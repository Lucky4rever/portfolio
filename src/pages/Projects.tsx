import styled from "styled-components";
import Project from "../components/Project";
import INT20H_2023 from "../assets/img/projects/INT20H-2023.jpg";
import hello_Evano from "../assets/img/projects/test_task_hello_Evano.png";
import path_of_Luckych from "../assets/img/projects/three_ico_large-playstore.png";

const ProjectsLayout = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  min-height: calc(100svh - 60px);
  height: 100%;
  margin: auto;

  background-color: var(--background);
  opacity: 1;
  background-image: radial-gradient(var(--important) 1.3px, var(--background) 1.3px);
  background-size: 26px 26px;
`;

const ProjectCards = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  > div {
    flex-grow: 1;
    max-width: fit-content;
    margin: 30px;
  }
`;

const Explanation = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 20px;
`;
const ExplanationContent = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
`;

const Projects = () => {
  return (
    <>
      <ProjectsLayout>
        <ProjectCards>
          {[
            {
              id: 1,
              name: "LuckyDevFinals",
              img: INT20H_2023,
              frontDescription: "Project for the final of the INT21H hackathon.",
              langs: ["TS React", "C#", "HTML+CSS"],
              description: "It is a platform for finding work and recruiting new participants for projects. The project was carried out by the LuckyDev team for the finals of the INT21H competition, which lasted a day. Took 2nd place in the web development category.",
              linkGit: "https://github.com/Goganoid/LuckyDevHackathonFinals"
            },
            {
              id: 2,
              name: "Hello Evano",
              img: hello_Evano,
              frontDescription: "Project on a clean HTML+CSS page.",
              langs: ["HTML+CSS"],
              description: "A small landing page using a normal layout to display skills. Doesn't make any sense.",
              link: "https://lucky4rever.github.io/Test-task-Hello-Evano/",
              linkGit: "https://github.com/Lucky4rever/Test-task-Hello-Evano"
            },
            {
              id: 3,
              name: "Path of Luckych",
              img: path_of_Luckych,
              frontDescription: "Project for KotlinConf'23.",
              langs: ["Kotlin", "Swift"],
              description: "An interactive book with a randomly generated plot and parts. It was created for the KotlinConf'23 competition using the Kotlin Multiplatform Mobile technology, but due to the volume of work, I didn't meet the deadline.",
              linkGit: "https://github.com/Lucky4rever/PathofLuckych"
            }
          ].map(project => (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
              img={project.img}
              frontDescription={project.frontDescription}
              langs={project.langs}
              description={project.description}
              link={project.link}
              linkGit={project.linkGit}
            />
          ))}
        </ProjectCards>
      </ProjectsLayout>
      <Explanation>
        <ExplanationContent>Double click on the project card to see more details...</ExplanationContent>
      </Explanation>
    </>
  );
};

export default Projects;