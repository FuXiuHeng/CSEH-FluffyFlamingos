import React from 'react';
import './StudentDiscovery.css';

export interface Props {
	inverted?: boolean;
}
export interface State {}

class StudentDiscovery extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;
		const { inverted } = props;
		return (
			<div className="StudentDiscovery">
				{inverted ? (
					<>
						<div
							style={{
								flex: 3,
								marginLeft: 80,
								marginRight: 80,
							}}
						>
							<blockquote>
								<p className="Content">
									I'm 12 years old this year, i have a major interest in
									Information Technology but sadly i cannot afford my school fees.
									Please help me out! I hope to pursue my dream in this field :)
								</p>
								<cite>- Aldous Huxley -</cite>
							</blockquote>
						</div>
						<img src="https://i.pravatar.cc/150?img=4" className="ImgStyles" />
					</>
				) : (
					<>
						<img src="https://i.pravatar.cc/150?img=5" className="ImgStyles" />
						<div
							style={{
								flex: 3,
								marginLeft: 80,
								marginRight: 80,
							}}
						>
							<blockquote>
								<p className="Content">
									Another day older another day wiser, what comes with age is
									wisdom but for me who cannot afford to pursue my dreams, the
									only wisdom I get is the insignificance of reality. :(
								</p>
								<cite>- Joanne Maxwell -</cite>
							</blockquote>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default StudentDiscovery;
