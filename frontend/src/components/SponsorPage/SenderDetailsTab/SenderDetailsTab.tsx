import React from 'react';
import { WithStyles, Button, Typography } from '@material-ui/core';
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
			<div style={{ flex: 1 }}>
				<Typography variant="h6">
					<b>Your Details:</b>
				</Typography>
				<div style={{ margin: '4px 0px', paddingLeft: 10 }}>
					{detailsFormatter('Amount', `$${props.amount}`)}
					{detailsFormatter('Name', 'Alina Young')}
					{detailsFormatter('Age', '22')}
					{detailsFormatter('Location', 'UNSW')}
				</div>
				<div style={{ marginTop: 20, flexDirection: 'row' }}>
					<Button
						style={{ marginRight: 20 }}
						variant="contained"
						color="primary"
						onClick={() => props.onPress(0)}
					>
						Back
					</Button>
					<Button variant="contained" color="secondary" onClick={() => props.onPress(2)}>
						Confirm Payment
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(SenderDetailsTab);
