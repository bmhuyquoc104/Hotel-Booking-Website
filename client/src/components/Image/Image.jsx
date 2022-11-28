import React from "react";
import { ImageStyled } from "@/components/Image/Image.styled";

function Image({ image, alt, ...props }) {
  return <ImageStyled {...props} src={image} loading="lazy" alt={alt} />;
}

export default Image;
