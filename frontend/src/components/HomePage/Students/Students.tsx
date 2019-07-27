import React from 'react';
import './styles.ts';
import { WithStyles } from '@material-ui/styles';
import { styles } from './styles';
import { withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';
import {
	AccountCircle,
	LocationOn,
	School,
	AttachMoney,
	Cake,
	ImportContacts,
	LocalLibrary,
} from '@material-ui/icons';
import history from '../../../history';

interface Props extends WithStyles<typeof styles> {
	studentId: number;
}
export interface State {}

class PureStudents extends React.Component<Props, State> {
	state: State = {};

	private readonly handleOnClick = () => {
		history.push('/studentPage');
	};

	render() {
		const { state, props } = this;
		const { classes } = props;
		const data = require(`./studentsData/${props.studentId}Data.json`);

		return (
			<div className={classes.students}>
				<img
					src={require(`../../resources/${props.studentId}Photo.jpg`)}
					onClick={this.handleOnClick}
					className={classes.ImgStyles}
				/>
				<Button
					className={classes.button}
					variant="contained"
					color="secondary"
					onClick={this.handleOnClick}
				>
					Find out more
				</Button>
				<div className={classes.profileLayout}>
					<div className={classes.profile}>
						<AccountCircle className={classes.icon} color="primary" />
						<Typography variant="body1" className={classes.Content}>
							{data.name}
						</Typography>
					</div>
					<div className={classes.profile}>
						<Cake className={classes.icon} color="primary" />
						<Typography variant="body1" className={classes.Content}>
							{data.age}
						</Typography>
					</div>
					<div className={classes.profile}>
						<LocationOn className={classes.icon} color="primary" />
						<Typography variant="body1" className={classes.Content}>
							{data.location}
						</Typography>
					</div>
					<div className={classes.profile}>
						<LocalLibrary className={classes.icon} color="primary" />
						<Typography variant="body1" className={classes.Content}>
							{data.aspirations}
						</Typography>
					</div>
					<div className={classes.profile}>
						<ImportContacts className={classes.icon} color="primary" />
						<Typography variant="body1" className={classes.Content}>
							{data.favSubject}
						</Typography>
					</div>
					<div className={classes.profile}>
						<AttachMoney className={classes.icon} color="primary" />
						<Typography variant="body1" className={classes.Content}>
							{data.price}
						</Typography>
					</div>
					<div className={classes.profile}>
						<School className={classes.icon} color="primary" />
						<p className={classes.Content}>{data.purpose}</p>
					</div>
				</div>
			</div>
		);
	}
}

export const Students = withStyles(styles)(PureStudents);
