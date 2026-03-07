import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DateChangePage from "./DateChangePage.jsx";
import NotFound from "./NotFound.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const pathname = window.location.pathname.toLowerCase();
let PageComponent;

if (pathname === "/" || pathname === "") {
  PageComponent = App;
} else if (pathname.startsWith("/date-change")) {
  PageComponent = DateChangePage;
} else {
  PageComponent = NotFound;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpeedInsights />
    <Analytics />
    <PageComponent />
  </StrictMode>,
);
