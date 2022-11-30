import React from "react";
import ImageStyled from "@/components/Image/Image.styled";
import { ImageAnimation } from "@/styles/AnimationStyled";
function Image({ srcset, sizes, image, alt, ...props }) {
  return (
    <ImageStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={ImageAnimation}
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
