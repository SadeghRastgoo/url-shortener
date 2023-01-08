import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        background: "#0E1012",
      },
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: "#f2f2f2 ",
        _dark: "#0E1012",
      },
      secondary: {
        default: "#8953e0",
        _dark: "#8953e0",
      },
    },
  },
});

export default theme;
