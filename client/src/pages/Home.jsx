import React from "react";
import Header from "@/components/Header/Header";
import { useGetHotelInfo } from "@/hooks/useHotel";
import Flex from "@/components/containers/Flex/Flex";
import SectionAbout from "@/components/SectionAbout/SectionAbout";

function Home() {
  const { data: HotelInfo, isLoading, isError, error } = useGetHotelInfo();
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  console.log(HotelInfo?.data);
  return (
    <Flex gap ="2em" minHeight="100vh" width="100%" direction="column">
      <Header
        name={HotelInfo?.data.name}
        phone={HotelInfo?.data.ownerPhone}
        address={HotelInfo?.data.address}
      />
      <SectionAbout/>
    </Flex>
  );
}

export default Home;
