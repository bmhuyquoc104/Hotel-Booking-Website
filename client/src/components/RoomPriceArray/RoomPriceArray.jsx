import React from "react";
import { useFieldArray } from "react-hook-form";
import Flex from "@/components/containers/Flex/Flex";
import RoomPriceDateArray from "./RoomPriceDateArray";
import Label from "@/components/Label/Label";
import Button from "@/components/Button/Button";

export default function RoomPriceArray({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "roomsList",
  });

  return (
    <div className="rules">
      <Flex width="100%" direction="column">
        {fields.map((item, index) => {
          return (
            <Flex gap="0.5em" direction="column" width="100%" key={item.id}>
              <Flex wrap="wrap" jc="space-between" width="100%">
                <Flex gap="0.5em" direction="column" width="260px">
                  <Label
                    color="var(--text_color)"
                    fs="0.875rem"
                    htmlFor="id"
                    fw="700"
                    text="Room id"
                  />
                  <input
                    {...register(`roomsList.${index}.id`, {
                      valueAsNumber: true,
                    })}
                    id="id"
                    type="text"
                  />
                </Flex>
                <Flex gap="0.5em" direction="column" width="260px">
                  <Label
                    color="var(--text_color)"
                    fs="0.875rem"
                    htmlFor="name"
                    fw="700"
                    text="Room Name"
                  />
                  <input
                    {...register(`roomsList.${index}.name`)}
                    id="name"
                    type="text"
                  />
                </Flex>
                <Flex gap="0.5em" direction="column" width="260px">
                  <Label
                    color="var(--text_color)"
                    fs="0.875rem"
                    htmlFor="defaultPrice"
                    fw="700"
                    text="Original Price"
                  />
                  <input
                    {...register(`roomsList.${index}.defaultPrice`, {
                      valueAsNumber: true,
                    })}
                    id="defaultPrice"
                    type="text"
                  />
                </Flex>
                <Flex gap="0.5em" direction="column" width="260px">
                  <Label
                    color="var(--text_color)"
                    fs="0.875rem"
                    htmlFor="roomInStock"
                    fw="700"
                    text="Available Rooms"
                  />
                  <input
                    {...register(`roomsList.${index}.roomInStock`, {
                      valueAsNumber: true,
                    })}
                    id="roomInStock"
                    type="text"
                  />
                </Flex>
                <RoomPriceDateArray
                  nestIndex={index}
                  {...{ control, register, errors }}
                />
              </Flex>

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
                Delete Room Discount
              </Button>
            </Flex>
          );
        })}
      </Flex>
      <Button
        type="button"
        br="2px"
        width="200px"
        bg="#9d9d9d"
        padding="1em 1.25em"
        m="0 0 1em 0"
        color="white"
        onClick={() => {
          append({
            id: "",
            name: "",
            defaultPrice: "",
            roomInStock: "",
            discounts: [],
          });
        }}
      >
        Add new discount
      </Button>
    </div>
  );
}
