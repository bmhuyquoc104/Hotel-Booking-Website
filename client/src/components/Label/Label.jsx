import React from "react";
import LabelStyled from "./Label.styled";
function Label({ text, htmlFor, ...props }) {
  return (
    <LabelStyled {...props} htmlFor={htmlFor}>
      {text}
    </LabelStyled>
  );
}

export default Label;
