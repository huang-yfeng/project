import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";

const continent=document.getElementById('root')
const root=createRoot(continent);

root.render(
    <App/>
)