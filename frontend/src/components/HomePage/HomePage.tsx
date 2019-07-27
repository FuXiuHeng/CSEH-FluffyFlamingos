import React from 'react';
import './HomePage.css';
import StudentDiscovery from './StudentDiscovery';
import { Button, Typography } from '@material-ui/core';
import { Students } from './Students';
import { EventItem } from './EventItemHome';
import history from '.././../history';

interface Props {}
interface State {}

class HomePage extends React.Component<Props, State> {
	state: State = {};

	private readonly handleSponsorClick = () => {
		history.push('/studentPage')
	}

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
							<Button variant="contained" color="secondary" onClick={this.handleSponsorClick}>
								<text style={{ fontSize: 22, fontWeight: 'bold' }}>Sponsor Now</text>
							</Button>
						</div>
					</div>
				</div>
				<div className="Sections">
					<div className="Home">
						<div className="Discovery">
							<p className="TitleWord">Discovery</p>
							<StudentDiscovery />
							<StudentDiscovery inverted />
						</div>

						<p className="TitleWord">Similiar Students:</p>
						<div className="Students">
							<Students />
							<Students />
							<Students />
						</div>
					</div>
					<div className="Events">
						<div className="EventTab">
							<Typography variant="body1">
								<b className="EventWord">Events</b>
							</Typography>
							<div className="EventBody">
								<EventItem
									label="Cultural Exchange Program"
									date="7 August 2019"
									variant="cultural"
								/>
								<EventItem
									label="Seed of Kindness Workshop"
									date="5 October 2019"
									variant="kindness"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
