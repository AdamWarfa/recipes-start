import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./index.css";
import AuthProvider from "./security/AuthProvider";

//Observe the "!"" below, which tells TypeScript that you are certain document.getElementById("root")
//will not return null,
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HashRouter basename="/recipes-start">
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
