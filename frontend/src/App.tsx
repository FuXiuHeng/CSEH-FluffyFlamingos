import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Router, Route } from 'react-router';
import history from './history';
import SponsorPage from './components/SponsorPage';
import { NavBar, StudentPage } from './components';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#23395b',
			light: '#90D7FF',
		},
		secondary: {
			main: '#ef6461',
		},
	},
});

const App: React.FC = () => {
	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<NavBar />
				<Router history={history}>
					<Route exact path="/" component={StudentPage} />
					<Route path="/homePage" component={undefined} />
					<Route path="/sponsorPage" component={SponsorPage} />
					<Route path="/studentPage" component={StudentPage} />
				</Router>
			</MuiThemeProvider>
		</div>
	);
};

export default App;
