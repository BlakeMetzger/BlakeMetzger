import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Editor from './Editor';
import Viewer from './Viewer';

export default class Playgrounds extends Component {
	render() {
		const width = window.innerHeight;

		return (
			<SplitPane
				style={{ paddingTop: 15 }}
				split="vertical"
				defaultSize={width * 1.3}
			>
				<Editor />
				<Viewer />
			</SplitPane>
		);
	}
}
