import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import PostBoard from '../common/PostBoard';
import PostCard from '../common/PostCard';
//import PostImage from "../../assets/first-post-img.jpg";

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li
					className="list-group-item"
					key={post.id}
					style={{ paddingBottom: 20 }}>
					<PostCard
						id={post.id}
						title={post.title}
						content={post.content}
						image={post.image}
						categories={post.categories}
					/>
				</li>
			);
		});
	}

	render() {
		return (
			<div
				style={{
					width: '90%',
					margin: 'auto'
				}}>
				<Link to={`/posts/new`}>
					<div
						className="waves-effect btn"
						style={{ backgroundColor: '#cf7541', zIndex: -2 }}>
						New Post
					</div>
				</Link>
				<PostBoard style={{ width: '70%' }}>
						<ul className="list-group" style={{paddingTop: 12}}>
							{this.renderPosts()}
						</ul>
				</PostBoard>
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
