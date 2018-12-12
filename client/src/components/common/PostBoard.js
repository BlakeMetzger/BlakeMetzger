import React from 'react';
import { Link } from 'react-router-dom';

const PostBoard = ({ title, content, image, color, width }) => {
	return (
		<div
			className="row"
			style={{
				width: width ? width : '90%',
				margin: 'auto'
			}}>
			<div className="card blue-grey darken-1">
				<div className="card-image">
					<img src={image} />
				</div>
				<div className="card-title">
					<h4>{title}</h4>
				</div>
				<div className="card-content">
					<p>{content}</p>
				</div>
				<div className="card-action">
					<a href="#">Return to the top</a>
				</div>
			</div>
		</div>
	);
};

export default PostBoard;
