import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import App from "./App";
import "@fontsource/inter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DarkMode>
        <App />
      </DarkMode>
    </ChakraProvider>
  </React.StrictMode>
);
