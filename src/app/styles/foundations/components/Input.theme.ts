const Input = {
  defaultProps: {
    variant: "outline",
  },
  baseStyle: {},
  variants: {
    outline: {
      field: {
        borderRadius: "sm",
        borderColor: "gray.400",
        bgColor: "contrast.200",
        color: "primary.1100",
        _placeholder: {
          color: "gray.400",
        },
        _focus: {
          borderColor: "primary.500",
          boxShadow: "none",
        },
        _hover: { borderColor: "primary.400", boxShadow: "none" },
        _invalid: {
          borderColor: "red.500",
          boxShadow: "none",
        },
      },
    },
    flushed: {
      field: {
        borderBottomWidth: 2,
        _focus: {
          borderColor: "primary.500",
          boxShadow: "none",
        },
        _invalid: {
          borderColor: "red.400",
          boxShadow: "none",
        },
      },
    },
  },
};

export default Input;
