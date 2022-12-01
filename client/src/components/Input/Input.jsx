import React from "react";
import InputStyled from "@/components/Input/Input.styled";

function Input({ id,name, onChange, type, placeholder, ...props }) {
  return (
    <InputStyled
      id ={id}
      name = {name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
