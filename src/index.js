import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import Home from "./components/homepage";

const App = () => {
	const [coinData, setCoinData] = useState([]);
	const [stroke, setStroke] = useState("#44619d");
	const [darkModeState, setDarkModeState, toggleMode] = useDarkMode(false);

	useEffect(() => {
		const body = document.querySelector("body");

		if (darkModeState) {
			body.classList.add("dark-mode");
			setStroke("#e09466");
		} else {
			body.classList.remove("dark-mode");
			setStroke("#44619d");
		}
	}, [darkModeState]);

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
			)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<Router>
			<div className="App">
				<Navbar toggleMode={toggleMode} darkModeState={darkModeState} />
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/charts">
					<Charts coinData={coinData} stroke={stroke} />
				</Route>
			</div>
		</Router>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
