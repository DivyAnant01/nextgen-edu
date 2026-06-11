import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/globals.css";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

import {
  CompareProvider,
} from "./context/CompareContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ThemeProvider>
      <CompareProvider>
      <App />
        
      <Toaster position="top-right" />
      </CompareProvider>
    </ThemeProvider>
  </React.StrictMode>
);