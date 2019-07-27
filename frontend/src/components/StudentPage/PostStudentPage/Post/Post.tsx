import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export interface PostProps extends WithStyles<typeof styles> {}
export interface PostState {}

class PurePost extends React.Component<PostProps, PostState> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.date}>
					27 July 2019, 9:00 a.m.
				</div>
				<p>Successfully enrolled into UNSW!</p>
			</div>
		);
	}
}

export const Post = withStyles(styles)(PurePost);
