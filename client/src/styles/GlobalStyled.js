import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*,*::after,*::before{
margin:0;
padding:0;
box-sizing:border-box;
}

:root{
  --text_color: #000000;
  --text_color2:#ffffff;
  --body_bg_color:#f6f6f6;
  --header_bg_color:#ffffff;
  --book_button_bg_color:#1a1a1a;
  --check_availability_button_bg_color:#9d9d9d
  --check_in_bg_color:#ffffff;
  --logo_font :'Pacifico', cursive;
}

#root{
  display: flex;
  flex-direction:row;
  min-height:100vh;
  background-color:var(--body_bg_color);
  width:100%;
  font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyled;
