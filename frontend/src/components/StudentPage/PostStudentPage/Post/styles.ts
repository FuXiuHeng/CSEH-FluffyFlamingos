import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			boxShadow: '1px 1px 5px -2px #888',
			padding: '10px',
		},
		date: {
			color: '#888',
			fontSize: 14
		},
		bodyText: {

		},
		imageContainer: {
			backgroundColor: '#ddd',
			display: 'flex',
			justifyContent: 'center'
		},
		image: {
			height: 300,
		},
		likeComment: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			justifyContent: 'space-around',
			textAlign: 'center',
			fontColor: '#333',
		},
		like: {

		},
		comment: {
			borderLeftStyle: 'solid',
			borderLeftColor: '#888',
			borderLeftWidth: '1px'
		}
	});
