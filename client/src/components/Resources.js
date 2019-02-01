import React from 'react';
import { Link } from 'react-router-dom';
import PostBoard from './common/PostBoard';

const Resources = () => {
	return (
		<PostBoard style={{ width: '70%' }}>
			<div
				style={{ paddingLeft: '3%', paddingRight: '3%', paddingBottom: '1%' }}>
				<div style={{ margin: 0 }}>
					<h4 style={{ color: '#2b2b2b' }}>
						Resources are coming soon!
					</h4>
					
				</div>
			</div>
		</PostBoard>
	);
};

export default Resources;
