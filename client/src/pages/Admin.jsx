import React from "react";
import Flex from "@/components/containers/Flex/Flex";
import AdminForm from "@/components/AdminForm/AdminForm";
import AdminHeader from "@/components/AdminHeader/AdminHeader";
import { useGetHotelInfo } from "@/hooks/useHotel";

function Admin() {
  const { data: HotelInfo, isLoading, isError, error } = useGetHotelInfo();
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <Flex gap = "2em" p ="8em 0" minHeight="100vh" width="100%" direction="column">
      <AdminHeader name = {HotelInfo?.data?.name}/>
      <AdminForm hotelData = {HotelInfo}/>
    </Flex>
  );
}

export default Admin;
