import React from 'react';
import { WithStyles, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../SenderDetailsTab/styles';
import { detailsFormatter } from '../SponsorPage';

interface Props extends WithStyles<typeof styles> {
	amount: string;
	onPress: (number: number) => void;
}
interface State {}

class SenderDetailsTab extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		return (
			<div style={{ flex: 1, paddingBottom: 300 }}>
				<h1
					style={{
						fontSize: '3rem',
						fontFamily: 'Montserrat',
						fontWeight: 'bold',
					}}
				>
					Your Details:
				</h1>
				<div style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: 30 }}>
					{detailsFormatter('Amount', `$${props.amount}`)}
					{detailsFormatter('Name', 'Jackson Reynold')}
					{detailsFormatter('Age', '34')}
					{detailsFormatter('Location', 'Queensland')}
				</div>
				<div style={{ flexDirection: 'row' }}>
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
							Back
						</h1>
					</Button>
					<Button
						style={{
							paddingRight: 60,
							paddingLeft: 60,
							margin: 10,
							marginBottom: 15,
						}}
						variant="contained"
						color="primary"
						onClick={() => props.onPress(2)}
					>
						<h1
							style={{
								fontSize: '1rem',
								fontFamily: 'Montserrat',
								fontWeight: 'bold',
							}}
						>
							Confirm Payment
						</h1>
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(SenderDetailsTab);
