import React from "react";

class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<div class="App-title">
					<h1>React Goals App</h1>
					<h4 class="App-intro">
						Create, Discover and Track Goals and Milestones!
					</h4>
				</div>
				<nav class="navigation">
					<button onClick={() => this.props.changePage(1)}> Your Goals </button>
					<button onClick={() => this.props.changePage(2)}> Explore </button>
					<button onClick={() => this.props.changePage(3)}> About </button>
				</nav>
			</div>
		);
	}
}

export default Header;
