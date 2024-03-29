import React from "react";
import Flex from "@/components/containers/Flex/Flex";
import AdminForm from "@/components/AdminForm/AdminForm";
import AdminHeader from "@/components/AdminHeader/AdminHeader";
import { TextParagraph } from "@/components/Text/Text";
import { useGetHotelInfo } from "@/hooks/useHotel";

function Admin() {
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
        <TextParagraph text={error} fs="1rem" color="var(--text_color)" />
      </Flex>
    );
  }
  return (
    <Flex gap="2em" p="8em 0" minHeight="100vh" width="100%" direction="column">
      <AdminHeader name={HotelInfo?.data?.name} />
      <AdminForm hotelData={HotelInfo} />
    </Flex>
  );
}

export default Admin;
