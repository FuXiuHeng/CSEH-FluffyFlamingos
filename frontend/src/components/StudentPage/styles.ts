import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			padding: '20px',
		},
		studentCard: {
			height: '250px',
			display: 'flex',
			flexDirection: 'row',
		},
		studentPhoto: {
			display: 'inline',
			height: '100%',
			width: 'auto',
			marginLeft: '-31%',
		},
		photoContainer: {
			borderRadius: '50%',
			width: '250px',
			height: '250px',
			overflow: 'hidden',
			position: 'relative',
		},
		studentNameContainer: {
			display: 'flex',
			alignItems: 'center',
		},
		studentName: {
			padding: '50px',
		},
	});
