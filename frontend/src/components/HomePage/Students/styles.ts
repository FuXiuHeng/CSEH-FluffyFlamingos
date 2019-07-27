import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		students: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			alignItems: 'center',
			margin: '30px',
			// paddingTop: '20px',
			// paddingBottom: '20px',
			// borderStyle: 'solid',
			// borderRadius: '40px',
			// borderWidth: '2px',
			// borderColor: theme.palette.primary.light,
			// boxShadow: '0px 0px 5px -2px #888',
			cursor: 'pointer'
		},
		Content: {
			margin: '12px',
			color: '#3f3f5a',
			fontSize: 16,
		},
		ImgStyles: {
			height: 200,
			width: 200,
			borderRadius: '500px',
			marginBottom: '30px',
			boxShadow: '0px 0px 5px -2px #888',
			borderStyle: 'solid',
			borderWidth: '4px',
			borderColor: 'white',
		},
		icon: {
			// margin: '5px',
			// justifyContent: 'flex-start',
		},
		profile: {
			display: 'flex',
			flexDirection: 'row',
			flex: 1,
			alignItems: 'center',
		},
		profileLayout: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
		button: {
			alignSelf: 'center',
			marginBottom: 10,
		}
	});
