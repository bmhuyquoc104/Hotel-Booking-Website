import React from "react";
import HamburgerHeaderStyled from "./HamburgerHeader.styled";
import Flex from "@/components/containers/Flex/Flex";
import { TextParagraph } from "@/components/Text/Text";
import { DropDownAnimation } from "../../styles/AnimationStyled";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

function HamburgerHeader({ phone, address }) {
  return (
    <HamburgerHeaderStyled
      variants={DropDownAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <Flex gap="0.5em">
        <BsFillTelephoneFill />
        <TextParagraph color="inherit" text={phone} />
      </Flex>
      <div className="decoration2"></div>
      <Flex gap="0.5em">
        <IoLocation />
        <TextParagraph color="inherit" text={address} />
      </Flex>
      <div className="decoration2"></div>
      <TextParagraph fw={500} color="inherit" text="Rooms" />
      <div className="decoration2"></div>
      <TextParagraph fw={500} color="inherit" text="Facilities" />
      <div className="decoration2"></div>
      <TextParagraph fw={500} color="inherit" text="House rules" />
      <div className="decoration2"></div>
      <TextParagraph fw={500} color="inherit" text="Guest Reviews" />
      <div className="decoration2"></div>
      <TextParagraph fw={500} color="inherit" text="About" />
      <div className="decoration2"></div>
      <TextParagraph fw={500} color="inherit" text="Sign In" />
    </HamburgerHeaderStyled>
  );
}

export default HamburgerHeader;
