import React from "react";
import FlexStyled from "@/components/containers/Flex/Flex.styled";

function Flex({ variants, animate, initial, children, ...props }) {
  return (
    <FlexStyled
      variants={variants}
      animate={animate}
      initial={initial}
      {...props}
    >
      {children}
    </FlexStyled>
  );
}

export default Flex;
