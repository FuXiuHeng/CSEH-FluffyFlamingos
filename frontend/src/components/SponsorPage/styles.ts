import { createStyles } from '@material-ui/core/styles';
import SponsorPage from './SponsorPage';
import { flexbox, fontSize } from '@material-ui/system';
import { relative } from 'path';
import { CenterFocusStrong } from '@material-ui/icons';

export const styles = theme =>
	createStyles({
		sponsorPage: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
			padding: '60px',
			paddingLeft: '350px',
			paddingRight: '350px',
			paddingBottom: '300px',
		},

		sponsorTab: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
		},
		sponsorSub: {
			display: 'flex',
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
		},
		studentTab: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
		},
		studentSub: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
		},
		progressBar: {
			margin: '5px',
			padding: '5px',
			alignItems: 'center',
		},
		filler: {
			backgroundColor: '#1DA598',
			height: '100%',
			width: '60%',
			borderRadius: 'inherit',
			transition: 'width .2s ease-in',
		},

		buttonStyle: {
			color: 'blue',
			backgroundColor: 'red',
			margin: '10px',
		},
		buttonTab: {
			display: 'flex',
			flexDirection: 'row',
			flex: 1,
			justifyContent: 'flex-end',
			backgroundColor: 'black',
			minHeight: '10vh',
			alignItems: 'center',
		},
		stepButton: {
			color: 'blue',
			margin: '10px',
			borderRadius: '1000px',
			padding: '15px',
		},
		imgStyle: {
			height: '200px',
			width: '200px',
			borderRadius: '500px',
			borderStyle: 'solid',
			borderWidth: '4px',
			borderColor: '#90D7FF',
		},
		studentPart: {
			display: 'flex',
			flexDirection: 'row',
			flex: 1,
		},
	});
