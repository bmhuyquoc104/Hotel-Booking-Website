import React from "react";
import HeaderStyled from "./Header.styled";
import Flex from "@/components/containers/Flex/Flex";
import { TitleAnimation } from "@/styles/AnimationStyled";
import { useState, useEffect, useRef } from "react";
import { resources } from "../../../assets/resoucres";
import ImageContainer from "@/components/containers/ImageContainer/ImageContainer";
import Image from "@/components/Image/Image";
import HamburgerHeader from "../HamburgerHeader/HamburgerHeader";
import { AnimatePresence } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { TextHeading1, TextParagraph } from "@/components/Text/Text";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { AbsoluteFlexContainer } from "../containers/Flex/AbsoluteFlexContainer";
import { Link, animateScroll as scroll } from "react-scroll";

function Header({ address, phone, name }) {
  const navigate = useNavigate();
  const [isHamburgerToggle, setIsHamburgerToggle] = useState(false);
  const [toggleMap, setToggleMap] = useState(false);
  const headerRef = useRef(null);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      headerRef.current.classList.add("active");
    } else {
      headerRef.current.classList.remove("active");
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    if (isHamburgerToggle) {
      document.body.style.overflow = "hidden";
      headerRef.current.classList.add("active");
    } else {
      document.body.style.overflow = "scroll";
    }
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [isHamburgerToggle]);
  return (
    <HeaderStyled>
      {toggleMap ? (
        <AbsoluteFlexContainer>
          <Flex direction="column" gap="1em">
            <AiOutlineClose
              onClick={() => setToggleMap(false)}
              style={{
                color: "white",
                fontSize: "1.5rem",
                backgroundColor: "black",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.198599400034!2d109.2124277147515!3d12.029844438096031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31708b02a239a783%3A0x1307a2b6af9dcdf7!2sThe%20Princess%20of%20Arena%20Cam%20Ranh%20Home!5e0!3m2!1sen!2s!4v1669921134707!5m2!1sen!2s"
              width="600"
              height="450"
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

      <>
        <ImageContainer width="100%">
          <picture>
            <source
              media="(max-width: 950px)"
              srcSet={`${resources.ThumbnailMobile} 950w`}
              sizes="950px"
            />
            <source srcSet={`${resources.Thumbnail} 1280w`} sizes="1280px" />
            <Image image={resources.Thumbnail} />
          </picture>
        </ImageContainer>
        <div className="info" ref={headerRef}>
          <div className="mobile-hamburger">
            {!isHamburgerToggle ? (
              <GiHamburgerMenu
                onClick={() => {
                  setIsHamburgerToggle(true);
                }}
              />
            ) : (
              <AiOutlineClose onClick={() => setIsHamburgerToggle(false)} />
            )}
          </div>
          <div className="hamburger">
            <Flex gap="0.75em">
              <BsFillTelephoneFill />
              <TextParagraph color="inherit" text={phone} />
            </Flex>
            <Flex onClick={() => setToggleMap(true)} gap="0.75em">
              <IoLocation />
              <TextParagraph lineHeight="1.5" color="inherit" text={address} />
            </Flex>
          </div>
          <TextHeading1
            fs="clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)"
            color="inherit"
            text={name}
          ></TextHeading1>
          <Button
            border="1px solid transparent"
            br="3px"
            onClick={() => navigate("/reservations")}
          >
            <p className="book">BOOK NOW</p>
          </Button>

          <div className="decoration"></div>
          <nav>
            <Link smooth={true} offset={-170} duration={500} to="rooms">
              <TextParagraph
                cursor="pointer"
                fw={500}
                needHover={true}
                color="inherit"
                text="Rooms"
              />
            </Link>
            <TextParagraph fw={500} color="inherit" text="•" />
            <Link smooth={true} offset={-170} duration={500} to="facilities">
              <TextParagraph
                cursor="pointer"
                needHover={true}
                fw={500}
                color="inherit"
                text="Facilities"
              />
            </Link>

            <TextParagraph fw={500} color="inherit" text="•" />
            <Link smooth={true} offset={-170} duration={500} to="rules">
              <TextParagraph
                cursor="pointer"
                fw={500}
                needHover={true}
                color="inherit"
                text="House rules"
              />
            </Link>
            <TextParagraph fw={500} color="inherit" text="•" />
            <Link smooth={true} offset={-170} duration={500} to="about">
              <TextParagraph
                cursor="pointer"
                fw={500}
                needHover={true}
                color="inherit"
                text="About"
              />
            </Link>
            <TextParagraph fw={500} color="inherit" text="•" />
            <TextParagraph
              cursor="pointer"
              fw={500}
              needHover={true}
              color="inherit"
              text="Sign In"
              onClick={() => navigate("/admin")}
            />
          </nav>
          <AnimatePresence mode="wait">
            {isHamburgerToggle ? (
              <HamburgerHeader
                setIsHamburgerToggle={setIsHamburgerToggle}
                phone={phone}
                address={address}
              ></HamburgerHeader>
            ) : null}
          </AnimatePresence>
        </div>
        <Flex
          variants={TitleAnimation}
          animate="show"
          initial="hidden"
          direction="column"
          gap="0.5em"
        >
          <TextParagraph
            transform="uppercase"
            fs="clamp(1.25rem, calc(0.82rem + 0.89vw), 1.63rem)"
            color="var(--text_color2)"
            text="Luxury"
            letterSpacing="3px"
          />
          <TextParagraph
            transform="uppercase"
            fs="clamp(1.25rem, calc(0.82rem + 0.89vw), 1.63rem)"
            color="var(--text_color2)"
            text="Accommodation &"
            letterSpacing="3px"
          />
          <TextParagraph
            transform="uppercase"
            fs="clamp(1.25rem, calc(0.82rem + 0.89vw), 1.63rem)"
            color="var(--text_color2)"
            text="Rooms in CAM RANH"
            letterSpacing="3px"
          />
          <TextParagraph
            m="1em 0"
            width="25ch"
            color="var(--text_color2)"
            text="Reserve your stylish room at The Prince of Arena"
            lineHeight="1.7"
          />
        </Flex>
      </>
    </HeaderStyled>
  );
}

export default Header;
