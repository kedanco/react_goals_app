import React from "react";

class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<div className="App-title">
					<h1>React Goals App</h1>
					<h4 className="App-intro">
						Create, Discover and Track Goals and Milestones!
					</h4>
				</div>
				<nav className="navigation">
					<button onClick={() => this.props.changePage(1)}> Your Goals </button>
					<button onClick={() => this.props.changePage(2)}> Explore </button>
					<button onClick={() => this.props.changePage(3)}> About </button>
				</nav>
			</div>
		);
	}
}

export default Header;
