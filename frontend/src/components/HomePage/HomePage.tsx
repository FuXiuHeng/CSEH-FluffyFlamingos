import React from 'react';
import './HomePage.css';
import StudentDiscovery from './StudentDiscovery';
import { Button } from '@material-ui/core';
export interface Props {}
export interface State {}

class HomePage extends React.Component<Props, State> {
	state: State = {};
	render() {
		const { state, props } = this;
		return (
			<div className="HomePage">
				<div className="Header">
					<div className="Mission">
						<div className="Content">
							<h1>Mission</h1>
							<text>jsjdnlkfsdngvldf</text>
						</div>
						<Button className="ButStyles">Sponser Now</Button>
					</div>
				</div>
				<div className="Sections">
					<div className="Home">
						<div className="Discovery">
							<StudentDiscovery />
						</div>
						<div className="Students">Students</div>
					</div>
					<div className="Events">Events</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
