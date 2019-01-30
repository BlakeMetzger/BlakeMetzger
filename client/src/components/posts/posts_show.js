import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostCard from '../common/PostCard';
//import PostImage from "../../assets/first-post-img.jpg";
import { fetchPost, deletePost } from '../../actions';

class PostsShow extends Component {
	componentDidMount() {
		if (!this.props.post) {
			const { id } = this.props.match.params;
			this.props.fetchPost(id);
		}
		//} add line to reduce network resources.
	}

	onDeleteClick() {
		const { id } = this.props.match.params;

		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">
					<button className="btn pull-xs-right" />
				</Link>

				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
				<PostCard
					key={post.id}
					title={post.title}
					content={post.content}
					image={post.image}
					categories={post.categories}
				/>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(
	mapStateToProps,
	{ fetchPost, deletePost }
)(PostsShow);
