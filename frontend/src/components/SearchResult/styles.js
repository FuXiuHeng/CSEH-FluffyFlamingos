import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			marginTop: theme.spacing(7.5),
			marginRight: theme.spacing(10),
			marginLeft: theme.spacing(10),
		},
		searchResult: {
			display: 'flex',
			flexDirection: 'column',
		},
		searchResultPanel: {
			margin: '10px',
		},
		searchResultPaper: {
			margin: '10px',
		},
	});
