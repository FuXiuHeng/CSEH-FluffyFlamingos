import React from 'react';
import { AppBar, Typography, Toolbar, Button, Tab } from '@material-ui/core';
import { AccountCircle, QuestionAnswer } from '@material-ui/icons';
import { withStyles, WithStyles } from '@material-ui/styles';
import Image from '../resources/logo.png';
import { styles } from './styles';
import { SearchBar } from '../SearchBar';
import history from '../../history';

export interface NavBarProps extends WithStyles<typeof styles> {}
export interface NavBarState {}

class PureNavBar extends React.Component<NavBarProps, NavBarState> {
	private readonly onHomeClick = () => {
		history.push('./homePage');
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Button size="small" onClick={this.onHomeClick}>
							<img src={Image} className={classes.imgStyle} />
							<Typography className={classes.title} variant="subtitle1" noWrap>
								Brand
							</Typography>
						</Button>
						<div className={classes.divider} />
						<Button size="small" className={classes.profile} onClick={this.onHomeClick}>
							<QuestionAnswer fontSize="default" />
						</Button>

						<SearchBar />

						<Button size="small" className={classes.profile} onClick={this.onHomeClick}>
							<Typography className={classes.profileTitle} variant="subtitle1" noWrap>
								Alex
							</Typography>
							<AccountCircle fontSize="large" />
						</Button>
						{/* 
						<Typography className={classes.profile} variant="h6" noWrap>
							<Tab href="/studentPage" label="Profile" />
						</Typography> */}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export const NavBar = withStyles(styles)(PureNavBar);
