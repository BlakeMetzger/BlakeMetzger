import React from 'react';
//import { Link } from 'react-router-dom';

const PostBoard = ({ title, content, image, footer, color, width }) => {
	return (
		<div
			className="row"
			style={{
				width: width ? width : '90%',
				margin: 'auto'
			}}>
			<div className="card blue-grey darken-1">
				<div className="card-image">
					<img src={image} alt=""/>
				</div>
				<div className="card-title">
					<h4>{title}</h4>
				</div>
				<div className="card-content">
					<div>{content}</div>
				</div>
				<div className="card-action">
					<a
						//href=""
						onClick={() => {
							window.scrollTo(0, 0);
						}}>
						Return to the top
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostBoard;
