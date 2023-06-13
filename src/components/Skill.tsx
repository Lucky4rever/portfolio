import { motion } from "framer-motion";
import styled from "styled-components";

const SkillLayout = styled(motion.div)`
  position: relative;
  width: 80px;
  aspect-ratio: 1 / 1;
  user-select: none;
  overflow: hidden;
  border-radius: 10px;
`;

const SkillImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

const ProtectiveFilm = styled.div`
  position: absolute;
  z-index: 5;
  top: 0px;
  left: 0px;
  width: 100%;
  heigth: 100%;
  aspect-ratio: 1 / 1;
`;

interface SkillProps {
    img?: string
}

const Skill = ({img}: SkillProps) => {
  return (
    <SkillLayout
      drag
      animate={{ x: Math.random() * 40 - 20, y: Math.random() * 40 - 20 }}
    >
      <SkillImg src={img} alt="" />
      <ProtectiveFilm />
    </SkillLayout>
  );
};

export default Skill;
