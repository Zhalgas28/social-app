import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function rerenderEntrieTree(state) {
	root.render(
		<BrowserRouter>
			<App state={state} dispatch={store.dispatch.bind(store)}/>
		</BrowserRouter>
	);
}

rerenderEntrieTree(store.getState())

store.subscriber(rerenderEntrieTree)
