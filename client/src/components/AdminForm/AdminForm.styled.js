import styled from "styled-components";

const AdminFormStyled = styled.form`
  display: flex;
  align-self: center;
  padding: 1.5em;
  background-color: #ffffff;
  border-radius: 6px;
  flex-direction: column;
  width: 60%;
  gap: 1.5em;
  .rules {
    margin-bottom:1rem;
    height: 300px;
    overflow-y: scroll;
  }
  & > :first-child {
    align-self: center;
  }
  input {
    border-radius: 3px;
    background-color: #f5f5f5;
    color: var(--text_color);
    outline: none;
    border: none;
    font-weight: 300 !important;
    padding: 1em 0.75em;
    width: 100%;
    font-size: clamp(0.75rem, calc(0.68rem + 0.28vw), 0.94rem);
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default AdminFormStyled;
