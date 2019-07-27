import { createStyles } from '@material-ui/core/styles';
import SponsorPage from './SponsorPage';
import { flexbox } from '@material-ui/system';
import { relative } from 'path';
import { CenterFocusStrong } from '@material-ui/icons';

export const styles = theme =>
	createStyles({
		sponsorPage: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
		},

		sponsorTab: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			paddingLeft: '40px',
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
			minHeight: '50vh',
		},
		studentSub: {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
		},
		paymentTab: {
			display: 'flex',
			flexDirection: 'column',
			flex: 2,
			minHeight: '50vh',
		},
		paymentSub: {
			display: 'flex',
			flexDirection: 'row',
			flex: 1,
		},
		paymentBox: {
			display: 'flex',
			flexDirection: 'column',
			flex: 1,
		},
		textBox: {
			width: 75,
			height: 20,
			padding: '10px',
		},
		progressBar: {
			position: 'relative',
			height: 20,
			width: 350,
			borderRadius: '50px',
			border: '1px solid #333',
		},
		filler: {
			backgroundColor: '#1DA598',
			height: '100%',
			width: '60%',
			borderRadius: 'inherit',
			transition: 'width .2s ease-in',
		},
		progressTab: {
			flexDirection: 'column',
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
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
			backgroundColor: 'red',
			margin: '10px',
			borderRadius: '1000px',
			padding: '15px',
		},
		imgStyle: {
			height: '200px',
			width: '200px',
			borderRadius: '500px',
		},
		studentPart: {
			display: 'flex',
			flexDirection: 'row',
			flex: 1,
		},
	});
