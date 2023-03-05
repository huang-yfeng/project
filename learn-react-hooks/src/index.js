import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store"
import App from "./App";

import 'antd/dist/antd.css'

const continent = document.getElementById('root')
const root = createRoot(continent);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)   