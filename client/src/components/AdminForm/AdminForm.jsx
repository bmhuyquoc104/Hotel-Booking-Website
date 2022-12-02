import React, { useState } from "react";
import Flex from "@/components/containers/Flex/Flex";
import { TextHeading2 } from "@/components/Text/Text";
import Label from "@/components/Label/Label";
import Button from "@/components/Button/Button";
import FieldArray from "../FieldArray/FieldArray";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, useFieldArray } from "react-hook-form";
import RoomFieldArray from "@/components/RoomFieldArray/RoomFieldArray";
import { usePostHotelInfo } from "@/hooks/useHotel";

import AdminFormStyled from "./AdminForm.styled";
function AdminForm({ hotelData }) {
  const {mutate} = usePostHotelInfo();
  const formDefaultValue = {
    name: hotelData?.data.name,
    address: hotelData?.data.address,
    coordination: {
      lat: hotelData?.data?.coordination.lat,
      lng: hotelData?.data?.coordination.lng,
    },
    thumbnail_url: hotelData?.data.thumbnail_url,
    owner_name: hotelData?.data.owner_name,
    ownerEmail: hotelData?.data.ownerEmail,
    ownerPhone: hotelData?.data.ownerPhone,
    roomsList: hotelData?.data?.roomsList.map((room) => ({
      id: room?.id,
      image: room?.image,
      name: room?.name,
      size: room?.size,
      rate: room?.rate,
      overview: room?.overview,
      numberRooms: room?.numberRooms,
      amenities: room.amenities.map((amenity) => (amenity)),

    })),
    rules: hotelData?.data?.rules.map((rule) => ({
      type: rule?.type,
      description: rule?.description,
    })),
    utilities: hotelData?.data?.utilities.map((utility) => ({
      type: utility.type,
      features: utility.features.map((feature) => (feature)),
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
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "rules", // unique name for your Field Array
  });

  const onSubmit = (data, e) => {
    const result = {
      data:data
    }
    mutate(result);
  };
  return (
    <AdminFormStyled onSubmit={handleSubmit(onSubmit)}>
      <TextHeading2
        text="Update Hotel Info"
        fw="500"
        fs="1.5rem"
        color="var(--primary_color)"
      />
      <Flex width="100%" direction="column" gap="0.5em">
        <Label
          color="var(--text_color)"
          fs="0.875rem"
          htmlFor="name"
          fw="700"
          text="Hotel Name"
        />
        <input {...register("name")} id="name" type="text" />
      </Flex>
      <Flex width="100%" direction="column" gap="0.5em">
        <Label
          color="var(--text_color)"
          fs="0.875rem"
          htmlFor="address"
          fw="700"
          text="Hotel Address"
        />
        <input {...register("address")} id="address" type="text" />
      </Flex>
      <Flex wrap="wrap" jc="space-between" width="100%">
        <Flex gap="0.5em" direction="column" width="48%">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="lat"
            fw="700"
            text="Latitude"
          />
          <input {...register("coordination.lat")} id="lat" type="text" />
        </Flex>
        <Flex gap="0.5em" direction="column" width="48%">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="lng"
            fw="700"
            text="Longitude"
          />
          <input {...register("coordination.lng")} id="lng" type="text" />
        </Flex>
      </Flex>
      <Flex width="100%" direction="column" gap="0.5em">
        <Label
          color="var(--text_color)"
          fs="0.875rem"
          htmlFor="thumbnail_url"
          fw="700"
          text="Thumbnail URL"
        />
        <input {...register("thumbnail_url")} id="thumbnail_url" type="text" />
      </Flex>
      <Flex wrap="wrap" jc="space-between" width="100%">
        <Flex gap="0.5em" direction="column" width="260px">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="owner_name"
            fw="700"
            text="Owner Name"
          />
          <input {...register("owner_name")} id="owner_name" type="text" />
        </Flex>
        <Flex gap="0.5em" direction="column" width="260px">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="ownerEmail"
            fw="700"
            text="Owner Email"
          />
          <input {...register("ownerEmail")} id="ownerEmail" type="text" />
        </Flex>
        <Flex gap="0.5em" direction="column" width="260px">
          <Label
            color="var(--text_color)"
            fs="0.875rem"
            htmlFor="ownerPhone"
            fw="700"
            text="Owner Phone"
          />
          <input {...register("ownerPhone")} id="ownerPhone" type="text" />
        </Flex>
      </Flex>
      <TextHeading2
        color="var(--text_color)"
        fs="0.875rem"
        fw="700"
        text="Rules"
      />
      <div className="rules">
        {fields.map((field, index) => (
          <div key={field.id}>
            <Flex wrap="wrap" jc="space-between" width="100%">
              <Flex gap="0.5em" direction="column" width="48%">
                <Label
                  color="var(--text_color)"
                  fs="0.675rem"
                  htmlFor="rule-type"
                  fw="500"
                  text="Type"
                />
                <input
                  {...register(`rules.${index}.type`)}
                  id="rule-type"
                  type="text"
                />
              </Flex>
              <Flex gap="0.5em" direction="column" width="48%">
                <Label
                  color="var(--text_color)"
                  fs="0.675rem"
                  htmlFor="rule-description"
                  fw="500"
                  text="Description"
                />
                <input
                  {...register(`rules.${index}.description`)}
                  id="rule-description"
                  type="text"
                />
              </Flex>
            </Flex>
          </div>
        ))}
      </div>
      <TextHeading2
        color="var(--text_color)"
        fs="0.875rem"
        fw="700"
        text="Utilities"
      />
      <FieldArray
        {...{ control, register, formDefaultValue, getValues, errors }}
      />
      <TextHeading2
        color="var(--text_color)"
        fs="0.875rem"
        fw="700"
        text="Rooms"
      />
      <RoomFieldArray
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
    </AdminFormStyled>
  );
}

export default AdminForm;
