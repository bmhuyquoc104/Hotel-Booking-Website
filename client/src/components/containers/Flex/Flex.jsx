import React from "react";
import FlexStyled from "@/components/containers/Flex/Flex.styled";

function Flex({ key, variants, animate, initial, children, ...props }) {
  return (
    <FlexStyled
      key={key}
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
