import React from 'react';
import './StudentDiscovery.css';

export interface Props {}
export interface State {}

class StudentDiscovery extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		return (
			<div>
				<img src="https://i.pravatar.cc/150?img=" className="ImgStyles" />
				<text className="Content">"hsdhdshjsdjhsdhjsdhs"</text>
			</div>
		);
	}
}

export default StudentDiscovery;
