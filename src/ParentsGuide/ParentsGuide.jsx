import { useMemo } from "react";
import { marked } from "marked";
import Navbar from "../Navbar/Navbar";
import markdownContent from "./parents-guide.md?raw";
import "./ParentsGuide.css";

export default function ParentsGuide() {
  const html = useMemo(() => {
    let parsed = marked.parse(markdownContent);
    // Strip {#id} anchor syntax that marked doesn't handle, and apply as id
    parsed = parsed.replace(
      /<h([1-6])>(.*?)\s*\{#([^}]+)\}\s*<\/h\1>/g,
      '<h$1 id="$3">$2</h$1>'
    );
    // Remove empty heading tags
    parsed = parsed.replace(/<h[1-6]>\s*<\/h[1-6]>/g, "");
    return parsed;
  }, []);

  return (
    <>
      <Navbar />

      <main className="pg-main">
        <section className="pg-card">
          <div
            className="pg-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="pg-cta-row">
            <a className="pg-primary-cta" href="/">
              <b>Back to Home</b>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
