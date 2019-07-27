import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export interface EventItemProps extends WithStyles<typeof styles> {}
export interface EventItemState {}

class PureEventItem extends React.Component<EventItemProps, EventItemState> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<b>Aloha</b>
			</div>
		);
	}
}

export const EventItem = withStyles(styles)(PureEventItem);
