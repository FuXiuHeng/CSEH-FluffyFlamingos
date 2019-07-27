import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { EventItem } from './EventItem';
import { styles } from './styles';

export interface EventPanelProps extends WithStyles<typeof styles> {}
export interface EventPanelState {}

class PureEventPanel extends React.Component<EventPanelProps, EventPanelState> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Typography variant="body1"><b>Events</b></Typography>
				<div className={classes.verticalGallery}>
					<EventItem label='Cultural Exchange Program' date='7 August 2019' variant='cultural'/>
					<EventItem label='Seed of Kindness Workshop' date='5 October 2019' variant='kindness'/>
				</div>
			</div>
		);
	}
}

export const EventPanel = withStyles(styles)(PureEventPanel);
