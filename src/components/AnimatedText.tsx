import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const AnimatedText = ({children} : {children: JSX.Element | JSX.Element[]}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  
  return (
    <Layout ref={ref}>
      <motion.div
        style={{ y: y }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </Layout>
  )
}

export default AnimatedText;
