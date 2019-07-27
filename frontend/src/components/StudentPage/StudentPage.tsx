import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography, Tabs, Tab } from '@material-ui/core';

import { styles } from './styles';
import student from './student.jpg';

export interface StudentPageProps extends WithStyles<typeof styles> {}
export interface StudentPageState {}

class PureStudentPage extends React.Component<StudentPageProps, StudentPageState> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.studentCard}>
					<div className={classes.photoContainer}>
						<img className={classes.studentPhoto} src={student} alt="student" />
					</div>
					<div className={classes.studentNameContainer}>
						<div className={classes.studentName}>
							<Typography variant="h2">Sabrina Soon</Typography>
							<Typography variant="h4">
								I am a Year 5 student in Malaysia who likes reading and coding!
							</Typography>
						</div>
					</div>
				</div>
				<div>
					{/* <Tabs
						value={value}
						indicatorColor="primary"
						textColor="primary"
						onChange={handleChange}
						aria-label="disabled tabs example"
					>
						<Tab label="Active" />
						<Tab label="Disabled" disabled />
						<Tab label="Active" />
					</Tabs> */}
				</div>
			</div>
		);
	}
}

export const StudentPage = withStyles(styles)(PureStudentPage);
