import React from "react";
import ButtonStyled from "@/components/Button/Button.styled";

function Button({ children, whileHover, ...props }) {
  return (
    <ButtonStyled whileHover={whileHover} {...props}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
