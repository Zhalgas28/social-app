import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store'
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function rerenderEntrieTree(state) {
	root.render(
		<BrowserRouter>
			<App store={store}/>
		</BrowserRouter>
	);
}

rerenderEntrieTree(store.getState())

store.subscribe(() => {
	let state = store.getState() 
	rerenderEntrieTree(state)}
)
