import React from 'react';
import { AppBar, IconButton, Typography, Toolbar, Button, Tab } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles, WithStyles } from '@material-ui/styles';
import Image from '../resources/logo.jpg';
import { styles } from './styles';
import { SearchBar } from '../SearchBar';

export interface NavBarProps extends WithStyles<typeof styles> {}
export interface NavBarState {}

class PureNavBar extends React.Component<NavBarProps, NavBarState> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<img src={Image} className={classes.imgStyle} />
						<Typography className={classes.title} variant="h6" noWrap>
							<Tab href="/homePage" label="Home" />
						</Typography>
						<SearchBar />
						<Typography className={classes.profile} variant="h6" noWrap>
							<Tab href="/studentPage" label="Profile" />
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export const NavBar = withStyles(styles)(PureNavBar);
