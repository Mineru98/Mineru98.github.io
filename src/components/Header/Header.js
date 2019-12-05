import React, { createRef } from 'react';
import { Menu, Container, Icon, Popup, Flag } from 'semantic-ui-react';
import Headeroom from 'react-headroom';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Language'
		};
	}

	render() {
		const contextRef = createRef();
		return (
			<div ref={contextRef}>
				<Headeroom
					wrapperStyle={{ height: '50px' }}
					style={{
						WebkitTransition: 'all .5s ease-in-out',
						MozTransition: 'all .5s ease-in-out',
						OTransition: 'all .5s ease-in-out',
						Transition: 'all .5s ease-in-out',
						backgroundColor: '#00020b'
					}}
				>
					<Menu inverted id="top">
						<Container>
							<Link to="/">
								<Menu.Item header id="header" name="Mineru Coding Blog" />
							</Link>
							<Popup
								trigger={
									<Menu.Item header id="header" position="right">
										<Icon name="language" />
									</Menu.Item>
								}
								flowing
								hideOnScroll
								hoverable
							>
								<Menu.Item header id="header">
									<Link to="/" id="selector">
										<Flag name="kr" />한국어
									</Link>
								</Menu.Item>
								<Menu.Item header id="header">
									<Link to="/en" id="selector">
										<Flag name="us" />English
									</Link>
								</Menu.Item>
								<Menu.Item header id="header">
									<Link to="/jp" id="selector">
										<Flag name="jp" />日本語
									</Link>
								</Menu.Item>
							</Popup>
							<Menu.Item header id="header">
								<a href="https://github.com/Mineru98">
									<Icon name="github" />
								</a>
							</Menu.Item>
							<Menu.Item header id="header">
								<Link to="/blog">
									<Icon name="book" />
								</Link>
							</Menu.Item>
						</Container>
					</Menu>
				</Headeroom>
			</div>
		);
	}
}

export default Header;