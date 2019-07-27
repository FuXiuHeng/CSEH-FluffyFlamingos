import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		students: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			alignItems: 'center',
			borderRadius: '40px',
			margin: '30px',
			paddingTop: '50px',
			paddingBottom: '50px',
			borderStyle: 'solid',
			borderWidth: '2px',
			borderColor: theme.palette.primary.light,
		},
		Content: {
			margin: '12px',
			color: '#3f3f5a',
		},
		ImgStyles: {
			height: 200,
			width: 200,
			borderRadius: '500px',
			marginBottom: '30px',
			borderStyle: 'solid',
			borderWidth: '4px',
			borderColor: '#90d7ff',
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
	});
