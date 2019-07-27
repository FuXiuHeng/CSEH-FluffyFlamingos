import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		students: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			backgroundColor: 'yellow',
			alignItems: 'center',
		},
		Content: {
			display: 'flex',
			flex: 1,
			backgroundColor: 'green',
		},
		ImgStyles: {
			display: 'flex',
			height: 80,
			width: 80,
			borderRadius: '100px',
			flex: 1,
		},
	});
