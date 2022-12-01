import React from "react";
import ButtonStyled from "@/components/Button/Button.styled";

function Button({ disabled, type, children, whileHover, ...props }) {
  return (
    <ButtonStyled
      disabled={disabled}
      type={type}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
