import React from 'react';
import { WithStyles, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../SponsorPage/styles';

interface SponsorPageProps extends WithStyles<typeof styles> {}
interface SponsorPageState {}

class SponsorPage extends React.Component<SponsorPageProps, SponsorPageState> {
	state: SponsorPageState = {};

	render() {
		const { state, props } = this;
		const { classes } = this.props;

		return (
			<div className={classes.sponsorPage}>
				<div className={classes.sponsorTab}>
					<h1 style={{ fontSize: '4rem', fontFamily: 'Montserrat', fontWeight: 'bold' }}>
						Who you are <span style={{ color: '#ef6461' }}>Sponsoring:</span>
						<br />
					</h1>
					<img className={classes.imgStyle} src="https://i.pravatar.cc/150?img=" />
					<div className={classes.sponsorSub}>
						<div>Payment steps</div>
						<Button className={classes.stepButton}>Step 1</Button>
						<div>--></div>
						<Button className={classes.stepButton}>Step 2</Button>
						<div>--></div>
						<Button className={classes.stepButton}>Step 3</Button>
					</div>
				</div>
				<div className={classes.studentTab}>
					<div>
						<h1>Student Details</h1>
					</div>
					<div className={classes.studentPart}>
						<div className={classes.studentSub}>
							<text>Name: </text>
							<text>Age: </text>
							<text>Date of Birth: </text>
							<text>Location: </text>
						</div>
					</div>
				</div>
				<div className={classes.paymentTab}>
					<h1>Payment</h1>
					<div className={classes.paymentSub}>
						<div className={classes.paymentBox}>
							<h2>Amount:</h2>
							<input type="text" placeholder={'Amount'} className={classes.textBox} />
						</div>
						<div className={classes.progressTab}>
							<text>Student Target: $500</text>
							<div className={classes.progressBar}>
								<div className={classes.filler}></div>
							</div>
							<text>$200 left</text>
						</div>
					</div>
				</div>
				<div className={classes.buttonTab}>
					<Button className={classes.buttonStyle}>Back</Button>
					<Button className={classes.buttonStyle}>NextT</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(SponsorPage);
