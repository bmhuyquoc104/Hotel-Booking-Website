import React, { useState } from "react";
import Flex from "@/components/containers/Flex/Flex";
import { MdKeyboardArrowUp, MdArrowDropDown } from "react-icons/md";
import BookSectionStyled from "./BookSection.styled";
import { SectionAnimation } from "@/styles/AnimationStyled";
import { TextParagraph, TextSpan } from "@/components/Text/Text";
import DateSection from "@/components/DateSection/DateSection";
import Button from "@/components/Button/Button";

function BookSection() {
  const [isToggleArrow, setIsToggleArrowDown] = useState(false);
  const [changeAdultQuantity, setChangeAdultQuantity] = useState(1);
  const [changeChildrenQuantity, setChangeChildrenQuantity] = useState(1);
  console.log(changeChildrenQuantity);
  return (
    <BookSectionStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={SectionAnimation}
      id="book"
    >
      <form className="book-section">
        <Flex width="max(250px,10%)" direction="column" gap="1.2em">
          <TextParagraph fs="0.875rem" text="CHECK-IN/CHECK-OUT" fw="500" />
          <Button
            fs="0.875rem"
            onClick={() => setIsToggleArrowDown(!isToggleArrow)}
            type="button"
            width="100%"
            fw="300"
            padding="1em 0"
            borderBottom="1px solid black"
            jc="space-between"
            color="var(--text_color)"
          >
            SELECT DATES
            <>{isToggleArrow ? <MdArrowDropDown /> : <MdKeyboardArrowUp />}</>
          </Button>
        </Flex>
        <Flex direction="column" gap="1.2em">
          <TextParagraph fs="0.875rem" text="ADULTS" fw="500" />
          <Flex ai="center" gap="1.2em">
            <Button
              width="40px"
              color="black"
              type="button"
              height="40px"
              fs="1.25rem"
              fw="500"
              border="1px solid black"
              onClick={() => setChangeAdultQuantity(changeAdultQuantity + 1)}
            >
              +
            </Button>
            <TextSpan text={changeAdultQuantity}></TextSpan>
            <Button
              width="40px"
              color="black"
              type="button"
              height="40px"
              fs="1.25rem"
              fw="500"
              border="1px solid black"
              disabled={changeAdultQuantity <= 1 ? true : false}
              onClick={() => setChangeAdultQuantity(changeAdultQuantity - 1)}
            >
              -
            </Button>
          </Flex>
        </Flex>
        <Flex direction="column" gap="1.2em">
          <TextParagraph fs="0.875rem" text="CHILDREN" fw="500" />
          <Flex ai="center" gap="1.2em">
            <Button
              width="40px"
              color="black"
              height="40px"
              fs="1.25rem"
              fw="500"
              type="button"
              border="1px solid black"
              onClick={() =>
                setChangeChildrenQuantity(changeChildrenQuantity + 1)
              }
            >
              +
            </Button>
            <TextSpan
              color="var(--text_color)"
              fw="500"
              fs="1rem"
              text={`${changeChildrenQuantity}`}
            ></TextSpan>
            <Button
              width="40px"
              color="black"
              type="button"
              height="40px"
              fs="1.25rem"
              fw="500"
              border="1px solid black"
              disabled={changeChildrenQuantity <= 1 ? true : false}
              onClick={() =>
                setChangeChildrenQuantity(changeChildrenQuantity - 1)
              }
            >
              -
            </Button>
          </Flex>
        </Flex>
        <Button
          whileHover={{
            color: "#808080",
            backgroundColor: "white",
            border: "1px solid #808080",
          }}
          fs="0.875rem"
          border="1px solid transparent"
          br="3px"
          height="45px"
          bg="#808080"
          padding="0.5em 1.25em"
        >
          CHECK AVAILABILITY
        </Button>
        {isToggleArrow ? (
          <Flex>
            <DateSection />
          </Flex>
        ) : null}
      </form>
    </BookSectionStyled>
  );
}

export default BookSection;
