import React from 'react';
import { Link, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';
import history from '../../history';
import * as events from '../../data/events';

export class PureSearchResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredResults: null,
			searchInput: '',
		};
	}

	componentDidMount = () => {
		console.log(events.eventList);
		const searchInput = this.props.location.search.split('?')[1];
		console.log(searchInput);
		this.setState({
			filteredResults: events.eventList.filter(
				code =>
					code.label.toUpperCase().search(searchInput.toUpperCase()) !== -1 ||
					code.value.toUpperCase().search(searchInput.toUpperCase()) !== -1,
			),
			searchInput,
		});
	};

	shouldComponentUpdate = nextProps => {
		const searchInput = nextProps.location.search.split('?')[1];
		console.log(searchInput);
		if (searchInput === this.state.searchInput) return false;
		return true;
	};

	componentDidUpdate = () => {
		console.log(events.eventList);
		const searchInput = this.props.location.search.split('?')[1];
		console.log(searchInput);
		this.setState({
			filteredResults: events.eventList.filter(
				code =>
					code.label.toUpperCase().search(searchInput.toUpperCase()) !== -1 ||
					code.value.toUpperCase().search(searchInput.toUpperCase()) !== -1,
			),
			searchInput,
		});
	};

	render() {
		const { classes } = this.props;
		const { filteredResults } = this.state;
		console.log(filteredResults);
		return (
			<div className={classes.root}>
				<h1> Search Result </h1>
				<div className={classes.searchResult}>
					{filteredResults &&
						filteredResults.map(result => (
							<Paper className={classes.searchResultPaper}>
								<div className={classes.searchResultPanel}>
									<Typography variant="h6">
										<Link
											component="button"
											variant="h6"
											onClick={() =>
												history.push(
													`/${this.state.searchInput}/${result.label}`,
												)
											}
										>
											{result.label}
										</Link>
									</Typography>
									<Typography variant="caption">{result.value}</Typography>
								</div>
							</Paper>
						))}
				</div>
			</div>
		);
	}
}

export const SearchResult = withStyles(styles)(PureSearchResult);
