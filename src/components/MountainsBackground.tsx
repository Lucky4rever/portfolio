import styled from "styled-components";
import Mountains from "./canvas/Mountains";

const MountainsLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MountainsBackground = () => {
  return (
    <MountainsLayout>
      <Mountains />
    </MountainsLayout>
  );
};

export default MountainsBackground;
