import React from 'react';
import './SponsorPage.css';

export interface Props {}
export interface State {}

class SponsorPage extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		return <div>sponsor page</div>;
	}
}

export default SponsorPage;
