import styled from "styled-components";
import { motion } from "framer-motion";

const RoomStyled = styled(motion.div)`
  display: flex;
  padding: 1.5em 3em;
  width: 100% !important;
  gap: 2em;
  align-items: center;
  .amenity {
    display: flex;
    max-width: 90px;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    & > :first-child {
      padding: 0.5em;
      font-size: 1.5rem;
      border: 1px solid #e6e6e6;
      border-radius:4px;
    }
  }
  .room-info {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    gap: 1.25em;
    padding: 0 1.5em;
  }
  & > :first-child {
    order: ${({ firstOrder }) => firstOrder || 1};
    flex: 1;
  }
  & > :last-child {
    order: ${({ secondOrder }) => secondOrder || 2};
    width: 42%;
  }
  @media (max-width: 1100px) and (min-width: 850px) {
    gap: 0.2em;
    padding: 1.5em;
    .room-info > :last-child {
      margin: 0;
    }
    .room-info {
      gap: 0.75em;
    }
    & > :last-child {
      order: ${({ secondOrder }) => secondOrder || 2};
      width: 50%;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    /* .room-info {
      gap: 1.25em;
    } */
    & > :first-child {
      order: 2;
    }
    & > :last-child {
      width: 100%;
      order: 1;
      padding: 0em;
    }
  }
`;

export default RoomStyled;
