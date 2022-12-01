import React,{useState} from "react";
import HamburgerHeaderStyled from "./HamburgerHeader.styled";
import Flex from "@/components/containers/Flex/Flex";
import { TextParagraph } from "@/components/Text/Text";
import { DropDownAnimation } from "../../styles/AnimationStyled";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import {useNavigate} from "react-router-dom"
import { AbsoluteFlexContainer } from "../containers/Flex/AbsoluteFlexContainer";
import { AiOutlineClose } from "react-icons/ai";


function HamburgerHeader({ phone, address, setIsHamburgerToggle }) {
  const navigate = useNavigate()
  const [toggleMap, setToggleMap] = useState(false);

  return (
    
    <HamburgerHeaderStyled
      variants={DropDownAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
    >
        {toggleMap ? (
        <AbsoluteFlexContainer>
          <Flex direction="column" gap ="1em">
            <AiOutlineClose onClick = {() => setToggleMap(false)} style={{  color: "white",
                fontSize: "1.5rem",
                backgroundColor: "black",
                cursor: "pointer",
                borderRadius:"3px"}} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.198599400034!2d109.2124277147515!3d12.029844438096031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31708b02a239a783%3A0x1307a2b6af9dcdf7!2sThe%20Princess%20of%20Arena%20Cam%20Ranh%20Home!5e0!3m2!1sen!2s!4v1669921134707!5m2!1sen!2s"
              width="370"
              height="350"
              loading="lazy"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Flex>
        </AbsoluteFlexContainer>
      ) : null}
      <Flex cursor ="pointer" gap="0.5em">
        <BsFillTelephoneFill />
        <TextParagraph  color="inherit" text={phone} />
      </Flex>
      <div className="decoration2"></div>
      <Flex cursor = "pointer" onClick = {() => setToggleMap(true)} gap="0.5em">
        <IoLocation />
        <TextParagraph color="inherit" text={address} />
      </Flex>
      <div className="decoration2"></div>
      <Link smooth={true} offset={-170} duration={500} to="rooms">
        <TextParagraph
          cursor="pointer"
          fw={500}
          needHover={true}
          color="inherit"
          text="Rooms"
          onClick={() => setIsHamburgerToggle(false)}
        />
      </Link>
      <div className="decoration2"></div>
      <Link smooth={true} offset={-170} duration={500} to="facilities">
        <TextParagraph
          cursor="pointer"
          needHover={true}
          fw={500}
          color="inherit"
          text="Facilities"
          onClick={() => setIsHamburgerToggle(false)}
        />
      </Link>{" "}
      <div className="decoration2"></div>
      <Link smooth={true} offset={-170} duration={500} to="rules">
        <TextParagraph
          cursor="pointer"
          fw={500}
          needHover={true}
          color="inherit"
          text="House rules"
          onClick={() => setIsHamburgerToggle(false)}
        />
      </Link>
      <div className="decoration2"></div>
      <Link smooth={true} offset={-170} duration={500} to="about">
        <TextParagraph
          cursor="pointer"
          fw={500}
          needHover={true}
          color="inherit"
          text="About"
          onClick={() => setIsHamburgerToggle(false)}
        />
      </Link>{" "}
      <div className="decoration2"></div>
      <TextParagraph
      cursor="pointer"
        fw={500}
        needHover={true}
        color="inherit"
        text="Sign In"
        onClick={() => navigate("/admin")}
      />
    </HamburgerHeaderStyled>
  );
}

export default HamburgerHeader;
