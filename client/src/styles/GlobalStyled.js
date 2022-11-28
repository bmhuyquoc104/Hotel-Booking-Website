import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*,*::after,*::before{
margin:0;
padding:0;
box-sizing:border-box;
}

#root{
  display: flex;
  flex-direction:row;
  min-height:100vh;
  width:100%;
  font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyled;
