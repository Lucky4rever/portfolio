import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = styled(motion.div)`
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: var(--important);
    transform-origin: 0%;
`;

const ScrollTracker = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ProgressBar style={{ scaleX }} />
  );
}

export default ScrollTracker;