import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Playgrounds from './Playgrounds';

import Header from './Header';
import Landing from './Landing';
import Blog from './Blog';
//import Dashboard from './Dashboard';
//import SurveyNew from './surveys/SurveyNew';
import PostsIndex from './posts/posts_index';
import PostsNew from './posts/posts_new';
import PostsShow from './posts/posts_show';
import '../style/style.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="app-container">
				<BrowserRouter className="app-container">
					<div>
						<Header className="nav-bottom" />
						<div className="nav-bottom" />
						<Route exact path="/" component={Landing} />
						<Route path="/playgrounds" component={Playgrounds} />
						<Route path="/blog" component={Blog} />
						<Route path="/posts/new" component={PostsNew} />
						<Route path="/posts/:id" component={PostsShow} />
						<Route path="/posts" component={PostsIndex} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
