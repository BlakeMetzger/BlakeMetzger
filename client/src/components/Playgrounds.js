import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Editor from './Editor';
import Viewer from './Viewer';

export default class Playgrounds extends Component {
	render() {
		const width = window.innerHeight;

		return (
			<div style={{ margin: 'auto' }}>
				<SplitPane
					style={{ height: '93%', paddingTop: 15, margin: 'auto' }}
					split="vertical"
					defaultSize={width * 1.3}>
					<Editor />
					<Viewer />
				</SplitPane>
			</div>
		);
	}
}
