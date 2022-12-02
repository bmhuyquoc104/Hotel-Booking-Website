import React from "react";
import BookingHeaderStyled from "./BookingHeader.styled";
import Flex from "@/components/containers/Flex/Flex";
import { useNavigate } from "react-router-dom";
import { TextHeading1, TextParagraph } from "@/components/Text/Text";
import Button from "@/components/Button/Button";

function BookingHeader({ name }) {
  const navigate = useNavigate();
  return (
    <BookingHeaderStyled>
      <TextHeading1
        fs="clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)"
        color="inherit"
        text={name}
      ></TextHeading1>
      <Flex ai="center" gap="1em">
        <Button
          border="1px solid transparent"
          br="3px"
          bg="black"
          color="white"
          padding="1.15em 1.75em"
          onClick={() => navigate("/")}
        >
          Back Home
        </Button>
      </Flex>
    </BookingHeaderStyled>
  );
}

export default BookingHeader;
