import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Profesions } from ".";
import CloudStation from "./canvas/CloudStation";
import background from "../assets/img/background.jpg";

const Background = styled.div`
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 110vh;
  overflow: hidden;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  backface-visibility: visible;
  border: none;

  ::after {
    content: "";
    position: absolute;
    z-index: 5;
    top: 100%;
    left: -10%;
    width: 120%;
    height: 160px;
    background-color: white;
    transform: translateY(-50%);
    filter: blur(20px);
  }
`;

const HireButton = styled.a`
  width: fit-content;
  padding: 3vh 3vw;
  margin: 2vh 0;
  border-radius: 4vw;

  background-color: var(--important);
  color: var(--background);
  font-weight: 700;
  font-size: 4vh;
  text-decoration: none;

  :active, :focus {
    background-color: var(--important-action);
  }
`;

const TitlePage = styled.div`
  position: relative;
  z-index: 3;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 65% 35%;
  text-transform: uppercase;

  > div {
    width: 100%;
    height: 100%;
  }

  > div#left {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 14vh;
`;

const TitleContent = () => {
  const blockRef = useRef(null);
  const { scrollY } = useScroll();
  const blockTop = useRef(0);
  const blockHeight = useRef(0);
  const y = useTransform(scrollY, [blockTop.current - window.innerHeight, blockTop.current], [100, 0]);
  
  useEffect(() => {
    const blockElement = blockRef.current;
    if (blockElement) {
      blockTop.current = (blockElement as HTMLElement).offsetTop;
      blockHeight.current = (blockElement as HTMLElement).offsetHeight;
    }
  }, [blockHeight]);
  
  return (
    <>
      <Background />
      <TitlePage>
          <motion.div 
              id="left" 
              ref={blockRef}
              style={{ opacity: 0, x: -100, y: y }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
          >
              <Title>Hi!</Title>
              <div><span className="text">My name is <span className="important">Pavlo</span></span></div>
              <div><span className="text">I'm <span className="important"><Profesions /></span></span></div>
              <HireButton href={"/contact"}>Hire me!</HireButton>
          </motion.div>
          <div id="right">
              <CloudStation />
          </div>
      </TitlePage>
    </>
  );
};

export default TitleContent;
