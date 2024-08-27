import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
