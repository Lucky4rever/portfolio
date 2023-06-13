import { Html, useProgress } from "@react-three/drei";
import styled from "styled-components";

const LoadProgress = styled.p`
  color: var(--base-color);
  font-size: 48px;
  font-weight: bold;
`;

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
        <LoadProgress>
          {progress.toFixed(2)}%
        </LoadProgress>
    </Html>
  );
};

export default CanvasLoader;
