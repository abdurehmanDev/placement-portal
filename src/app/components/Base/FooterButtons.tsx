import { Box, BoxProps, Button } from "@chakra-ui/react";
import React from "react";
import { FooterButtonProps } from "src/app/services/types";


export default function FooterButtons({
  backButton,
  submitButton,
  isSubmitting,
  handleCancelButton,
  backBtnProps,
  submitBtnProps,
  handleNext,
  ...rest
}: FooterButtonProps & BoxProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      {...rest}
    >
      <Button
        _active={{
          bg: "contrast.300",
        }}
        _focus={{
          bg: "contrast.300",
        }}
        _hover={{
          bg: "contrast.300",
        }}
        {...backBtnProps}
        onClick={handleCancelButton}
        textTransform="uppercase"
      >
        {backButton}
      </Button>

      <Button
        disabled={isSubmitting}
        onClick={handleNext}
        _hover={{
          color: "contrast.200",
          bg: "primary.500",
        }}
        _active={{
          color: "contrast.200",
          bg: "primary.500",
        }}
        textTransform="uppercase"
        {...submitBtnProps}
      >
        {submitButton}
      </Button>
    </Box>
  );
}
