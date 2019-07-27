import { createStyles } from '@material-ui/core/styles';

export const styles = theme =>
	createStyles({
		root: {
			padding: '30px 350px 0px 350px',
		},
		topCard: {
			display: 'flex',
			justifyContent: 'space-between'
		},
		studentCard: {
			display: 'flex',
			flexDirection: 'row',
		},
		studentPhoto: {
			display: 'inline',
			height: '250px',
			width: '350px',
			marginLeft: '-40%',
		},
		photoContainer: {
			borderRadius: '50%',
			borderStyle: 'solid',
			borderColor: 'white',
			borderWidth: 5,
			boxShadow: '0px 0px 5px -1px #888',
			minWidth: 200,
			maxWidth: 200,
			height: '200px',
			overflow: 'hidden',
			position: 'relative',
		},
		studentNameContainer: {
			height: '100%',	
			display: 'flex'
		},
		studentName: {
			height: '100%',	
			width: '100%',
			padding: '30px',
			position: 'relative',
			top: 80
		},
		studentDetails: {
			paddingTop: '30px',
		},
		sponsorCard: {
			position: 'relative',
			top: 50,
			display: 'flex',
			flexDirection: 'column'
		},
		bar: {
			margin: '10px 0px 10px 0px'
		},
		bodyPanel: {
			display: 'grid',
			gridTemplateColumns: '1fr 300px',
			marginTop: 10
		},
		tabPanel: {
		},
		eventPanel: {
			backgroundColor: 'blue'
		}
	});
