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
 
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default AdminFormStyled;
