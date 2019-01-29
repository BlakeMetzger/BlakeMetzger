import React from 'react';
import { Link } from 'react-router-dom';
import PostBoard from './common/PostBoard';

const Landing = () => {
	return (
		<PostBoard style={{ width: '70%' }}>
			<div
				style={{ paddingLeft: '3%', paddingRight: '3%', paddingBottom: '1%' }}>
				<div style={{ margin: 0 }}>
					<h4 style={{ color: '#2b2b2b' }}>
						Hello World! My name is Blake Metzger.
					</h4>
					<p style={{ color: '#2b2b2b' }}>
						I am a self-taught software developer. I really enjoy building web
						and mobile applications with React, React-Native, and Javascript. I
						am building this website as a tool for growth. A tool for growing
						developers like myself to have quick access to the best resources I
						have found for learning software development. Come and join me on my
						journey and let's learn together! Visit my
						<Link to="/resources" target="_blank" style={{ color: 'peru' }}>
							{' '}
							resources{' '}
						</Link>
						page for a list of resources to get you started on you started on
						your path. The source code for this website is available at my
						<a
							href="https://github.com/BlakeMetzger"
							target="_blank"
							style={{ color: 'peru' }}>
							{' '}
							GitHub{' '}
						</a>
						open source.
					</p>
				</div>
			</div>
		</PostBoard>
	);
};

export default Landing;
