import React from "react";
import ImageContainerStyled from "@/components/containers/ImageContainer/ImageContainer.styled";

function ImageContainer({ children, ...props }) {
  return <ImageContainerStyled {...props}>{children}</ImageContainerStyled>;
}

export default ImageContainer;
