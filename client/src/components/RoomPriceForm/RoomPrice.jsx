import RoomPriceStyled from "./RoomPrice.styled";
import React, { useState } from "react";
import { TextHeading2 } from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { usePostRoomPriceInfo } from "@/hooks/useHotel";
import RoomPriceArray from "@/components/RoomPriceArray/RoomPriceArray";
import Snackbar from "@mui/material/Snackbar";

function RoomPrice({ roomPriceInfo }) {
  const { mutate } = usePostRoomPriceInfo();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const formDefaultValue = {
    roomsList: roomPriceInfo?.map((room) => ({
      id: room?.id,
      name: room?.name,
      roomInStock: room?.roomInStock,
      defaultPrice: room?.defaultPrice,
      discount: room.discount.map((element) => ({
        priceDiscount: element?.priceDiscount,
        startDate: element?.startDate,
        endDate: element?.endDate,
      })),
    })),
  };
  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValue,
    shouldFocusError: true,
  });

  const onSubmit = (data, e) => {
    const result = {
      data: data,
    };
    mutate(result);
    setOpen(true);
    localStorage.setItem("roomPriceInfo", JSON.stringify(result));
  };

  return (
    <RoomPriceStyled onSubmit={handleSubmit(onSubmit)}>
      <TextHeading2
        text="Update Room Price Info"
        fw="500"
        fs="1.5rem"
        color="var(--primary_color)"
      />
      <RoomPriceArray
        {...{ control, register, formDefaultValue, getValues, errors }}
      />
      <Button
        border="1px solid transparent"
        br="3px"
        bg="black"
        color="white"
        padding="1.15em 1.75em"
      >
        Submit
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="You have successfully update the price of hotel rooms"
      />
    </RoomPriceStyled>
  );
}

export default RoomPrice;
