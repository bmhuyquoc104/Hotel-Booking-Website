import React from "react";
import SectionRuleStyled from "./SectionRule.styled";
import {
  TextParagraph,
  TextHeading2,
  TextHeading3,
} from "@/components/Text/Text";
import { SectionAnimation } from "@/styles/AnimationStyled";
import Flex from "@/components/containers/Flex/Flex";
import { getIcon } from "../../utils/GetIconByAmenities";

function SectionRule({ rules }) {
  return (
    <SectionRuleStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={SectionAnimation}
      id="rules"
    >
      <TextHeading2
        transform="uppercase"
        fs="1.5rem"
        letterSpacing="1px"
        text="House Rules"
        fw="500"
        color="var(--text_color)"
      />
      <Flex
        br="3px"
        gap="2em"
        width="100%"
        direction="column"
        p="1.5em 3em"
        bg="#ffffff"
      >
        {rules.map((rule, index) => (
          <div key={index} className="rule">
            <Flex ai="flex-start" gap="0.5em">
              <TextHeading3 fs="1rem" fw="500" text={getIcon(rule.type)} />
              <TextHeading3 fs="1rem" fw="500" text={`${rule.type}`} />
            </Flex>
            <TextParagraph
              lineHeight="2"
              fs="0.9375rem"
              text={rule.description}
            />
          </div>
        ))}
      </Flex>
    </SectionRuleStyled>
  );
}

export default SectionRule;
