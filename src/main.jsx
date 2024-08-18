import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home.jsx";
import AddProvider from "@context/AddContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddProvider>
      <Home />
    </AddProvider>
  </React.StrictMode>
);
