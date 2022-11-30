import styled from "styled-components";
import { motion } from "framer-motion";

const SectionAboutStyled = styled(motion.section)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction:column;
  gap:1em;
  justify-content: center;
  @media (max-width:768px){
    & >:nth-child(2){
      width:90%;
    }
  }
`;

export default SectionAboutStyled;
