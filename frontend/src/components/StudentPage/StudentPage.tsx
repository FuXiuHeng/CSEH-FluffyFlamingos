import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Button, LinearProgress, Typography, Tabs, Tab } from '@material-ui/core';

import { styles } from './styles1';
import { EventPanel } from './EventPanel';
import { OverviewStudentPage } from './OverviewStudentPage';
import { PostStudentPage } from './PostStudentPage';
import history from '../../history';
import student from '../resources/1Photo.jpg';

export interface StudentPageProps extends WithStyles<typeof styles> {}
export interface StudentPageState {
	value: any;
}

class PureStudentPage extends React.Component<StudentPageProps, StudentPageState> {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
		};
	}

	private readonly handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		console.log(newValue);
		this.setState({
			value: newValue,
		});
	};

	private readonly handleSponsorClick = () => {
		history.push('/sponsorPage');
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.topCard}>
					<div className={classes.studentCard}>
						<div className={classes.photoContainer}>
							<img className={classes.studentPhoto} src={student} alt="student" />
						</div>
						<div className={classes.studentNameContainer}>
							<div className={classes.studentName}>
								<Typography variant="h4">Sabrina Soon</Typography>
								<Typography variant="body1">
									I am a Year 5 student in Malaysia who likes reading and coding!
								</Typography>
							</div>
						</div>
					</div>
					<div className={classes.sponsorCard}>
						<Typography variant="body1">$4000 raised out of:</Typography>
						<Typography variant="h4">$8000</Typography>
						<LinearProgress className={classes.bar} variant="determinate" value={50} />
						<Button
							variant="contained"
							color="secondary"
							onClick={this.handleSponsorClick}
						>
							Sponsor Now
						</Button>
					</div>
				</div>
				<Tabs value={value} onChange={this.handleChange}>
					<Tab label="Overview"></Tab>
					<Tab label="Posts"></Tab>
				</Tabs>
				<div className={classes.bodyPanel}>
					<div className={classes.tabPanel}>
						<div hidden={value !== 0}>
							<OverviewStudentPage />
						</div>
						<div hidden={value !== 1}>
							<PostStudentPage />
						</div>
					</div>
					<div className={classes.eventPanel}>
						<EventPanel />
					</div>
				</div>
			</div>
		);
	}
}

export const StudentPage = withStyles(styles)(PureStudentPage);
