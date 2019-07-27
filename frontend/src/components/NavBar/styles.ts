import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		divider: {
			flexGrow: 1,
		},
		title: {
			fontSize: 12,
			color: 'white',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		profile: {
			alignItems: 'flex-end',
		},
		imgStyle: {
			width: 30,
			height: 30,
			borderRadius: 30,
			filter: 'invert(1)',
			background: 'transparent',
			marginRight: 10
		},
	});
