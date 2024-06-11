import {
  Flex,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useField } from "formik";
import dynamic from "next/dynamic";
import React from "react";
import { InputProps } from "src/app/services/types";
import FormControl from "../FormController/FormControl";


export default function InputControl({
  name,
  label,
  labelProps,
  inputProps,
  inputGroupProps,
  inputLeftAddon,
  inputLeftElement,
  inputRightAddon,
  inputRightElement,
  inputRightElementZIndex,
  bColor = "gray.400",
  ...rest
}: InputProps) {
  const [field] = useField(name);

  return (
    <FormControl name={name} {...rest}>
      <Flex direction="column">
        {typeof label === "string" ? (
          <FormLabel
            fontSize="xs"
            fontWeight="400"
            htmlFor={name}
            color="primary.1100"
            // width="fit-content"
            background="contrast.200"
            {...labelProps}
          >
            {label}
          </FormLabel>
        ) : (
          label
        )}
        <InputGroup {...inputGroupProps}>
          {inputLeftElement && (
            <InputLeftElement pointerEvents="none" color={"gray.700"}>
              {inputLeftElement}
            </InputLeftElement>
          )}
          {inputLeftAddon && (
            <InputLeftAddon color={field.value ? "contrast.200" : "gray.700"}>
              {inputLeftAddon}
            </InputLeftAddon>
          )}
          <ChakraInput
            {...field}
            id={name}
            aria-label={name}
            autoComplete="off"
            {...inputProps}
            borderWidth={0.5}
            borderStyle="solid"
            borderRadius="base"
            borderColor={bColor}
            color="black.600"
            _hover={{
              borderColor: "blue.100",
            }}
            _focusVisible={{
              borderColor: "blue.100",
            }}
          />
          {inputRightAddon && (
            <InputRightAddon color={field.value ? "contrast.200" : "gray.700"}>
              {inputRightAddon}
            </InputRightAddon>
          )}
          {inputRightElement && (
            <InputRightElement
              color={field.value ? "contrast.200" : "gray.700"}
              zIndex={inputRightElementZIndex}
            >
              {inputRightElement}
            </InputRightElement>
          )}
        </InputGroup>
      </Flex>
    </FormControl>
  );
}

// export const Input = ChakraInput
