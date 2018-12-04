import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import Logo from '../assets/Logo.jpg';
import '../style/style.css';

class Header extends Component {
	renderAuthContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="4">
						<Payments />
					</li>,
					<li key="5" style={{ margin: '0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="6">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	renderContent() {
		return [
			<li key="1">
				<Link to="/resources">Resources</Link>
			</li>,
			<li key="2">
				<Link to="/posts">Blog</Link>
			</li>,
			<li key="3">
				<Link to="/playgrounds">JS Playgrounds</Link>
			</li>
		];
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/landing' : '/'}
						className="left brand-logo"
					>
						<img className="nav-logo circle" src={Logo} />
					</Link>
					<ul className="right">{this.renderAuthContent()}</ul>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
