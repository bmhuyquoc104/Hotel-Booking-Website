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
import { Link, animateScroll as scroll } from "react-scroll";

function Header({ address, phone, name }) {
  const navigate = useNavigate();
  const [isHamburgerToggle, setIsHamburgerToggle] = useState(false);
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
  }, [isHamburgerToggle]);
  return (
    <HeaderStyled>
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
            <Flex gap="0.75em">
              <IoLocation />
              <TextParagraph color="inherit" text={address} />
            </Flex>
          </div>
          <TextHeading1
            fs="clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)"
            color="inherit"
            text={name}
          ></TextHeading1>
          <Button
            whileHover={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid black",
            }}
            border="1px solid transparent"
            br="3px"
            padding="1.15em 1.75em"
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
            <Link smooth={true} offset={-170} duration={500} to="reviews">
              <TextParagraph
                cursor="pointer"
                needHover={true}
                fw={500}
                color="inherit"
                text="Guest Reviews"
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
              onClick={() => navigate("/signIn")}
            />
          </nav>
          <AnimatePresence mode="wait">
            {isHamburgerToggle ? (
              <HamburgerHeader
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
