import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { EventItem } from './EventItem';
import { styles } from './styles';

export interface EventPanelProps extends WithStyles<typeof styles> {}
export interface EventPanelState {}

class PureEventPanel extends React.Component<EventPanelProps, EventPanelState> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<b>Events</b>
				<EventItem />
			</div>
		);
	}
}

export const EventPanel = withStyles(styles)(PureEventPanel);
