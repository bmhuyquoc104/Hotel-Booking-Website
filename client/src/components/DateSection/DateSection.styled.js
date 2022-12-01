import styled from "styled-components";

const DateSectionStyled = styled.div`
  margin-top: 1em;
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: column;
  & > :last-child {
    display: none;
  }

  @media (max-width: 650px) {
    & > * {
      padding: 0.5em;
      & > * {
        padding: 0.5em;
      }
    }
    & > :first-child {
      gap:0.5em;
    }
    & > :nth-child(2) {
      display: none;
    }
    & > :last-child {
      align-self: center;
      display: flex;
    }
  }
`;

export default DateSectionStyled;
