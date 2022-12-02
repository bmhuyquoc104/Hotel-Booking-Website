import React, { useState } from "react";
import ReservationDetailStyled from "./ReservationDetail.styled";
import { useReservationContext } from "@/hooks/AppContextProvider";
import Label from "@/components/Label/Label";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import { format } from "date-fns";
import { TextHeading2, TextHeading3 } from "@/components/Text/Text";
import Flex from "@/components/containers/Flex/Flex";
import Snackbar from "@mui/material/Snackbar";
import { usePostRoomPriceInfo } from "@/hooks/useHotel";

function ReservationDetail({ roomPriceInfo }) {
  const { reservation } = useReservationContext();
  const [open, setOpen] = useState(false);
  const { mutate } = usePostRoomPriceInfo();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    shouldFocusError: true,
  });
  const onSubmit = (data) => {
    const newRoomPriceInfo = roomPriceInfo?.roomsList.map((room) => {
      if (room.name === reservation.roomName) {
        room.roomInStock = room.roomInStock - reservation.roomQuantity;
      }
      return room;
    });
    mutate({
      data: {
        roomsList: newRoomPriceInfo,
      },
    });
    const result = {
      ...reservation,
      ...data,
    };
    setOpen(true);
    localStorage.setItem("reservation", JSON.stringify(result));
  };

  if (reservation === undefined) {
    return (
      <Flex width="100%" ai="center" jc="center">
        <TextHeading2
          transform="uppercase"
          fs="1.5rem"
          letterSpacing="1px"
          text="Can't find your reservation. Please try booking again."
          fw="500"
          color="var(--text_color)"
        />
      </Flex>
    );
  }

  return (
    <ReservationDetailStyled onSubmit={handleSubmit(onSubmit)}>
      <TextHeading2
        transform="uppercase"
        fs="1.5rem"
        letterSpacing="5px"
        text="YOUR DETAILS"
        fw="500"
        color="var(--text_color)"
      />
      <Flex
        p="1.5em 3em"
        ai="center"
        js="center"
        direction="column"
        gap="1.5em"
        width="70%"
        bg="#dbd5cd"
      >
        <TextHeading3
          color="var(--text_color)"
          fs="1rem"
          fw="500"
          text="BOOKING SUMMARY"
        />
        <Flex jc="space-between" width="100%" ai="center">
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="500"
            text="DATE"
          />
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="300"
            text={`${format(
              reservation.startDate,
              "EEE dd MMM yyyy"
            )} - ${format(reservation.endDate, "EEE dd MMM yyyy")}`}
          />
        </Flex>
        <Flex jc="space-between" width="100%" ai="center">
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="500"
            text="NUMBERS OF NIGHT"
          />
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="300"
            text={reservation?.totalNight}
          />
        </Flex>
        <Flex jc="space-between" width="100%" ai="center">
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="500"
            text="Guests"
          />
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="300"
            text={`${reservation?.guests.adults} adults - ${reservation.guests.children} children`}
          />
        </Flex>
        <Flex jc="space-between" width="100%" ai="center">
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="500"
            text="ROOMS"
          />
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="300"
            transform="capitalize"
            text={`${reservation?.roomQuantity} x ${reservation.roomName} Room`}
          />
        </Flex>
        <Flex jc="space-between" width="100%" ai="center">
          <TextHeading3
            color="var(--text_color)"
            fs="0.875rem"
            fw="500"
            text="TOTAL PRICE"
          />
          <TextHeading3
            color="var(--text_color)"
            fs="1.5rem"
            fw="700"
            text={`${currencyFormatter.format(reservation.totalPrice)}`}
          />
        </Flex>
      </Flex>
      <TextHeading2
        color="var(--text_color)"
        fs="1rem"
        m="2.5em 0 0 0"
        fw="500"
        text="RESERVATION INFORMATION"
      />
      <form className="user-form">
        <Flex width="35%" direction="column" gap="0.5em">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="user-first-name"
            fw="700"
            text="First Name"
          />
          <input {...register("first-name")} id="user-first-name" type="text" />
        </Flex>
        <Flex width="35%" direction="column" gap="0.5em">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="user-full-name"
            fw="700"
            text="Full Name"
          />
          <input {...register("full-name")} id="user-full-name" type="text" />
        </Flex>
        <Flex width="35%" direction="column" gap="0.5em">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="phone"
            fw="700"
            text="Phone number"
          />
          <input
            {...register("phone", {
              valueAsNumber: true,
            })}
            id="phone"
            type="text"
          />
        </Flex>
        <Flex width="35%" direction="column" gap="0.5em">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="email"
            fw="700"
            text="Email"
          />
          <input {...register("email")} id="email" type="text" />
        </Flex>
        <Button
          border="1px solid transparent"
          br="3px"
          bg="black"
          width="40%"
          m="0 auto"
          color="white"
          padding="1.15em 1.75em"
        >
          CHECK OUT
        </Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="You have successfully booked a room"
      />
    </ReservationDetailStyled>
  );
}

export default ReservationDetail;
