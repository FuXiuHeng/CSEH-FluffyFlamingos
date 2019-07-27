import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			padding: '20px',
			boxShadow: '0px 0px 5px -2px #888',
		},
		verticalGallery: {
			marginTop: 12,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}
	});
