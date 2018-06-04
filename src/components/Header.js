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
					<button> Your Goals </button>
					<button> Explore </button>
					<button> About </button>
				</nav>
			</div>
		);
	}
}

export default Header;
