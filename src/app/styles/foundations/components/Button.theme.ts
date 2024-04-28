import { StyleFunctionProps } from "@chakra-ui/theme-tools";
const Button = {
  defaultProps: {},
  baseStyle: {
    lineHeight: 1,
    fontWeight: "bold",
    rounded: "2px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "transparent",
    _focus: {
      boxShadow: "none",
    },
    _hover: {
      color: "contrast.200",
      background: "primary.800",
    },
  },
  variants: {
    outline: (props: StyleFunctionProps) => {
      const { colorScheme: c } = props;
      if (c === "primary") {
        const primaryColor = c + ".500";
        return {
          border: "2px solid",
          borderColor: primaryColor,
          color: primaryColor,
          _hover: {
            bg: "primary.300",
            color: `${c}.100`,
            _disabled: {
              borderColor: "gray.700",
              color: "gray.700",
            },
          },
          _focus: {
            bg: "pineapple.700",
            color: primaryColor,
          },
          _disabled: {
            borderColor: `${c}.800`,
            color: "contrast.200",
            opacity: "1",
          },
        };
      }
    },
    solid: () => {
      return {
        bg: "primary.500",
        color: "contrast.200",
        _hover: {
          bg: `primary.700`,
          color: "contrast.100",
          _disabled: {
            bg: `primary.1000`,
            color: "gray.200",
          },
        },
        _focus: {
          border: "2px solid",
          borderColor: `primary.800`,
          bg: `primary.800`,
        },
        _active: {
          border: "2px solid",
          borderColor: `primary.800`,
          bg: `primary.800`,
        },
        _disabled: {
          bg: `800`,
          color: "contrast.200",
          opacity: "1",
        },
      };
    },
    // these button are not in use for now will be uncommented in future if needed
    // ghost: (props: StyleFunctionProps) => {
    //   const { colorScheme: c } = props
    //   if (c === "primary") {
    //     const primaryColor = c + ".500"
    //     return {
    //       color: primaryColor,
    //       _hover: {
    //         bg: "gray.800",
    //         _disabled: {
    //           color: "gray.700",
    //         },
    //       },
    //       _focus: {
    //         bg: "pineapple.800",
    //       },
    //       _disabled: {
    //         color: "gray.700",
    //         opacity: "1",
    //       },
    //     }
    //   }
    // },
    // link: (props: StyleFunctionProps) => {
    //   const { colorScheme: c } = props
    //   if (c === "primary") {
    //     const primaryColor = c + ".500"
    //     return {
    //       color: primaryColor,
    //       textDecoration: "underline",
    //       textUnderlineOffset: "2px",
    //       _hover: {
    //         textDecoration: "none",
    //         _disabled: {
    //           color: "gray.700",
    //         },
    //       },
    //       _focus: {
    //         bg: "pineapple.800",
    //       },
    //       _disabled: {
    //         color: "gray.700",
    //         opacity: "1",
    //       },
    //     }
    //   }
    // },
    // linkwhite: () => {
    //   const primaryColor = "gray.400"
    //   return {
    //     color: primaryColor,
    //     textDecoration: "underline",
    //     textUnderlineOffset: "2px",
    //     _hover: {
    //       color: "gray.400",
    //       textDecoration: "none",
    //     },
    //     _focus: {
    //       color: "gray.400",
    //     },
    //     _disabled: {
    //       color: "gray.700",
    //       opacity: "1",
    //     },
    //   }
    // },
  },
  sizes: {
    xl: {
      fontSize: "2xl",
      h: 12,
      w: 12,
      px: 8,
    },
  },
};
export default Button;
