import React from 'react';
import './styles.ts';
import { WithStyles } from '@material-ui/styles';
import { styles } from './styles';
import { withStyles } from '@material-ui/core';
import { AccountCircle, LocationOn, School, AttachMoney, Cake } from '@material-ui/icons';

interface Props extends WithStyles<typeof styles> {}
export interface State {}

class PureStudents extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		const { classes } = props;
		return (
			<div className={classes.students}>
				<img src="https://i.pravatar.cc/150?img=" className={classes.ImgStyles} />
				<div className={classes.profileLayout}>
					<div className={classes.profile}>
						<AccountCircle
							className={classes.icon}
							color="primary"
							fontSize={'large'}
						/>
						<p className={classes.Content}> Jessica Alba</p>
					</div>
					<div className={classes.profile}>
						<Cake className={classes.icon} color="primary" fontSize={'large'} />
						<p className={classes.Content}> 18</p>
					</div>
					<div className={classes.profile}>
						<LocationOn className={classes.icon} color="primary" fontSize={'large'} />
						<p className={classes.Content}> Sydney</p>
					</div>

					<div className={classes.profile}>
						<AttachMoney className={classes.icon} color="primary" fontSize={'large'} />
						<p className={classes.Content}> $1000</p>
					</div>
					<div className={classes.profile}>
						<School className={classes.icon} color="primary" fontSize={'large'} />
						<p className={classes.Content}> React Js Course</p>
					</div>
				</div>
			</div>
		);
	}
}

export const Students = withStyles(styles)(PureStudents);
