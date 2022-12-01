import styled from "styled-components";
import { motion } from "framer-motion";

const SectionFacilityStyled = styled(motion.section)`
  display: flex;
  width: 100%;
  padding: 1.5em 3em;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  .utilities {
    display: flex;
    gap: 0.7em;
    width: 30%;
    flex-direction: column;
  }
  .utility {
    display: flex;
    gap: 0.5em;
  }
  @media (max-width: 1100px) {
    & > :last-child {
      padding: 1.5em 0em;
    }
  }
  @media (max-width: 850px) {
    & > :last-child {
      & > * {
        width: 40%;
      }
    }
  }
  @media (max-width: 500px) {
    & > :last-child {
      & > * {
        width: 100%;
      }
    }
  }
`;

export default SectionFacilityStyled;
