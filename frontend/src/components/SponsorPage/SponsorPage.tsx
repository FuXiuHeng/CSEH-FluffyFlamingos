import React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../SearchBar/styles';

interface SponsorPageProps extends WithStyles<typeof styles> {}
interface SponsorPageState {}

class SponsorPage extends React.Component<SponsorPageProps, SponsorPageState> {
	state: SponsorPageState = {};

	render() {
		// const { state, props } = this;
		return <div>sponsor page</div>;
	}
}

export default withStyles(styles)(SponsorPage);
