import React from "react";
import FlexStyled from "@/components/containers/Flex/Flex.styled";

function Flex({ children, ...props }) {
 
  return <FlexStyled {...props}>{children}</FlexStyled>;
}

export default Flex;
