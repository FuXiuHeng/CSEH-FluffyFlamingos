import React from 'react';
import './styles.ts';
import { WithStyles } from '@material-ui/styles';
import { styles } from './styles';
import { withStyles } from '@material-ui/core';

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
				<text className={classes.Content}>"hsdhdshjsdjhsdhjsdhs"</text>
			</div>
		);
	}
}

export const Students = withStyles(styles)(PureStudents);
