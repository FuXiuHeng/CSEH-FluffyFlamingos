import React from 'react';
import './styles.ts';
import { WithStyles } from '@material-ui/styles';
import { styles } from './styles';
import { withStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';
import { AccountCircle, LocationOn, School, AttachMoney, Cake } from '@material-ui/icons';
import history from '../../../history';

interface Props extends WithStyles<typeof styles> {}
export interface State {}

class PureStudents extends React.Component<Props, State> {
	state: State = {};

	private readonly handleOnClick = () => {
		history.push('/studentPage')
	}

	render() {
		const { state, props } = this;
		const { classes } = props;
		return (
			<div className={classes.students}>
				<img src="https://i.pravatar.cc/150?img=" onClick={this.handleOnClick} className={classes.ImgStyles} />
				<Button className={classes.button} variant='contained' color='secondary' onClick={this.handleOnClick}>
						Find out more
				</Button>
				<div className={classes.profileLayout}>
					<div className={classes.profile}>
						<AccountCircle
							className={classes.icon}
							color="primary"
						/>
						<Typography variant='body1' className={classes.Content}> Jessica Alba</Typography>
					</div>
					<div className={classes.profile}>
						<Cake className={classes.icon} color="primary" />
						<Typography variant='body1' className={classes.Content}> 18</Typography>
					</div>
					<div className={classes.profile}>
						<LocationOn className={classes.icon} color="primary" />
						<Typography variant='body1' className={classes.Content}> Sydney</Typography>
					</div>

					<div className={classes.profile}>
						<AttachMoney className={classes.icon} color="primary" />
						<Typography variant='body1' className={classes.Content}> $1000</Typography>
					</div>
					<div className={classes.profile}>
						<School className={classes.icon} color="primary" />
						<p className={classes.Content}> React Js Course</p>
					</div>
				</div>
			</div>
		);
	}
}

export const Students = withStyles(styles)(PureStudents);
