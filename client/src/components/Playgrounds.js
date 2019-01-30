import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Editor from './Editor';
import Viewer from './Viewer';

export default class Playgrounds extends Component {
	render() {
		const width = window.innerHeight;

		return (
			<div
				className="card"
				style={{
					width: '80%',
					margin: 'auto',
					border: 'none',
					boxShadow: 'none',
					paddingTop: -15,
					marginTop: 0,
					backgroundColor: 'transparent'
				}}>
				<SplitPane
					style={{
						height: 870,
						paddingTop: 10,
						margin: 'auto',
						borderBottom: '2px dotted peru'
					}}
					split="vertical"
					defaultSize={width * 1.1}>
					<Editor />
					<Viewer />
				</SplitPane>
			</div>
		);
	}
}
