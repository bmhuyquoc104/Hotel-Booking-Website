import React from "react";
import Flex from "@/components/containers/Flex/Flex";
import AdminHeader from "@/components/AdminHeader/AdminHeader";
import RoomPrice from "@/components/RoomPriceForm/RoomPrice";
import { useGetHotelInfo, useGetRoomPriceInfo } from "@/hooks/useHotel";
import { TextParagraph } from "@/components/Text/Text";


function RoomPriceEdit() {
  const { data: HotelInfo, isLoading, isError, error } = useGetHotelInfo();

  const {
    data: roomPriceInfo,
    isLoading: isLoadingRoomPrice,
    isError: isErrorRoomPrice,
    error: errorRoomPrice,
  } = useGetRoomPriceInfo();

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
        <TextParagraph text={error} fs="1rem" color="var(--text_color)" />
      </Flex>
    );
  }
  if (isLoadingRoomPrice) {
    return (
      <Flex jc="center" ai="center" width="100%">
        <TextParagraph text="Loading..." fs="1rem" color="var(--text_color)" />
      </Flex>
    );
  }
  if (isErrorRoomPrice) {
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
      <AdminHeader name={HotelInfo?.data?.name} />
      <RoomPrice roomPriceInfo={roomPriceInfo?.data?.roomsList} />
    </Flex>
  );
}

export default RoomPriceEdit;
