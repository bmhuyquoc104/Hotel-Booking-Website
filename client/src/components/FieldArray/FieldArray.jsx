import React from "react";
import { useFieldArray } from "react-hook-form";
import Flex from "@/components/containers/Flex/Flex";
import NestedArray from "./NestedFieldArray";
import Label from "@/components/Label/Label";
import Button from "@/components/Button/Button";

export default function Fields({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "utilities",
  });

  return (
    <div className="rules">
      <Flex direction="column">
        {fields.map((item, index) => {
          return (
            <Flex gap="0.5em" direction="column" width="100%" key={item.id}>
              <Label
                color="var(--text_color)"
                fs="0.675rem"
                fw="300"
                text="Type"
              />
              <Flex width = "fit-content" >
              <input {...register(`utilities.${index}.type`)} />

              </Flex>
              <NestedArray
                nestIndex={index}
                {...{ control, register, errors }}
              />

              <Button
                border="1px solid black"
                br="3px"
                bg="white"
                color="black"
                padding="0.5em 0.75em"
                m="0 0 1.5em 0"
                type="button"
                onClick={() => remove(index)}
              >
                Delete Utility
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
        m="0 0 0.5em 0"
        color="white"
        onClick={() => {
          append();
        }}
      >
        Add new utility
      </Button>
    </div>
  );
}
