import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		paymentTab: {
			display: 'flex',
			flexDirection: 'column',
			flex: 2,
			minHeight: '50vh',
		},

		paymentBox: {
			flexDirection: 'row',
		},
		textBox: {
			width: 75,
			height: 20,
			padding: '12px',
			paddingRight: '50px',
			paddingLeft: '50px',
			fontSize: 22,
		},
		progressTab: {
			flexDirection: 'column',
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
