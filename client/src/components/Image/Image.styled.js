import styled from "styled-components";
import { motion } from "framer-motion";
const ImageStyled = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({ br }) => br};
`;
export default ImageStyled;
