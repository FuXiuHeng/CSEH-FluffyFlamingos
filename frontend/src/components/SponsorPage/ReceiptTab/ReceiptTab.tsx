import React from 'react';
import { WithStyles, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../ReceiptTab/styles';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

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
			<div style={{ paddingBottom: 400 }}>
				<h1
					style={{
						fontSize: '3rem',
						fontFamily: 'Montserrat',
						fontWeight: 'bold',
					}}
				>
					Thank you for donating ${props.amount}!
				</h1>
				<Button
					style={{
						paddingRight: 60,
						paddingLeft: 60,
						margin: 10,
						marginBottom: 15,
					}}
					variant="contained"
					color="primary"
					onClick={() => props.onPress(0)}
				>
					<h1
						style={{
							fontSize: '1rem',
							fontFamily: 'Montserrat',
							fontWeight: 'bold',
						}}
					>
						Go Back
					</h1>
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(ReceiptTab);
