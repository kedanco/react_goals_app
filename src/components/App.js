import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Header from "./Header.js";
import Masonry from "react-mason";
import About from "./About.js";

class App extends Component {
	state = {
		users: {},
		goals: {}
	};

	render() {
		return (
			<div className="App">
				<Header />

				<div className="content">
					<About />
				</div>
			</div>
		);
	}
}

export default App;
