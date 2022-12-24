import * as React from "react";
import ReactDOM from "react-dom/client";
import { apiSlice } from "./features/api/apiSlice";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
