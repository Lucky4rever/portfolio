import styled from "styled-components";
import { ContactForm } from "../components";
import MountainsBackground from "../components/MountainsBackground";
import { motion } from "framer-motion";

const ContactLayout = styled.div`
  position: relative;
  z-index: 1;
  top: 60px;
  width: 100%;
  height: calc(100svh - 60px);
  overflow: hidden;
`;

const ContactFormLayout = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 35%;
  height: 300%;
  right: 0px;
  top: 0px;
  clip-path: polygon(0% 0, 100% 0, 100% 100%);
  background-color: var(--background);
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  --s: 100px; /* control the size */
  --c1: var(--background);
  --c2: #E3E3E3;
  
  --_g:#0000, #0004 5%,
      var(--c2) 6%  14%,var(--c1) 16% 24%,var(--c2) 26% 34%,var(--c1) 36% 44%,
      var(--c2) 46% 54%,var(--c1) 56% 64%,var(--c2) 66% 74%,var(--c1) 76% 84%,
      var(--c2) 86% 94%,#0004 95%,#0000;
  background:
    radial-gradient(100% 50% at 100% 0   ,var(--_g)),
    radial-gradient(100% 50% at 0    50% ,var(--_g)),
    radial-gradient(100% 50% at 100% 100%,var(--_g));
  background-size: var(--s) calc(2*var(--s));

  > div {
    width: 100%;
    height: calc(100svh - 60px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Contact = () => {
  return (
      <ContactLayout>
        <ContactFormLayout>
          <div>
            <ContactForm />
          </div>
        </ContactFormLayout>
        <MountainsBackground />
      </ContactLayout>
  );
};

export default Contact;
