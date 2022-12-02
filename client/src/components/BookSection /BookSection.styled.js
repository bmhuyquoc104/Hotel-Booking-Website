import styled from "styled-components";
import { motion } from "framer-motion";

const BookSectionStyled = styled(motion.section)`
  display: flex;
  width: 60%;
  padding: 1.5em;
  margin-bottom: 2em;
  align-self: center;
  position: relative;
  border-radius: 2px;
  background-color: #ffffff;
  select {
    background-color: var(--primary_color);
    text-transform: capitalize;
    padding: 0.75em 1.25em;
    display: flex;
    color: var(--text_color2);
    gap: 3em;
    width: max-content;
    cursor: pointer;
    border-radius: 5px;
  }
  .book-section {
    width: 100%;
    flex-wrap: wrap;
    gap: 1em;
    display: flex;
    box-shadow: 0px 5px 5px 5px rgb(255, 255, 255, 0.4);
    justify-content: space-between;
    & > :nth-child(6) {
      align-self: center;
      margin:0 auto;
      width: max-content;
    }
    &> :last-child {
      align-self: flex-end;
      margin: 0 auto;
    }
  }
  @media (max-width:950px){
    width:80%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default BookSectionStyled;
