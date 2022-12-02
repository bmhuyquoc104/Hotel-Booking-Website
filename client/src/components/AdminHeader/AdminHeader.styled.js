import styled from "styled-components";

const AdminHeaderStyled = styled.header`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  position: fixed;
  z-index: 2;
  padding:1.5em 3em;
  align-items: center;
  top: 0;
  justify-content: space-between;
  background-color: var(--header_bg_color);
  box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.5);
  color: var(--text_color);
  & > h1 {
    margin-left:revert !important;
  }
  @media (max-width:768px){
    padding:1.5em;

  }
`;

export default AdminHeaderStyled;
