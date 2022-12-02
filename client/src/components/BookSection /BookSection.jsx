import React, { useState } from "react";
import Flex from "@/components/containers/Flex/Flex";
import BookSectionStyled from "./BookSection.styled";
import { SectionAnimation } from "@/styles/AnimationStyled";
import { TextParagraph, TextSpan, TextHeading2 } from "@/components/Text/Text";
import DateSection from "@/components/DateSection/DateSection";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { differenceInDays, getOverlappingDaysInIntervals } from "date-fns";
import { useReservationContext } from "@/hooks/AppContextProvider";

function BookSection({ roomPriceInfo }) {
  const { setReservation } = useReservationContext();

  const navigate = useNavigate();
  const roomsOption = [];
  roomPriceInfo?.roomsList?.map((room) => roomsOption.push(room.name));
  const [roomChosen, setRoomChosen] = useState(roomsOption[0]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomQuantity, setRoomQuantity] = useState(1);
  const [changeAdultQuantity, setChangeAdultQuantity] = useState(1);
  const [changeChildrenQuantity, setChangeChildrenQuantity] = useState(1);
  const calculatePrice = (room, startDate, endDate, totalDays) => {
    let totalPrice = 0;
    let totalDiscountDates = 0;
    room.discount.map((element) => {
      const discountDates = getOverlappingDaysInIntervals(
        { start: startDate, end: endDate },
        { start: element.startDate, end: element.endDate }
      );
      if (discountDates > 0) {
        totalPrice += element.priceDiscount * discountDates;
      }
      totalDiscountDates += discountDates;
    });
    totalPrice += (totalDays - totalDiscountDates) * room.defaultPrice;

    return totalPrice;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: "",
    shouldFocusError: true,
  });
  const onSubmit = () => {
    const totalDays = differenceInDays(endDate, startDate);
    const room = roomPriceInfo.roomsList.find(
      (room) => room.name === roomChosen
    );
    const totalPrice = calculatePrice(room, startDate, endDate, totalDays);
    const values = {
      roomQuantity: roomQuantity,
      guests: {
        adults: changeAdultQuantity,
        children: changeChildrenQuantity,
      },
      startDate: Date.parse(startDate),
      endDate: Date.parse(endDate),
      roomName: roomChosen,
      totalPrice: totalPrice,
      totalNight: totalDays,
      price:
        roomPriceInfo?.roomsList
          ?.filter((room, index) => room.name === roomChosen)
          .map((room) => room.defaultPrice) *
        roomQuantity *
        totalDays,
    };
    setReservation(values);
    navigate("/reservation-detail");
  };
  return (
    <Flex ai="center" m="10em 0 0 0" direction="column" gap="1.2em">
      <TextHeading2
        text="BOOK A ROOM"
        fw="500"
        fs="1.5rem"
        color="var(--primary_color)"
      />
      <BookSectionStyled
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
        variants={SectionAnimation}
        id="book"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="book-section">
          <Flex width="fit-content" direction="column" gap="0.75em">
            <TextParagraph fs="0.875rem" text="ROOM TYPES" fw="500" />
            <select
              {...register("roomName")}
              onChange={(e) => {setRoomChosen(e.target.value);setRoomQuantity(1)}}
            >
              {roomsOption?.map((room, index) => (
                <option key={index} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </Flex>
          <Flex direction="column" gap="1.2em">
            <TextParagraph fs="0.875rem" text="QUANTITY" fw="500" />
            <Flex ai="center" gap="1.2em">
              <Button
                width="40px"
                color="black"
                height="40px"
                fs="1.25rem"
                fw="500"
                type="button"
                border="1px solid black"
                disabled={
                  roomQuantity ==
                  roomPriceInfo?.roomsList
                    ?.filter((room, index) => room.name === roomChosen)
                    .map((room) => room.roomInStock)
                    ? true
                    : false
                }
                onClick={() => setRoomQuantity(roomQuantity + 1)}
              >
                +
              </Button>
              <TextSpan
                color="var(--text_color)"
                fw="500"
                fs="1rem"
                text={`${roomQuantity}`}
              ></TextSpan>
              <Button
                width="40px"
                color="black"
                type="button"
                height="40px"
                fs="1.25rem"
                fw="500"
                border="1px solid black"
                disabled={roomQuantity === 1 ? true : false}
                onClick={() => setRoomQuantity(roomQuantity - 1)}
              >
                -
              </Button>
            </Flex>
          </Flex>
          <Flex gap="1.2em" direction="column">
            <TextParagraph fs="0.875rem" text="AVAILABILITY" fw="500" />
            <TextParagraph
              fs="0.875rem"
              text={`${roomPriceInfo?.roomsList
                ?.filter((room, index) => room.name === roomChosen)
                .map((room) => room.roomInStock)} rooms left`}
              fw="700"
            />
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
          <Flex>
            <DateSection
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </Flex>
          <Flex width="40%" gap="0.5em">
            <Button
              border="1px solid transparent"
              br="3px"
              width="100%"
              bg="black"
              color="white"
              padding="1.15em 1.75em"
              fs="0.875rem"
              fw="500"
              disabled={startDate === null || endDate === null ? true : false}
            >
              Book
            </Button>
          </Flex>
        </form>
     
      </BookSectionStyled>
    </Flex>
  );
}

export default BookSection;
