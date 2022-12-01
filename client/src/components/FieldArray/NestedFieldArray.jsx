import React from "react";
import { useFieldArray } from "react-hook-form";
import Label from "@/components/Label/Label";
import Flex from "@/components/containers/Flex/Flex";
import { BsTrashFill } from "react-icons/bs";
import Button from "@/components/Button/Button";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `utilities[${nestIndex}].features`,
  });

  return (
    <Flex width = "100%" direction="column" gap="0.5em">
      <Flex jc="space-between" ai="center" width="100%">
        <Label
          color="var(--text_color)"
          fs="0.675rem"
          fw="300"
          text="Features"
        />
        <Button
          border="1px solid transparent"
          br="3px"
          bg="black"
          color="white"
          padding="0.5em 0.75em"
          type="button"
          onClick={() => append("")}
        >
          Add Feature
        </Button>
      </Flex>

      <Flex gap="0.5em" wrap="wrap">
        {fields.map((item, k) => {
          return (
            <Flex ai ="center" width="300px" gap="0.5em" key={item.id}>
              <input
                {...register(`utilities[${nestIndex}].features[${k}]`, {
                  required: true,
                })}
              />
              <Button
                fs="1.25rem"
                color="var(--primary_color)"
                type="button"
                onClick={() => remove(k)}
              >
                <BsTrashFill />
              </Button>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
