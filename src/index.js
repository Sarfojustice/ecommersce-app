import { createRoot } from "react-dom/client";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const root = createRoot(document.getElementById("root"));

// Render the App
root.render(<App />);