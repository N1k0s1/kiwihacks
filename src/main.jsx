import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.jsx";
import DateChangePage from "./DateChangePage/DateChangePage.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import CodeOfConduct from "./CodeOfConduct/CodeOfConduct.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const pathname = window.location.pathname.toLowerCase();
let PageComponent;

if (pathname === "/" || pathname === "") {
  PageComponent = App;
} else if (pathname === "/date-change") {
  PageComponent = DateChangePage;
} else if (pathname === "/code-of-conduct" || pathname === "/coc") {
  PageComponent = NotFound; /*should be CodeOfConduct, but the page is not ready yet*/
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
