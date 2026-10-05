import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GiftApp from "./components/GiftApp/GiftApp";
// import { Counter } from "./components/Counter/Counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GiftApp />
  </StrictMode>,
);
