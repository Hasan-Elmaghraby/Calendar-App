import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../src/theme/index.scss";
import { BrowserRouter } from "react-router-dom";
import { CalendarContextProvider } from "./shared/context/CalendarContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CalendarContextProvider>
        <App />
      </CalendarContextProvider>
    </BrowserRouter>
  </StrictMode>
);
