import styled from "styled-components";
import { motion } from "framer-motion";

const RoomSectionStyled = styled(motion.section)`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > :first-child {
    align-self: center;
  }
  gap: 1em;
  justify-content: center;
`;

export default RoomSectionStyled;
