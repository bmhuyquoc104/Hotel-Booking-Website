import React from "react";
import Flex from "@/components/containers/Flex/Flex";
import BookingHeader from "@/components/BookingHeader/BookingHeader";
import ReservationDetailComponent from "@/components/ReservationDetail/ReservationDetail";
import { useGetHotelInfo } from "@/hooks/useHotel";
import { TextParagraph } from "@/components/Text/Text";

function ReservationDetail() {
  const { data: HotelInfo, isLoading, isError, error } = useGetHotelInfo();
  if (isLoading) {
    return (
      <Flex jc="center" ai="center" width="100%">
        <TextParagraph text="Loading..." fs="1rem" color="var(--text_color)" />
      </Flex>
    );
  }
  if (isError) {
    return (
      <Flex jc="center" ai="center" width="100%">
        <TextParagraph
          text={errorRoomPrice}
          fs="1rem"
          color="var(--text_color)"
        />
      </Flex>
    );
  }

  return (
    <Flex gap="2em" p="8em 0" minHeight="100vh" width="100%" direction="column">
      <BookingHeader name={HotelInfo?.data?.name} />
      <ReservationDetailComponent />
    </Flex>
  );
}

export default ReservationDetail;
