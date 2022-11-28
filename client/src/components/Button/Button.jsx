import React from "react";
import ButtonStyled from "@/components/Button/Button.styled";

function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

export default Button;
