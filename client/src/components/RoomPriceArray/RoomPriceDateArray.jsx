import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import Label from "@/components/Label/Label";
import Flex from "@/components/containers/Flex/Flex";
import Button from "@/components/Button/Button";
import { BsTrashFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `roomsList[${nestIndex}].discount`,
  });

  return (
    <Flex width="100%" direction="column" gap="0.5em">
      <Flex jc="space-between" ai="center" width="100%">
        <Label
          color="var(--text_color)"
          fs="0.675rem"
          fw="300"
          text="Discount"
        />
        <Button
          border="1px solid transparent"
          br="3px"
          bg="black"
          color="white"
          padding="0.5em 0.75em"
          type="button"
          onClick={() => append({priceDiscount:"",startDate:"",endDate:""})}
        >
          Add discount
        </Button>
      </Flex>

      <Flex gap="0.75em" wrap="wrap">
        {fields.map((item, k) => {
          return (
            <Flex key={item.id} wrap="wrap" jc="space-between" ai="center">
              <Flex ai="center" wrap="wrap" width="fit-content" gap="0.5em">
                <Flex direction="column" gap="0.5em">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="Price"
                  />
                  <input
                    min={0}
                    type="number"
                    {...register(
                      `roomsList[${nestIndex}].discount[${k}].priceDiscount`,
                      {
                        required: true,
                        valueAsNumber: true,
                      }
                    )}
                  />
                </Flex>
                <Flex direction="column" gap="0.5em">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="Start Date"
                  />
                  <Controller
                    control={control}
                    name={`roomsList[${nestIndex}].discount[${k}].startDate`}
                    render={({ field }) => (
                      <DatePicker
                        className="input"
                        dateFormat="E,dd MMM yyyy"
                        placeholderText="Select date"
                        onChange={(e) => field.onChange(Date.parse(e))}
                        selected={field.value}

                      />
                    )}
                  />
                </Flex>

                <Flex direction="column" gap="0.5em">
                  <Label
                    color="var(--text_color)"
                    fs="0.675rem"
                    fw="300"
                    text="End Date"
                  />
                  <Controller
                    control={control}
                    name={`roomsList[${nestIndex}].discount[${k}].endDate`}
                    render={({ field }) => (
                      <DatePicker
                        className="input"
                        dateFormat="E,dd MMM yyyy"
                        placeholderText="Select date"
                        onChange={(e) => field.onChange(Date.parse(e))}
                        selected={field.value}
                      />
                    )}
                  />
                </Flex>

                <Button
                  fs="1.25rem"
                  color="var(--primary_color)"
                  type="button"
                  onClick={() => remove(k)}
                >
                  <BsTrashFill />
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
