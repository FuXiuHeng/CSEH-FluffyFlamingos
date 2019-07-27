import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export interface OverviewStudentPageProps extends WithStyles<typeof styles> {}
export interface OverviewStudentPageState {}

class PureOverviewStudentPage extends React.Component<
	OverviewStudentPageProps,
	OverviewStudentPageState
> {
	render() {
		const { classes } = this.props;
		return <div className={classes.root}>Overview</div>;
	}
}

export const OverviewStudentPage = withStyles(styles)(PureOverviewStudentPage);
