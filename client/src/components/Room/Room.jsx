import React from "react";
import RoomStyled from "./Room.styled";
import Flex from "@/components/containers/Flex/Flex";
import ImageContainer from "@/components/containers/ImageContainer/ImageContainer";
import Image from "@/components/Image/Image";
import { TextParagraph, TextSpan, TextHeading2 } from "@/components/Text/Text";
import { getIcon } from "../../utils/GetIconByAmenities";

function Room({
  firstOrder,
  secondOrder,
  image,
  name,
  size,
  rate,
  numberOfRooms,
  overview,
  amenities,
}) {
  return (
    <RoomStyled firstOrder={firstOrder} secondOrder={secondOrder}>
      <ImageContainer width="inherit" height="100%">
        <Image br="8px" alt="room" image={image} />
      </ImageContainer>
      <div className="room-info">
        <Flex direction="column" gap="0.75em">
          <TextHeading2
            transform="uppercase"
            fs="1.5rem"
            letterSpacing="2px"
            text={`${name} ROOM OVERVIEW`}
            fw="500"
            color="var(--text_color)"
          />
          <TextParagraph
            lineHeight="1.6"
            fs="0.9rem"
            color="var(--text_color)"
            text={overview}
          ></TextParagraph>
        </Flex>
        <Flex jc="space-between" ai="center">
          <Flex gap="0.5em">
            <TextParagraph
              fs="0.9rem"
              text="Room type: "
              color="var(--text_color)"
            />
            <TextSpan
              fs="0.9rem"
              transform="capitalize"
              text={name}
              color="var(--text_color)"
            />
          </Flex>

          <Flex gap="0.5em">
            <TextParagraph fs="1rem" text="Size: " color="var(--text_color)" />
            <TextSpan fs="1rem" text={`${size} ㎡`} color="var(--text_color)" />
          </Flex>
        </Flex>
        <Flex jc="space-between" ai="center">
          <Flex gap="0.5em">
            <TextParagraph fs="1rem" text="Price: " color="var(--text_color)" />
            <TextSpan
              fs="0.9rem"
              text={`$${rate}`}
              fw={500}
              color="var(--text_color)"
            />
          </Flex>

          <Flex gap="0.5em">
            <TextParagraph
              fs="0.9rem"
              text="Quantity: "
              color="var(--text_color)"
            />
            <TextSpan
              fs="0.9rem"
              text={numberOfRooms}
              color="var(--text_color)"
            />
          </Flex>
        </Flex>
        <Flex direction="column" gap="1em">
          <TextHeading2 fs="1rem" fw="500" text="AMENITIES" />
          <Flex gap="1em" wrap="wrap">
            {amenities.map((amenity, index) => (
              <div className="amenity" key={index}>
                <Flex>{getIcon(amenity)}</Flex>
                <TextParagraph
                  transform="uppercase"
                  fs="0.8rem"
                  fw ="500"
                  ta = "center"
                  text={amenity}
                  color="var(--text_color)"
                ></TextParagraph>
              </div>
            ))}
          </Flex>
        </Flex>
      </div>
    </RoomStyled>
  );
}

export default Room;
