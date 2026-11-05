
import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import App from "./App.jsx";
import Research001 from "./Research001.jsx";

const isResearchPage =
  window.location.pathname.replace(/\/+$/, "") === "/research/001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isResearchPage ? <Research001 /> : <App />}
    <Analytics />
  </React.StrictMode>
);
