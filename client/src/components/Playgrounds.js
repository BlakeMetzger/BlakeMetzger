import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Editor from './Editor';
import Viewer from './Viewer';
import TapTarget from './common/TapTarget';

export default class Playgrounds extends Component {
	state = {
		isHidden: false,
		width: window.innerWidth,
		height: window.innerHeight
	};

	componentWillMount() {
		let visited = sessionStorage.getItem('alreadyVisitedPlaygrounds');
		this.updateScreenSize();
		if (visited) {
			//Hide Tap Target if already visited page.
			this.setState({ isHidden: true });
		} else {
			//Show Tap Target on first page visit.
			sessionStorage.setItem('alreadyVisitedPlaygrounds', true);
			this.setState({ isHidden: false });
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateScreenSize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenSize);
	}

	updateScreenSize = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};

	render() {
		const { cardStyle, splitPaneStyle } = style;
		const cardWidth = () => {
			if (this.state.width < 768) {
				return '95%';
			} else {
				return '95%';
			}
		};

		console.log(cardWidth());
		return (
			<div>
				<TapTarget isHidden={this.state.isHidden}>
					<h5>Javascript Playgrounds</h5>
					<p>
						This tool was created by Stephen Grider at
						<a
							href="https://rallycoding.com/"
							target="_blank"
							style={{ color: 'white' }}>
							{' '}
							RallyCoding{'. '}
						</a>
						Stephen is my favorite instructor. Check out his courses at
						<a
							href="https://www.udemy.com/user/sgslo/?key=taught_courses&taught_courses=1"
							target="_blank"
							style={{ color: 'white' }}>
							{' '}
							Udemy{'. '}
						</a>
						He goes into great detail and is able to explain advanced concepts
						in a way that is easy to understand. <br />
						To use this tool, type your Javascript code <br />
						in the left panel and see your results <br />
						appear in real time on the right. <br />
						Syntax errors will show in
						<br />
						the bottom right panel.
					</p>
				</TapTarget>
				<div
					className="card"
					style={(cardStyle, { width: `${cardWidth()}`, margin: 'auto' })}>
					<SplitPane
						style={
							(splitPaneStyle,
							{
								height: this.state.height - 80,
								paddingTop: 20,
								borderBottom: '2px dotted peru'
							})
						}
						split="vertical"
						defaultSize={this.state.width / 1.5}>
						<Editor />
						<Viewer height={this.state.height} />
					</SplitPane>
				</div>
			</div>
		);
	}
}

const style = {
	cardStyle: {
		margin: 'auto',
		borderBottom: 'none',
		boxShadow: 'none',
		paddingTop: -15,
		marginTop: 0,
		backgroundColor: 'transparent'
	},
	splitPaneStyle: {
		paddingTop: 20,
		margin: 'auto'
	}
};
