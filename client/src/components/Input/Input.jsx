import React from "react";
import InputStyled from "@/components/Input/Input.styled";

function Input({ onChange, type, placeholder, ...props }) {
  return (
    <InputStyled
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
