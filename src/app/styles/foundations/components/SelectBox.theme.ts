import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const solid = definePartsStyle({
  field: {
    background: "contrast.200",
    border: "1px solid",
    borderColor: "gray.400",
    color: "primary.1100",
    borderRadius: "base",
  },
  Option: {
    background: "contrast.200",
  },
  icon: {
    color: "primary.1100",
    ml: 1,
  },
});
const sm = defineStyle({
  fontSize: "sm",
  fontWeight: "normal",
  px: "2",
  py: "2",
});

const sizes = {
  sm: definePartsStyle({ field: sm }),
};
export const SelectBox = defineMultiStyleConfig({ variants: { solid }, sizes });
