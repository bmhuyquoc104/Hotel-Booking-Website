import styled from "styled-components";

const ReservationDetailStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  & .user-form {
    width: 60%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    input {
      border-radius: 3px;
      background-color: #f5f5f5;
      color: var(--text_color);
      outline: none;
      border: 1px solid black;
      font-weight: 300 !important;
      padding: 1em 0.75em;
      width: 100%;
      font-size: clamp(0.75rem, calc(0.68rem + 0.28vw), 0.94rem);
    }
  }
  @media (max-width: 650px) {
    & > :nth-child(2) {
      width: 90%;
      padding: 1.5em 0.75em;
    }
    & .user-form {
      width: 85%;
      & > * {
        margin:0 auto;
        width: 200px;
      }
    }
  }
`;

export default ReservationDetailStyled;
