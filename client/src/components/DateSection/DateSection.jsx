import DateSectionStyled from "./DateSection.styled";
import Flex from "@/components/containers/Flex/Flex";
import { format } from "date-fns";

import { TextParagraph, TextSpan } from "@/components/Text/Text";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSection() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DateSectionStyled>
      <Flex p="2em" gap="2em" bg="#DBD5CD" jc="center" ai="center" width="100%">
        <Flex
          jc="center"
          ai="center"
          p="2em"
          gap="0.5em"
          width="100%"
          bg="white"
          direction="column"
        >
          <TextParagraph
            fw="500"
            fs="clamp(0.69rem, calc(0.62rem + 0.28vw), 0.88rem);"
            bg="black"
            text="CHECK-IN DATE"
          />
          <TextParagraph
            fw="700"
            color="var(--text_color)"
            fs="clamp(0.75rem, calc(0.57rem + 0.75vw), 1.25rem)"
            text={`${
              startDate != null ? format(startDate, "EEE, d MMM yyyy") : ""
            }`}
          />
        </Flex>
        <Flex
          jc="center"
          ai="center"
          gap="0.5em"
          p="2em"
          width="100%"
          bg="white"
          direction="column"
        >
          <TextParagraph
            fw="500"
            fs="clamp(0.69rem, calc(0.62rem + 0.28vw), 0.88rem);"
            bg="white"
            text="CHECK-OUT DATE"
          />
          <TextParagraph
            fw="700"
            fs="clamp(0.75rem, calc(0.57rem + 0.75vw), 1.25rem)"
            color="var(--text_color)"
            text={`${
              endDate != null ? format(endDate, "EEE, d MMM yyyy") : ""
            }`}
          />
        </Flex>
      </Flex>
      <Flex width="100%" gap="2em" jc="space-evenly" ai="center">
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          inline
        />
        <DatePicker
          className="date-picker"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          inline
          minDate={startDate}
        />
      </Flex>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </DateSectionStyled>
  );
}

export default DateSection;
