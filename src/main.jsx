import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.jsx";
import DateChangePage from "./DateChangePage/DateChangePage.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import CodeOfConduct from "./CodeOfConduct/CodeOfConduct.jsx";
import ForkPreviewPage from "./ForkPreviewPage/ForkPreviewPage.jsx";
import { seoHeadElements } from "./SEO/seoConfig.js";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const isSeoEnabled = String(import.meta.env.VITE_SEO || "false").trim().toLowerCase() === "true";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function removeSeoElements() {
  const seoSelectors = [
    "title",
    'link[rel="canonical"]',
    'meta[name="description"]',
    'meta[name="robots"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
    'meta[name="google-site-verification"]',
    'script[type="application/ld+json"][data-seo="managed"]',
  ];

  seoSelectors.forEach((selector) => {
    document.head.querySelectorAll(selector).forEach((element) => element.remove());
  });
}

function appendHeadElement({ tag, attributes = {}, textContent = "" }) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  if (tag === "script") {
    element.dataset.seo = "managed";
  }

  if (textContent) {
    element.textContent = textContent;
  }

  document.head.appendChild(element);
}

function applySeoSettings(seoEnabled) {
  document.documentElement.lang = "en";
  removeSeoElements();

  if (!seoEnabled) {
    appendHeadElement({
      tag: "title",
      textContent: "KiwiHacks Fork Preview",
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "noindex,nofollow,noarchive,nosnippet,max-image-preview:none",
    });
    return;
  }

  seoHeadElements.forEach(appendHeadElement);
}

applySeoSettings(isSeoEnabled);

const pathname = window.location.pathname.toLowerCase();
let PageComponent;

if (pathname === "/" || pathname === "") {
  PageComponent = App;
} else if (pathname === "/date-change") {
  PageComponent = DateChangePage;
} else if (pathname === "/code-of-conduct" || pathname === "/coc" || pathname === "/codeofconduct" || pathname === "/conduct") {
  PageComponent = CodeOfConduct;
} else {
  PageComponent = NotFound;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpeedInsights /> {/*these get blocked by ad blockers, but they are still useful for development and for users who don't have ad blockers*/}
    <Analytics /> {/*these get blocked by ad blockers, but they are still useful for development and for users who don't have ad blockers*/}
    {isSeoEnabled ? <PageComponent /> : <ForkPreviewPage><PageComponent /></ForkPreviewPage>}
  </StrictMode>,
);
