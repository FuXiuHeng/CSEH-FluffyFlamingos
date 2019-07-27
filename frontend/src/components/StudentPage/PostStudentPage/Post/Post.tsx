import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import introReact from './introReact.jpg';
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
				<p>I've started to learn some React in my own time!</p>
				<div className={classes.imageContainer}>
					<img className={classes.image} src={introReact} alt=""/>
				</div>
				<div className={classes.likeComment}>
					<p className={classes.like}>Like</p>
					<p className={classes.comment}>Comment</p>
				</div>
			</div>
		);
	}
}

export const Post = withStyles(styles)(PurePost);
