import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/globals.css";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ApplicationProvider } from "./context/ApplicationContext";
import { CompareProvider } from "./context/CompareContext";
import { WishlistProvider } from "./context/WishlistContext";

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

              <Toaster
                position="top-right"
                reverseOrder={false}
              />

            </WishlistProvider>

          </CompareProvider>

        </ApplicationProvider>

      </AuthProvider>

    </ThemeProvider>

  </React.StrictMode>
);