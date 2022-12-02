import React from "react";
import Flex from "@/components/containers/Flex/Flex";
import AdminHeader from "@/components/AdminHeader/AdminHeader";
import RoomPrice from "@/components/RoomPriceForm/RoomPrice";
import { useGetHotelInfo, useGetRoomPriceInfo } from "@/hooks/useHotel";

function RoomPriceEdit() {
  const { data: HotelInfo, isLoading, isError, error } = useGetHotelInfo();

  const {
    data: roomPriceInfo,
    isLoading: isLoadingRoomPrice,
    isError: isErrorRoomPrice,
    error: errorRoomPrice,
  } = useGetRoomPriceInfo();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (isLoadingRoomPrice) {
    return <h1>Loading ...</h1>;
  }
  if (isErrorRoomPrice) {
    return <h1>{errorRoomPrice}</h1>;
  }

  return (
    <Flex gap="2em" p="8em 0" minHeight="100vh" width="100%" direction="column">
      <AdminHeader name={HotelInfo?.data?.name} />
      <RoomPrice roomPriceInfo={roomPriceInfo?.data?.roomsList} />
    </Flex>
  );
}

export default RoomPriceEdit;
