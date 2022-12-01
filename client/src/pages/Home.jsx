import React from "react";
import Header from "@/components/Header/Header";
import { useGetHotelInfo } from "@/hooks/useHotel";
import Flex from "@/components/containers/Flex/Flex";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import RoomSection from "@/components/RoomSection/RoomSection";
import SectionFacility from "@/components/SectionFacility/SectionFacility";
import BookSection from "@/components/BookSection /BookSection";
import SectionRule from "@/components/SectionRules/SectionRule";

function Home() {
  const { data: HotelInfo, isLoading, isError, error } = useGetHotelInfo();
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <Flex m ="0 0 2em 0" gap="2em" minHeight="100vh" width="100%" direction="column">
      <Header
        name={HotelInfo?.data.name}
        phone={HotelInfo?.data.ownerPhone}
        address={HotelInfo?.data.address}
      />
      <BookSection />
      <SectionAbout />
      <RoomSection rooms={HotelInfo?.data.roomsList} />
      <SectionFacility utilities={HotelInfo?.data.utilities} />
      <SectionRule rules = {HotelInfo?.data.rules} />
    </Flex>
  );
}

export default Home;
