import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerHeaderStyled = styled(motion.div)`
  display: flex;
  margin-top:0.5em;
  background-color: white;
  gap: 1.25em;
  padding: 1.5em;
  color: black;
  position: relative;
  flex-direction: column;
  width: 90% !important;
  min-height:100vh;
  & >.decoration2 {
    width: 100%;
    border-top: 1px solid black;
    opacity:0.3;
  }
`;

export default HamburgerHeaderStyled;
