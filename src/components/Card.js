import React from "react";

class Card extends React.Component {
	render() {
		return (
			<div className="goal-card">
				<div className="card-image">
					<img src="../img/landscape-aerial-view-4k.jpg" alt="goal image" />
				</div>
				<div className="card-body">
					<h2 className="card-title">Goal 1</h2>
					<div className="card-text">
						Enjoyable, fun and memorable experience. Ex dolore dolor fugiat ad
						proident irure dolore officia nostrud amet duis sit veniam sit.
						Dolor enim amet sint mollit sunt nulla consectetur duis pariatur
						nulla cupidatat. Amet officia magna et esse dolor magna consectetur
						eu.
					</div>
				</div>
				<div className="card-footer" />
			</div>
		);
	}
}

export default Card;
