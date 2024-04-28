import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { InputControlProps } from "src/app/services/types";

export default function InputControl({formId, label, type}: InputControlProps) {
  return (
    <FormControl id={formId} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type={type} />
    </FormControl>
  );
}
