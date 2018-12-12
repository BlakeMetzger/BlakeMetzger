import React, { Component } from 'react';

class SocialMediaIcons extends Component {
	render() {
		return (
			<div>
				<a href="https://github.com/BlakeMetzger" style={styles.iconStyle}>
					<i
						className="fa fa-github medium waves-effect btn-medium social waves-gray circle"
						style={(styles.iconStyle, { color: '#282d31' })}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/blakemetzger/"
					style={styles.iconStyle}>
					<i
						className="fa fa-linkedin medium waves-effect waves-light"
						style={(styles.iconStyle, { color: '#0075b0' })}
					/>
				</a>
			</div>
		);
	}
}

const styles = {
	iconStyle: {
		paddingRight: 15,
		paddingLeft: 15,
		fontSize: '4rem'
	}
};

export default SocialMediaIcons;
