import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import './StudentHomePage.css';

import { styles } from './styles';

export interface StudentHomePageProps extends WithStyles<typeof styles> {}
export interface StudentHomePageState {}

class PureStudentHomePage extends React.Component<StudentHomePageProps, StudentHomePageState> {
	state: StudentHomePageState = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.mainPanel}>
					123
				</div>
				<div className={classes.sidePanel}>
					456
				</div>
			</div>
		);
	}
}

export const StudentHomePage = withStyles(styles)(PureStudentHomePage);
