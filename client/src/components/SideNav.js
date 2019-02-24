import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile, isBrowser } from 'react-device-detect';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import Logo from '../assets/Logo.jpg';
import Divider from './common/Divider';
import SocialMediaIcons from './common/SocialMediaIcons';
import '../style/style.css';

export default class SideNav extends Component {
	state = { logoSize: 65 };

	componentDidMount() {
		var elem = document.querySelectorAll('.sidenav');
		var sidenav = M.Sidenav.init(elem, {
			edge: 'left',
			inDuration: 300
		});
	}

	render() {
		if (isMobile && this.state.logoSize !== 60) {
			this.setState({ logoSize: 60 });
		}

		return (
			<div
				onMouseEnter={() => {
					if (this.state.logoSize !== 75) {
						this.setState({ logoSize: 75 });
					}
				}}
				onMouseLeave={() => {
					if (this.state.logoSize === 75) {
						this.setState({ logoSize: 65 });
					}
				}}>
				<button
					data-target="slide-out"
					className="sidenav-trigger"
					style={{
						backgroundColor: 'transparent',
						border: 'none',
						cursor: 'pointer',
						margin: 'auto',
						width: this.state.logoSize
					}}>
					<img className="nav-logo circle" src={Logo} alt="" />
				</button>
				<div style={{ marginTop: '4px' }}>
					<ul
						id="slide-out"
						className="sidenav"
						style={{ textAlign: 'center' }}>
						<div className="sidenav-close" style={{ marginTop: '20%' }}>
							<Link to="/">
								<img
									className="nav-logo circle"
									src={Logo}
									alt=""
									hn
									nm
									style={{ width: '80%' }}
								/>
								<div>About Me</div>
							</Link>
						</div>
						<li>
							<Link
								to="/resources"
								className="sidenav-close"
								style={{ color: 'white' }}>
								Resources
							</Link>
						</li>
						<li>
							<Link
								to="/posts"
								className="sidenav-close"
								style={{ color: 'white' }}>
								Blog
							</Link>
						</li>
						<li>
							<Link
								to="/playgrounds"
								className="sidenav-close"
								style={{ color: 'white' }}>
								JS Playgrounds
							</Link>
						</li>
						<li style={{ paddingTop: 20 }}>
							<SocialMediaIcons />
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
