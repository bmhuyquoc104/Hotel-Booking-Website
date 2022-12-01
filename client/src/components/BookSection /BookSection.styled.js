import styled from "styled-components";
import { motion } from "framer-motion";

const BookSectionStyled = styled(motion.section)`
  display: flex;
  padding: 1.5em 1em;
  align-self: center;
  position: relative;
  width: 95%;
  margin-top: -5em;
  border-radius: 2px;
  background-color: #ffffff;
  .book-section {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    box-shadow: 0px 5px 5px 5px rgb(255, 255, 255, 0.4);
    justify-content: space-evenly;
    & > :last-child {
      align-self: center;
    }
    & > :nth-child(5) {
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    .book-section {
      padding: 0.5em;
      & > :nth-child(4),
      & > :nth-child(2),
      & > :nth-child(3) {
        display: none;
      }
      & > :first-child {
        width: 100%;
      }
    }
  }
`;

export default BookSectionStyled;
