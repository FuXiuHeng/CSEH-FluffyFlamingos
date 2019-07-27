import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import videoImg from './video.png';
import studentImg from '../../resources/1Photo.jpg';
import { styles } from './styles';

export interface OverviewStudentPageProps extends WithStyles<typeof styles> {}
export interface OverviewStudentPageState {}

class PureOverviewStudentPage extends React.Component<
	OverviewStudentPageProps,
	OverviewStudentPageState
> {
	render() {
		const { classes } = this.props;
		const data = require('../../HomePage/Students/studentsData/1Data.json');
		return (
			<div className={classes.root}>
				<div className={classes.topPanel}>
					<div>
						<Typography className={classes.header} variant="body1">
							<b>More about myself</b>
						</Typography>
						<Typography variant="body1">
							Age: {data.age}
							<br />
							Live in: {data.location}
							<br />
							My favourite subject: {data.favSubject}
							<br />
							Aspiration: {data.aspirations}
							<br />
							Hobby: {data.hobby}
							<br />
						</Typography>
					</div>
					<div className={classes.imageContainer}>
						<img className={classes.studentImage} src={studentImg} alt="" />
						<img className={classes.overlayImage} src={videoImg} alt="" />
					</div>
				</div>
				<br />
				<Typography>
					I want to study further to level up my studies in order to strive for a better
					future for my family Due to unstable financial conditions, I had to drop my
					education at the age of 17. With 4 children in the household, my parents are not
					able to afford higher education for all of us. I also helped my parents work in
					the restaurant to earn more income and help the family.
				</Typography>
				<Typography className={classes.header} variant="body1">
					<b>How the Scholarship helps Sabrina</b>
				</Typography>
				<Typography variant="body1">
					The raised funds will help secure a scholarship for Sabrina to empower her to
					attain a better future. This scholarship will be used to enroll her into the
					University of Malaysia, who has partnered with us in the scholarship program.
				</Typography>
			</div>
		);
	}
}

export const OverviewStudentPage = withStyles(styles)(PureOverviewStudentPage);
