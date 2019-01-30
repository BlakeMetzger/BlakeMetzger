import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostCard extends Component {
	render() {
		return (
			<div
				className="card"
				style={{
					backgroundColor: '#455a64',
					width: '90%',
					margin: 'auto'
				}}>
				<div className="card-image waves-effect waves-block waves-light">
					<img className="activator" src={this.props.image} alt="" />
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">
						{this.props.title}
						<i className="material-icons right">more_vert</i>
					</span>
					<p>{this.props.content}</p>
					<Link to={`/posts/${this.props.id}`}>Continue reading...</Link>
				</div>
				<div className="card-reveal">
					<div className="card-title grey-text text-darken-4">
						{this.props.content}
						<i className="material-icons right">close</i>
					</div>
				</div>
			</div>
		);
	}
}

// const PostCard = ({ key, title, content, image, categories, color, width }) => {
// 	return (
// 		<div
// 			className="card"
// 			style={{
// 				backgroundColor: color ? color : '#455a64',
// 				width: width ? width : '90%',
// 				margin: 'auto'
// 			}}>
// 			<div className="card-image waves-effect waves-block waves-light">
// 				<img className="activator" src={image} alt="" />
// 			</div>
// 			<div className="card-content">
// 				<span className="card-title activator grey-text text-darken-4">
// 					{title}
// 					<i className="material-icons right">more_vert</i>
// 				</span>
// 				<p>{content}</p>
// 				<Link to={`/posts/${key}`}>Continue reading...</Link>
// 			</div>
// 			<div className="card-reveal">
// 				<div className="card-title grey-text text-darken-4">
// 					{content}
// 					<i className="material-icons right">close</i>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default PostCard;
