import React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../{{name}}/styles';

interface Props extends WithStyles<typeof styles> {}
{{#if functional}}
const {{name}}: React.FC<Props> = props => {
	return (
		null
	);
};
{{else}}
interface State {}

class {{name}} extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		return (
			null
		);
	}
}

export default withStyles(styles)({{name}});

{{/if}}