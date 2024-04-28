import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const Radio = {
  defaultProps: {
    size: "lg",
    colorScheme: "primary",
  },
  sizes: {
    lg: {
      label: {
        fontSize: "sm",
      },
    },
  },
  baseStyle: (props: StyleFunctionProps) => {
    const { colorScheme: c } = props;

    if (c === "primary") {
      const primaryColor = c + ".500";

      return {
        container: {
          cursor: "pointer",
        },
        control: {
          border: "2px solid",
          borderColor: "gray.400",
          cursor: "pointer",

          _focus: {
            boxShadow: "none",
            background: "contrast.200",
          },
          _checked: {
            borderColor: primaryColor,
            background: "contrast.200",
            color: primaryColor,
            _hover: {
              background: "primary.300",
              borderColor: primaryColor,
            },
            _disabled: {
              borderColor: "gray.700",
              background: "gray.800",
              color: "gray.700",
            },
          },
          _disabled: {
            borderColor: "gray.700",
            background: "gray.800",
            color: "gray.700",
          },
        },
      };
    }
  },
  variants: {
    filled: {
      container: {
        p: 5,
        borderRadius: "md",
      },
      control: {
        me: 4,
      },
    },
    base: {
      container: {
        p: 1,
        borderRadius: "md",
        _hover: {
          bg: "transparent",
        },
        bg: "transparent",
      },
      control: {
        me: 4,
      },
    },
  },
};

export default Radio;
