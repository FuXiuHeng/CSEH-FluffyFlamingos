import React from 'react';
import { AppBar, IconButton, Typography, ToolBar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
// import { createStyles, fade, makeStyles } from '@material-ui/core/styles';

import './NavBar.css';
import { SearchBar } from '../SearchBar';

export interface Props {}
export interface State {}

class NavBar extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;

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

export default NavBar;
