import React from 'react';
import {
	withStyles,
	WithStyles,
	useTheme,
	Theme,
	makeStyles,
	createStyles,
} from '@material-ui/core/styles';
import { SwipeableViews } from 'react-swipeable-views';
import { Typography, Tabs, Tab, AppBar, Box } from '@material-ui/core';

import { styles } from './styles1';
import { OverviewStudentPage } from './OverviewStudentPage';
import { PostStudentPage } from './PostStudentPage';
import student from './student.jpg';

export interface StudentPageProps extends WithStyles<typeof styles> {}

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: any;
	value: any;
}

export interface StudentPageState {
	value: any;
	index: any;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
};

const a11yProps = (index: any) => {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.background.paper,
			width: 500,
		},
	}),
);
class PureStudentPage extends React.Component<StudentPageProps, StudentPageState> {
	handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
		console.log(newValue);
		this.setState({
			value: newValue,
		});
	};
	handleChangeIndex = (newIndex: any) => {
		this.setState({
			index: newIndex,
		});
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;
		const theme = useTheme();
		return (
			<div className={classes.root}>
				<div className={classes.studentCard}>
					<div className={classes.photoContainer}>
						<img className={classes.studentPhoto} src={student} alt="student" />
					</div>
					<div className={classes.studentNameContainer}>
						<div className={classes.studentName}>
							<Typography variant="h2">Sabrina Soon</Typography>
							<Typography variant="h4">
								I am a Year 5 student in Malaysia who likes reading and coding!
							</Typography>
						</div>
					</div>
				</div>
				<AppBar className={classes.studentDetails} position="static" color="default">
					<Tabs
						value={value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="Item One" {...a11yProps(0)} />
						<Tab label="Item Two" {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<OverviewStudentPage />
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						<PostStudentPage />
					</TabPanel>
				</SwipeableViews>
			</div>
		);
	}
}

export const StudentPage = withStyles(styles)(PureStudentPage);
