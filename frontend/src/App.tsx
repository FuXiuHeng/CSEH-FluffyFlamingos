import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Router, Route } from 'react-router';
import history from './history';
import SponsorPage from './components/SponsorPage';
import { NavBar } from './components';

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
				<header>
					<Router history={history}>
						<Route exact path="/" component={SponsorPage} />
						<Route path="/homePage" component={HomePage} />
						<Route path="/sponsorPage" component={SponsorPage} />
					</Router>
				</header>
				<body>
					<NavBar />
				</body>
			</MuiThemeProvider>
		</div>
	);
};

export default App;
