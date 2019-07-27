import React from 'react';
import './StudentHomePage.css';

export interface Props {}
export interface State {}

class StudentHomePage extends React.Component<Props, State> {
	state: State = {};

	render() {
		// const { state, props } = this;
		return (
			<div className="StudentHomePage">
				<div className="mainPanel">
					<p>Share your progress!</p>
					<p>Let your sponsors know!</p>
					<div className="post">

					</div>
				</div>
				<div className="sidePanel">
					Side
				</div>
			</div>
		);
	}
}

export default StudentHomePage;
