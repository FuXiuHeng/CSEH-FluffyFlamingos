import React from 'react';
import { WithStyles, Button, LinearProgress, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../SponsorPage/styles';
import PaymentTab from './PaymentTab';
import SenderDetailsTab from './SenderDetailsTab';
import ReceiptTab from './ReceiptTab';
import history from '../../history';
import Image from '../resources/1Photo.jpg';

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
		const data = require('../HomePage/Students/studentsData/1Data.json');
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
				history.push('/homePage');
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
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<img className={classes.imgStyle} src={Image} />
						<div style={{ flexDirection: 'column', marginLeft: 60 }}>
							<Typography variant="h6">
								<span style={{ color: '#ef6461' }}>
									<b>You are sponsoring:</b>
								</span>
							</Typography>
							<Typography variant="h3">{data.name}</Typography>
							<LinearProgress
								style={{
									padding: 5,
									marginTop: 20,
									marginBottom: 10,
									borderRadius: 30,
								}}
								variant="determinate"
								color="primary"
								value={percent}
							/>
							<Typography variant="h6">
								$<span style={{ fontSize: 28 }}>{state.achievedAmount} </span>
								of $<span style={{ fontSize: 28 }}>{state.targetAmount} </span>
								collected.
							</Typography>
						</div>
					</div>
				</div>
				{state.progress == 0 && (
					<div className={classes.tabContainer}>
						<div className={classes.studentTab}>
							<div>
								<Typography variant="h6">
									<b>Student Details:</b>
								</Typography>
							</div>
							<div className={classes.studentPart}>
								<div className={classes.studentSub}>
									{detailsFormatter('Age', data.age)}
									{detailsFormatter('Location', data.location)}
									{detailsFormatter('Favourite Subject', data.favSubject)}
									{detailsFormatter('Aspirations', data.aspirations)}
									{detailsFormatter('Hobby', data.hobby)}
									{detailsFormatter('Target', data.purpose)}
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
					</div>
				)}

				{state.progress == 1 && (
					<div className={classes.tabContainer}>
						<SenderDetailsTab amount={state.amount} onPress={onPress} />
					</div>
				)}

				{state.progress == 2 && (
					<div className={classes.tabContainer}>
						<ReceiptTab amount={state.amount} onPress={onPress} />
					</div>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(SponsorPage);

export const detailsFormatter = (title: String, detail: String) => (
	<div style={{ margin: '4px 0px' }}>
		<Typography variant="body1">
			{title}: {detail}
		</Typography>
	</div>
);
