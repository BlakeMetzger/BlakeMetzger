import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import Logo from '../assets/Logo.jpg';
import Divider from './common/Divider';
import SocialMediaIcons from './common/SocialMediaIcons';
import '../style/style.css';

export default class SideNav extends Component {
	componentDidMount() {
		var elem = document.querySelectorAll('.sidenav');
		var instance = M.Sidenav.init(elem, {
			edge: 'left',
			inDuration: 300
		});
	}

	render() {
		return (
			<div>
				<a href="#" data-target="slide-out" className="sidenav-trigger">
					<img className="nav-logo circle" src={Logo} />
				</a>
				<ul id="slide-out" className="sidenav" style={{ textAlign: 'center' }}>
					<li />
					<li>
						<a href="#!">
							<i className="material-icons">cloud</i>First Link With Icon
						</a>
					</li>
					<li>
						<a href="#!">Second Link</a>
					</li>
					<li style={{ textAlign: 'center' }}>
						<Divider />
					</li>
					<li>
						<a className="subheader">Subheader</a>
					</li>
					<li>
						<a className="waves-effect" href="#!">
							Third Link With Waves
						</a>
					</li>
					<li>
						<SocialMediaIcons />
					</li>
				</ul>
			</div>
		);
	}
}
