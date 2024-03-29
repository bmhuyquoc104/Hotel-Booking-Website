import styled from "styled-components";
import { motion } from "framer-motion";

const FlexStyled = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ jc }) => jc || "flex-start"};
  align-items: ${({ ai }) => ai || "flex-start"};
  gap: ${({ gap }) => gap || 0};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  padding: ${({ p }) => p || 0};
  margin: ${({ m }) => m || 0};
  min-height: ${({ minHeight }) => minHeight || 0};
  width: ${({ width }) => width || "auto"};
  background-color: ${({ bg }) => bg};
  border-radius: ${({ br }) => br || 0};
  overflow-y: scroll;
  height:${({ height }) => height || "auto"};
  cursor:${({cursor }) => cursor}
`;
export default FlexStyled;
