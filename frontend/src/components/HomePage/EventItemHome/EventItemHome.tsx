import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import culturalExchange from './culturalExchange.jpg';
import seedOfKindness from './seedOfKindness.png';
import { styles } from './styles';

export interface EventItemProps extends WithStyles<typeof styles> {
	label: string;
	date: string;
	variant: 'cultural' | 'kindness';
}
export interface EventItemState {}

class PureEventItem extends React.Component<EventItemProps, EventItemState> {
	render() {
		const { classes } = this.props;
		const imgSrc = this.props.variant === 'cultural' ? culturalExchange : seedOfKindness;
		return (
			<div className={classes.root}>
				<img className={classes.image} src={imgSrc} alt="" />
				<Typography variant="body1" className={classes.eventDetails}>
					<b>{this.props.label}</b>
				</Typography>
				<Typography variant="body2" className={classes.eventDetails}>
					{this.props.date}
				</Typography>
			</div>
		);
	}
}

export const EventItem = withStyles(styles)(PureEventItem);
