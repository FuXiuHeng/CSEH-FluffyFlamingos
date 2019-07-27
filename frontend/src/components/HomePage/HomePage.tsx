import React from 'react';
import './HomePage.css';
import StudentDiscovery from './StudentDiscovery';
import { Button } from '@material-ui/core';
import { Students } from './Students';

interface Props {}
interface State {}

class HomePage extends React.Component<Props, State> {
	state: State = {};
	render() {
		const { state, props } = this;
		return (
			<div className="HomePage">
				<div className="Header">
					<div className="Mission">
						<h1 style={{ fontSize: 66, fontWeight: 'bold' }}>Make A Difference</h1>
						<text style={{ fontSize: 36 }}>
							Help shape the future by donating towards youth education.
						</text>
						<div className="ButStyles">
							<Button variant="contained" color="secondary">
								<text style={{ fontSize: 22, fontWeight: 'bold' }}>Donate Now</text>
							</Button>
						</div>
					</div>
				</div>
				<div className="Sections">
					<div className="Home">
						<div className="Discovery">
							<StudentDiscovery />
							<StudentDiscovery inverted />
						</div>

						<div className="Students">
							<Students />
							<Students />
							<Students />
						</div>
					</div>
					<div className="Events">Events</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
