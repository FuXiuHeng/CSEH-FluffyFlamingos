import React from 'react';
import { WithStyles, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../PaymentTab/styles';

interface Props extends WithStyles<typeof styles> {
	amount: string;
	onPress: (number: number) => void;
	updateAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface State {}

class PaymentTab extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		const { classes } = props;
		return (
			<div className={classes.paymentTab}>
				<Typography variant='h6'><b>Payment:</b></Typography>
				<div className={classes.paymentBox}>
					<input
						style={{ margin: 0 }}
						type="number"
						placeholder={'Enter amount'}
						className={classes.textBox}
						value={props.amount}
						onChange={props.updateAmount}
					/>
					<Button
						style={{
							marginLeft: 10,
							paddingRight: 20,
							paddingLeft: 20,
						}}
						variant="contained"
						color="primary"
						onClick={() => props.onPress(1)}
					>
						Next
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaymentTab);
