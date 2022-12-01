import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonStyled = styled(motion.button)`
  background-color: ${({ bg }) => bg || "transparent"};
  display: flex;
  align-items: ${({ ai }) => ai || "center"};
  justify-content: ${({ jc }) => jc || "center"};
  cursor: pointer;
  outline: none;
  font-weight: ${({ fw }) => fw};
  font-size: ${({ fs }) => fs};
  padding: ${({ padding }) => padding || 0};
  border: ${({ border }) => border || "none"};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ br }) => br || 0};
  color: ${({ color }) => color || "white"};
  margin: ${({ m }) => m };
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  gap: ${({ gap }) => gap || 0};
  &:disabled {
    opacity: 0.3;
    cursor: revert;
  }
  &:hover {
    color: ${({ isHover }) => (isHover ? "var(--primary_color)" : null)};
  }
`;

export default ButtonStyled;
