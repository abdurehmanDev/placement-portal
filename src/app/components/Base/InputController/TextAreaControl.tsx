import { BoxProps, Flex, Text, Textarea } from "@chakra-ui/react";
import { useField } from "formik";
import dynamic from "next/dynamic";
import React from "react";


import FormControl from "../FormController/FormControl";
import { TextAreaControlProps } from "src/app/services/types";

export default function TextAreaControl({
  name,
  label,
  labelProps,
  inputProps,
  ...rest
}: TextAreaControlProps & BoxProps) {
  const [field] = useField(name);
  return (
    <FormControl name={name} {...rest}>
      <Flex direction="column">
        <Text
          fontSize="xs"
          fontWeight="400"
          color="gray.800"
          width="fit-content"
          background="contrast.200"
          mb="8px"
          {...labelProps}
        >
          {label}
        </Text>
        <Textarea
          {...field}
          id={name}
          aria-label={name}
          autoComplete="off"
          {...inputProps}
          border="1px solid"
          borderColor="gray.400"
          _focusVisible={{
            borderColor: "blue.100",
          }}
          _hover={{
            borderColor: "blue.100",
          }}
          _placeholder={
            inputProps?.placeholder
              ? {
                  color: "gray.50",
                }
              : undefined
          }
        />
      </Flex>
    </FormControl>
  );
}
