import React from 'react';
import './{{name}}.css';

export interface Props {}
{{#if functional}}
const {{name}}: React.FC<Props> = props => {
	return (
		null
	);
};
{{else}}
export interface State {}

class {{name}} extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		return (
			null
		);
	}
}

export default {{name}};
{{/if}}