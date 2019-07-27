import React from 'react';
import { WithStyles, Button } from '@material-ui/core';
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
				<h1
					style={{
						fontSize: '3rem',
						fontFamily: 'Montserrat',
						fontWeight: 'bold',
					}}
				>
					Payment:
				</h1>
				<div className={classes.paymentBox}>
					<input
						style={{ margin: 5 }}
						type="number"
						placeholder={'Amount'}
						className={classes.textBox}
						value={props.amount}
						onChange={props.updateAmount}
					/>
					<Button
						style={{
							paddingRight: 60,
							paddingLeft: 60,
							margin: 10,
							marginBottom: 15,
						}}
						variant="contained"
						color="primary"
						onClick={() => props.onPress(1)}
					>
						<h1
							style={{
								fontSize: '1rem',
								fontFamily: 'Montserrat',
								fontWeight: 'bold',
							}}
						>
							Pay
						</h1>
					</Button>
				</div>
				<div className={classes.progressTab}></div>
			</div>
		);
	}
}

export default withStyles(styles)(PaymentTab);
