import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			padding: '100px',
		},
		studentCard: {
			height: '350px',
			display: 'flex',
			flexDirection: 'row',
		},
		studentPhoto: {
			display: 'inline',
			height: '100%',
			width: 'auto',
			marginLeft: '-32%',
		},
		photoContainer: {
			borderRadius: '50%',
			width: '350px',
			height: '350px',
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
		studentDetails: {
			paddingTop: '30px',
		},
	});
