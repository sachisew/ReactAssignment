import { AuthProvider } from "./context/AuthContext";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
