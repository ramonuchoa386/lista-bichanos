import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
