import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export interface PostStudentPageProps extends WithStyles<typeof styles> {}
export interface PostStudentPageState {}

class PurePostStudentPage extends React.Component<PostStudentPageProps, PostStudentPageState> {
	render() {
		const { classes } = this.props;
		return <div className={classes.root}>Post</div>;
	}
}

export const PostStudentPage = withStyles(styles)(PurePostStudentPage);
