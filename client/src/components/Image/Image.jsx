import React from "react";
import ImageStyled from "@/components/Image/Image.styled";

function Image({ srcset, sizes, image, alt, ...props }) {
  return (
    <ImageStyled
      srcSet={srcset}
      sizes={sizes}
      {...props}
      src={image}
      loading="lazy"
      alt={alt}
    />
  );
}

export default Image;
