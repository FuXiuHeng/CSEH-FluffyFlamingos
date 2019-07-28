import React from 'react';
import { AppBar, Typography, Toolbar, Button, Tab } from '@material-ui/core';
import { AccountCircle, QuestionAnswer } from '@material-ui/icons';
import { withStyles, WithStyles } from '@material-ui/styles';
import Image from '../resources/logo.png';
import { styles } from './styles';
import { SearchBar } from '../SearchBar';
import history from '../../history';

export interface NavBarProps extends WithStyles<typeof styles> {}
export interface NavBarState {
	showMessaging: boolean
}

class PureNavBar extends React.Component<NavBarProps, NavBarState> {
	private readonly onHomeClick = () => {
		history.push('./homePage');
	};


	constructor(props) {
		super(props);
		this.state = {
			showMessaging: false,
		}
	}

	private readonly toggleMessaging = () => {
		this.setState({
			showMessaging: !this.state.showMessaging,
		})
	}

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
						<Button size="small" className={classes.profile} onClick={this.toggleMessaging}>
							<QuestionAnswer fontSize="default" />
						</Button>

						<SearchBar />

						<Button size="small" className={classes.profile} onClick={this.onHomeClick}>
							<Typography className={classes.profileTitle} variant="subtitle1" noWrap>
								Alina Young
							</Typography>
							<AccountCircle fontSize="large" />
						</Button>
						{/* 
						<Typography className={classes.profile} variant="h6" noWrap>
							<Tab href="/studentPage" label="Profile" />
						</Typography> */}
					</Toolbar>
				</AppBar>
				<div className={classes.message} style={!this.state.showMessaging ? { visibility: 'hidden'} : { visibility: 'visible'}} onClick={this.toggleMessaging}>
					<Button variant="contained" color="primary">
						<QuestionAnswer className={classes.iconStyle} fontSize="default" />
						<text style={{ fontSize: 22, fontWeight: 'bold' }}>Sabrina Soon</text>
					</Button>
				</div>
			</div>
		);
	}
}

export const NavBar = withStyles(styles)(PureNavBar);
