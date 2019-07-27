import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		paymentTab: {
			display: 'flex',
			flexDirection: 'column',
			marginTop: 20,
		},

		paymentBox: {
			flexDirection: 'row',
		},
		textBox: {
			width: 150,
			height: 10,
			padding: '12px',
			fontSize: 16,
		},
		progressTab: {
			flexDirection: 'column',
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
