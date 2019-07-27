import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		profile: {
			alignItems: 'flex-end',
		},
		imgStyle: {
			width: 50,
			height: 50,
			borderRadius: 30,
			// filter: 'invert(0.7)',
			background: 'transparent',
		},
	});
