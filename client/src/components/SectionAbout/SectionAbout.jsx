import React from "react";
import SectionAboutStyled from "./SectionAbout.styled";
import { SectionAnimation } from "@/styles/AnimationStyled";
import { TextParagraph, TextHeading2 } from "@/components/Text/Text";

function SectionAbout() {
  return (
    <SectionAboutStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={SectionAnimation}
      id="about"
    >
      <TextHeading2
        transform="uppercase"
        fs="1.5rem"
        letterSpacing="5px"
        text="About Us"
        fw="500"
        color="var(--text_color)"
      />
      <TextParagraph
        lineHeight="1.7"
        width="50%"
        ta="center"
        color="var(--text_color)"
        text="Located in Miếu Ông in the Khanh Hoa region, The Princess of Arena Cam Ranh Home has a balcony. Situated a few steps from Bai Dai Beach, the property features a garden and free private parking.100 Egg Mud Bath is 33 km from The Princess of Arena Cam Ranh Home, while Alexandre Yersin Museum is 40 km from the property. The nearest airport is Cam Ranh International Airport, 7 km from the accommodation."
      />

      <TextParagraph color="var(--text_color)" text="" />
    </SectionAboutStyled>
  );
}

export default SectionAbout;
