import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import Button from "./foundations/components/Button.theme";
import Input from "./foundations/components/Input.theme";
import Radio from "./foundations/components/Radio.theme";
import { SelectBox } from "./foundations/components/SelectBox.theme";
import shadows from "./foundations/shadows";
import textStyles from "./foundations/textStyles";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    // heading: "Noto Sans sans-serif",
    // body: `'Noto Sans', 'sans-serif'`,
  },
  shadows,
  lineHeights: {
    base: 1.2,
  },

  border: {},
  colors,
  accordianStyles: {},
  styles,
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1536px",
  },
  textStyles,
  components: {
    Button,
    Radio,
    Input,
    Select: SelectBox,
  },
});

export default theme;
