import { createStyles } from '@material-ui/core/styles';
import { Opacity } from '@material-ui/icons';

export const styles = theme =>
	createStyles({
		root: {
			boxShadow: '1px 1px 5px -2px #888',
			margin: '10px',
			padding: '10px',
		},
		header: {
			marginTop: 12,
		},
		topPanel: {
			display: 'grid',
			gridTemplateColumns: '2fr 1fr'
		},
		imageContainer: {
			position:'relative',
			width: 250,
		},
		studentImage: {
			width: '100%'
		},
		overlayImage: {
			position: "absolute",
			top: '50%',
			left: '50%',
			width: 'auto',
			height: '60%',
			transform: 'translate(-50%, -50%)',
			opacity: 0.7
		}
	});
