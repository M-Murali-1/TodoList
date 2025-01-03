import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { StateChangeContext } from "./Components/StateChangeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     <StateChangeContext>
      <App />
      </StateChangeContext>
    </BrowserRouter>
  </StrictMode>
);
