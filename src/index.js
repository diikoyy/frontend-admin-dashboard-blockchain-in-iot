import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import React from "react";
import {render} from 'react-dom'

// import ReactDOM from "react-dom/client";


// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = document.getElementById('root')
render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</React.StrictMode>,
	root
);
