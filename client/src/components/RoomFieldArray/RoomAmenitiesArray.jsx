import React from "react";
import { useFieldArray } from "react-hook-form";
import Label from "@/components/Label/Label";
import Flex from "@/components/containers/Flex/Flex";
import Button from "@/components/Button/Button";
import {BsTrashFill} from "react-icons/bs"

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `roomsList[${nestIndex}].amenities`,
  });

  return (
    <Flex direction="column" gap="0.5em">
      <Flex jc = "space-between" ai="center" width = "100%">
      <Label
        color="var(--text_color)"
        fs="0.675rem"
        fw="300"
        text="Amenities"
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
        Add Amenity
      </Button>
      </Flex>
    
      <Flex gap="0.75em" wrap="wrap">
        {fields.map((item, k) => {
          return (
            <Flex key={item.id} jc="space-between" ai="center">
              <Flex ai ="center" width="max-content" gap="0.5em" >
                <input
                  {...register(`roomsList[${nestIndex}].amenities[${k}]`, {
                    required: true,
                  })}
                />
                <Button
                  fs = "1.25rem"
                  color="var(--primary_color)"
                  type="button"
                  onClick={() => remove(k)}
                >
                 <BsTrashFill/>
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>

     
    </Flex>
  );
};
