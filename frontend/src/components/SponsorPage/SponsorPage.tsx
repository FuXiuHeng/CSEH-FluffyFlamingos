import React from 'react';
import { WithStyles, Button, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../SponsorPage/styles';
import PaymentTab from './PaymentTab';
import SenderDetailsTab from './SenderDetailsTab';
import ReceiptTab from './ReceiptTab';

interface SponsorPageProps extends WithStyles<typeof styles> {}
interface SponsorPageState {
	achievedAmount: number;
	targetAmount: number;
	progress: number;
	amount: string;
}

class SponsorPage extends React.Component<SponsorPageProps, SponsorPageState> {
	state: SponsorPageState = {
		achievedAmount: 4000,
		targetAmount: 8000,
		progress: 0,
		amount: '',
	};

	render() {
		const { state, props } = this;
		const { classes } = this.props;
		const updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ amount: event.target.value });
		};

		const onPress = (number: number) => {
			if (number == 2) {
				this.setState({
					achievedAmount: state.achievedAmount + parseInt(state.amount),
				});
			} else if (number == 0) {
				this.setState({ amount: '' });
			}
			this.setState({ progress: number });
		};
		const percent =
			state.targetAmount > state.achievedAmount
				? (state.achievedAmount / state.targetAmount) * 100
				: 100;
		return (
			<div className={classes.sponsorPage}>
				<div className={classes.sponsorTab}>
					<h1 style={{ fontSize: '4rem', fontFamily: 'Montserrat', fontWeight: 'bold' }}>
						Who you are <span style={{ color: '#ef6461' }}>Sponsoring:</span>
						<br />
					</h1>
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<img className={classes.imgStyle} src="https://i.pravatar.cc/150?img=" />
						<div style={{ flexDirection: 'column', marginLeft: 60 }}>
							<LinearProgress
								style={{ padding: 10, marginTop: 100, borderRadius: 30 }}
								variant="determinate"
								color="primary"
								value={percent}
							/>
							<h1
								style={{
									fontSize: '2.5rem',
									fontFamily: 'Montserrat',
									fontWeight: 'bold',
								}}
							>
								{`$${state.achievedAmount} of $${state.targetAmount} `}
								<span style={{ color: '#ef6461' }}>collected.</span>
							</h1>
						</div>
					</div>
				</div>
				{state.progress == 0 && (
					<>
						<div className={classes.studentTab}>
							<div>
								<h1
									style={{
										fontSize: '3rem',
										fontFamily: 'Montserrat',
										fontWeight: 'bold',
									}}
								>
									Student Details:
								</h1>
							</div>
							<div className={classes.studentPart}>
								<div className={classes.studentSub}>
									{detailsFormatter('Name', 'Jessica Alba')}
									{detailsFormatter('Age', '22')}
									{detailsFormatter('Date of Birth', 'April 22')}
									{detailsFormatter('Location', 'Sydney')}
								</div>
							</div>
						</div>
						{percent !== 100 && (
							<PaymentTab
								amount={state.amount}
								updateAmount={updateAmount}
								onPress={onPress}
							/>
						)}
					</>
				)}

				{state.progress == 1 && (
					<SenderDetailsTab amount={state.amount} onPress={onPress} />
				)}

				{state.progress == 2 && <ReceiptTab amount={state.amount} onPress={onPress} />}
			</div>
		);
	}
}

export default withStyles(styles)(SponsorPage);

export const detailsFormatter = (title: String, detail: String) => (
	<div style={{ flexDirection: 'row', margin: 8 }}>
		<text style={{ fontSize: 24, fontWeight: 'bold', color: '#23395b' }}>{title}: </text>
		<text style={{ fontSize: 24 }}>{detail}</text>
	</div>
);
