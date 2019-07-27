import React from 'react';
import { WithStyles, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../ReceiptTab/styles';
import { Typography } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {
	amount: string;
	onPress: (number) => void;
}
interface State {}

class ReceiptTab extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		return (
			<div style={{  }}>
				<Typography variant='h4'>
					<b>Thank you for donating ${props.amount}!</b>
				</Typography>
				<br/>
				<Button
					variant="contained"
					color="primary"
					onClick={() => props.onPress(0)}
				>
					Back to Home
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(ReceiptTab);
