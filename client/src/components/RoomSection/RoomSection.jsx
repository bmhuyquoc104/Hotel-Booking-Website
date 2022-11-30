import RoomSectionStyled from "./RoomSection.styled";
import React from "react";
import Room from "../Room/Room";
import { TextHeading2 } from "@/components/Text/Text";
import { SectionAnimation } from "@/styles/AnimationStyled";

function RoomSection({ rooms }) {
  return (
    <RoomSectionStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={SectionAnimation}
      id="rooms"
    >
      <TextHeading2
        transform="uppercase"
        fs="1.5rem"
        letterSpacing="5px"
        text="ROOMS"
        fw="500"
        color="var(--text_color)"
      />
      {rooms.map((room, index) => (
        <Room
          key={room.id}
          overview={room.overview}
          image={room.image}
          name={room.name}
          size={room.size}
          amenities={room.amenities}
          rate={room.rate}
          numberOfRooms={room.numberRooms}
          firstOrder={index % 2 === 0 ? 1 : 2}
          secondOrder={index % 2 === 0 ? 2 : 1}
        />
      ))}
    </RoomSectionStyled>
  );
}

export default RoomSection;
