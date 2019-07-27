import React from 'react';
import './App.css';
import { Router, Route } from 'react-router';
import history from './history';
import SponsorPage from './components/SponsorPage';

const App: React.FC = () => {
	return (
		<Router history={history}>
			<Route exact path="/" component={SponsorPage} />
			<Route path="/homePage" component={undefined} />
			<Route path="/sponsorPage" component={SponsorPage} />
		</Router>
	);
};

export default App;
