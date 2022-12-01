import styled from "styled-components";
import { motion } from "framer-motion";

const SectionRuleStyled = styled(motion.section)`
  display: flex;
  width: 90%;
  align-self: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  .rule {
    display: flex;
    gap: 2em;
    align-items:center;
    width: 100%;
  }
  & > :nth-child(2) {
    & > * {
      & > :first-child {
        width: 200px;
      }
      & > :last-child {
        flex: 1;
      }
    }
  }
  @media (max-width: 768px) {
    & > :nth-child(2) {
      & > * {
        flex-direction: column;
        gap:0.5em;
        & > :first-child {
          width: revert;
        }
        & > :last-child {
          flex: revert;
        }
      }
    }
  }
`;

export default SectionRuleStyled;
