import React from 'react';
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles, WithStyles } from '@material-ui/styles';

import { styles } from './styles';
import { SearchBar } from '../SearchBar';

export interface Props extends WithStyles<typeof styles> {}
export interface State {}

class PureNavBar extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		const { classes } = props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
						>
							<Menu />
						</IconButton>
						<Typography className={classes.title} variant="h6" noWrap>
							Material-UI
						</Typography>
						<SearchBar />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export const NavBar = withStyles(styles)(PureNavBar);
