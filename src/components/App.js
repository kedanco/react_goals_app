import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Header from "./Header.js";
import Masonry from "react-mason";
import About from "./About.js";
import Card from "./Card.js";

class App extends Component {
	state = {
		users: {},
		goals: {},
		nav: 1
	};

	changePage = num => {
		let nav = this.state.nav;
		nav = num;
		this.setState({ nav });
	};

	render() {
		return (
			<div className="App">
				<Header changePage={this.changePage} />

				<div className="content">
					{(() => {
						switch (this.state.nav) {
							case 1:
								return <Card />;
							case 2:
								return <div>Explore</div>;
							case 3:
								return <About />;
						}
					})()}
				</div>
			</div>
		);
	}
}

export default App;
