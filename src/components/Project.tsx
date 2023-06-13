import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import gitLogo from "../assets/img/github-logo.png";
import CrissCross from "../assets/img/criss-cross.svg";

const ProjectDrager = styled(motion.div)`
  position: relative;
  width: var(--width);
  height: var(--height);
  z-index: 1;

  --width: 280px;
  --height: 360px;
`;

const ProjectLayout = styled(motion.div)`
  display: inline-flex;
  position: relative;
  z-index: 1;
  width: var(--width);
  height: var(--height);
  border-radius: 43px;
  background-color: var(--background);
  
	transform-style: preserve-3d;
  box-shadow: 0px 5px 8px var(--shadow);
`;

const ProjectFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(var(--height) - 30px);
  width: 100%;
  max-width: calc(var(--width) - 30px);
  padding: 15px;
  gap: 15px;
  border-radius: 43px;
  display: flex;
  flex-direction: column;

  object-fit: cover;
  backface-visibility: hidden;
`;

const ProjectBack = styled.div`
  position: relative;
  display: block;
  justify-content: center;
  width: var(--width);
  height: calc(var(--height) - 54px);
  margin: 5px 5px 0px;
  padding: 25px;

  overflow: hidden;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  color: var(--base-color);
`;

const Icon = styled.a`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 20px;
  height: 20px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  z-index: 3;

  > img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;

    object-fit: contain;
    cursor: pointer;
    border-radius: 50%;
    transition: 400ms;

    :hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 4px 2px;
    }
  }
`;

const FrontImgContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const FrontImg = styled.img`
  max-width: calc(var(--width) - 30px);
  height: 100%;
  margin: 0 auto;
  border-radius: 24px;
  outline: 1px solid black;
`;

const FrontImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

const Title = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  text-overflow: ellipsis;
`;

const CheckButton = styled.a<{href?: string}>`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  padding: 10px;
  
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;

  ${({ href }) => href ? `
    background-color: var(--important);

    :focus, :active {
      background-color: var(--important-action);
    }

    ::after {
      color: var(--background);
      content: "OPEN";
    }
  ` : `
    background-color: var(--shadow);

    ::after {
      content: "There is no link";
    }
  `}
`;

interface ProjectProps {
  id: number;
  name: string;
  img: string;
  frontDescription: string;
  langs?: string[];
  description?: string;
  link?: string;
  linkGit?: string;
}

const Project = ({id, img, description, frontDescription, link, linkGit, name, langs}: ProjectProps) => {
  const [isShowed, setIsShow] = useState(false);

  return (
    <ProjectDrager 
      drag
      whileTap={{ zIndex: 10, cursor: "grabbing" }}
      initial={{ y: -document.body.offsetHeight }}
      animate={{ y: 0 }}
      transition={{ duration: 3, delay: id * 0.3 }}
      key={id}
    >
      <ProjectLayout
        style={{
          transition: "1s",
          transform: isShowed ? "rotateY(180deg)" : "rotateY(0deg)"
        }} 
        onDoubleClick={ () => setIsShow(true) }
        transition={{ duration: 0.6 }}
      >
        <ProjectFront>
          <FrontImgContainer><FrontImg src={img} /><FrontImgOverlay /></FrontImgContainer>
          {linkGit ? <Icon style={{backgroundColor: "var(--background)"}} href={linkGit}><img src={gitLogo} /></Icon> : null}
          <Title>{name}</Title>
          <span>{frontDescription}</span>
          <CheckButton href={link}></CheckButton>
        </ProjectFront>
        <ProjectBack>
          {langs ? (
            <>
              <span style={{lineHeight: "30px"}}><b>Languages</b></span><br />
              {langs.map((lang, idx) => <span key={idx}>· {lang}<br /></span>)}
            </>
          ) : null}
          {description ? (
            <>
              <span style={{lineHeight: "30px"}}><b>Description</b></span><br />
              {description}
            </>
          ) : null}
          {linkGit ? <Icon><img src={CrissCross} onClick={ () => setIsShow(false) } /></Icon> : null}
        </ProjectBack>
      </ProjectLayout>
    </ProjectDrager>
  );
};

export default Project;
