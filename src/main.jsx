import React from "react";
import ReactDOM from "react-dom/client";

import {
  ApplicationProvider,
} from "./context/ApplicationContext";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import App from "./App";
import {
  AuthProvider,
} from "./context/AuthContext";

import "./styles/globals.css";

import {
  CompareProvider,
} from "./context/CompareContext";

import {
  WishlistProvider,
} from "./context/WishlistContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

   <ThemeProvider>

  <AuthProvider>

  <ApplicationProvider>

    <CompareProvider>

      <WishlistProvider>

        <App />

      </WishlistProvider>

    </CompareProvider>

  </ApplicationProvider>

</AuthProvider>

</ThemeProvider>
  </React.StrictMode>
);