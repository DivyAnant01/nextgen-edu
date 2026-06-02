import React from "react";
import ReactDOM from "react-dom/client";

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

   <AuthProvider>

  <CompareProvider>

    <WishlistProvider>

      <App />

    </WishlistProvider>

  </CompareProvider>

</AuthProvider>

  </React.StrictMode>
);