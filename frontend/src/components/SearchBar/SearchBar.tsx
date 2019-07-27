import React from 'react';
import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export interface Props extends WithStyles<typeof styles> {}
export interface State {}

class PureSearchBar extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		const { classes } = props;
		return (
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<Search />
				</div>
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
				/>
			</div>
		);
	}
}

export const SearchBar = withStyles(styles)(PureSearchBar);
