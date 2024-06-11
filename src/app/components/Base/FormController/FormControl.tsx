import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { FormControlProps } from "src/app/services/types";


export default function FormControl({
  children,
  name,
  label,
  helperText,
  customError,
  validate,
  labelProps,
  ...rest
}: FormControlProps) {
  const [, { error, touched }] = useField({ name, validate });

  return (
    <ChakraFormControl isInvalid={!!error && touched} {...rest}>
      {label && (
        <FormLabel htmlFor={name} {...labelProps} w="full" bg="red">
          {label}
        </FormLabel>
      )}
      {children}
      {error && customError ? (
        customError(error)
      ) : (
        <FormErrorMessage textAlign="start">{error}</FormErrorMessage>
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </ChakraFormControl>
  );
}
