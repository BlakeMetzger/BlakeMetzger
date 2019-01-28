import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ key, title, content, image, categories, color, width }) => {
	return (
		<div
			className="card"
			style={{
				backgroundColor: color ? color : '#455a64',
				width: width ? width : '90%',
				margin: 'auto'
			}}>
			<div className="card-image waves-effect waves-block waves-light">
				<img className="activator" src={image} alt="" />
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">
					{title}
					<i className="material-icons right">more_vert</i>
				</span>
				<p>{content}</p>
				<Link to={`/posts/${key}`}>Continue reading...</Link>
			</div>
			<div className="card-reveal">
				<div className="card-title grey-text text-darken-4">
					{content}
					<i className="material-icons right">close</i>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
