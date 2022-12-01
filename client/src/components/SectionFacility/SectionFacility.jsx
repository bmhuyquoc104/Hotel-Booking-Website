import React from "react";
import SectionFacilityStyled from "./SectionFacility.styled";
import Flex from "@/components/containers/Flex/Flex";
import { TextParagraph, TextHeading2 } from "@/components/Text/Text";
import { SectionAnimation } from "@/styles/AnimationStyled";
import { TiTick } from "react-icons/ti";
import { getIcon } from "../../utils/GetIconByAmenities";

function SectionFacility({ utilities }) {
  return (
    <SectionFacilityStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={SectionAnimation}
      id="facilities"
    >
      <TextHeading2
        transform="uppercase"
        fs="1.5rem"
        letterSpacing="1px"
        text="Facilities of The Princess of Arena"
        fw="500"
        color="var(--text_color)"
      />
      <Flex
        p="1.5em 3em"
        jc="space-between"
        ai="flex-start"
        wrap="wrap"
        gap="1em"
        width="100%"
      >
        {utilities.map((utility, index) => (
          <div
            className="utilities"
            key={index}
          >
            <Flex gap="0.5em">
              <TextParagraph
                color="var(--text_color)"
                fw="500"
                fs="1.1rem"
                text={getIcon(utility.type)}
              />
              <TextParagraph
                color="var(--text_color)"
                fw="500"
                fs="1.1rem"
                text={utility.type}
              />
            </Flex>

            {utility.features.map((feature, index) => (
              <div className="utility" key={index}>
                <TiTick style={{ fontSize: "0.9375rem" }} />
                <TextParagraph
                  fs="0.9375rem"
                  color="var(--text_color)"
                  key={index}
                  fw="300"
                  text={feature}
                />
              </div>
            ))}
          </div>
        ))}
      </Flex>
    </SectionFacilityStyled>
  );
}

export default SectionFacility;
