import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Router, Route } from 'react-router';
import history from './history';
import SponsorPage from './components/SponsorPage';
import { NavBar } from './components';
import HomePage from './components/HomePage';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0f0326',
		},
		secondary: {
			main: '#ea526f',
		},
	},
});

const App: React.FC = () => {
	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<NavBar />
				<Router history={history}>
					<Route exact path="/" component={HomePage} />
					<Route path="/homePage" component={HomePage} />
					<Route path="/sponsorPage" component={SponsorPage} />
				</Router>
			</MuiThemeProvider>
		</div>
	);
};

export default App;
