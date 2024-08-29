import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home.jsx";
import Labels from "./pages/labels.jsx";
import AddProvider from "@context/AddContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labels" element={<Labels />} />
        </Routes>
      </BrowserRouter>
    </AddProvider>
  </React.StrictMode>
);
