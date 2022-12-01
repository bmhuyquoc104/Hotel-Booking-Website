import React from "react";
import { useFieldArray } from "react-hook-form";
import Flex from "@/components/containers/Flex/Flex";
import RoomAmenitiesArray from "./RoomAmenitiesArray";
import Label from "@/components/Label/Label";
import Button from "@/components/Button/Button";

export default function RoomFieldArray({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "roomsList",
  });

  return (
    <div className="rules">
      <Flex width ="100%" direction="column">
        {fields.map((item, index) => {
          return (
            <Flex
              gap="0.5em"
              direction="column"
              width="fit-content"
              key={item.id}
            >
              <Flex wrap="wrap" jc="space-between" width="100%">
                <Flex gap="0.5em" direction="column" width="150px">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="Name"
                  />
                  <input {...register(`roomsList.${index}.name`)} type="text" />
                </Flex>
                <Flex gap="0.5em" direction="column" width="150px">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="Price"
                  />
                  <input {...register(`roomsList.${index}.rate`)} type="text" />
                </Flex>
                <Flex gap="0.5em" direction="column" width="150px">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="Size"
                  />
                  <input {...register(`roomsList.${index}.size`)} type="text" />
                </Flex>
                <Flex gap="0.5em" direction="column" width="150px">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="Quantity"
                  />
                  <input
                    {...register(`roomsList.${index}.numberRooms`)}
                    type="text"
                  />
                </Flex>
              </Flex>
              <Flex width="100%" direction="column" gap="0.5em">
                <Label
                  color="var(--text_color)"
                  fs="0.675rem"
                  fw="300"
                  text="Image URL"
                />
                <input {...register(`roomsList.${index}.image`)} type="text" />
              </Flex>
              <Flex width="100%" direction="column" gap="0.5em">
                <Label
                  color="var(--text_color)"
                  fs="0.675rem"
                  fw="300"
                  text="Overview"
                />
                <input
                  {...register(`roomsList.${index}.overview`)}
                  type="text"
                />
              </Flex>
              <RoomAmenitiesArray
                nestIndex={index}
                {...{ control, register, errors }}
              />
              <Button
                border="1px solid black"
                br="3px"
                bg="white"
                color="black"
                padding="0.5em 0.75em"
                m="0 0 3.5em 0"
                type="button"
                onClick={() => remove(index)}
              >
                Delete Room
              </Button>
            </Flex>
          );
        })}
      </Flex>
      <Button
          type="button"
          br = "2px"
          width="200px"
          bg = "#9d9d9d"
          padding="1em 1.25em"
          m="-2.5em 0 1em 0"
          color ="white"
          onClick={() => {
            append();
          }}
        >
          Add new room
        </Button>
    </div>
  );
}
