import React, { createRef } from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
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
					<Menu inverted stackable id="top">
						<Container>
							<Menu.Item header id="header">
								<Link to="/">Mineru Coding Blog</Link>
							</Menu.Item>
							<Menu.Item header id="header" position="right">
								<Dropdown
									floating
									labeled
									icon="world"
								>
									<Dropdown.Menu>
										<Link to="/">
											<Dropdown.Item id="selector" content="한국어" />
										</Link>
										<Link to="/en">
											<Dropdown.Item id="selector" content="English" />
										</Link>
										<Link to="/jp">
											<Dropdown.Item id="selector" content="日本語" />
										</Link>
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Item>
						</Container>
					</Menu>
				</Headeroom>
			</div>
		);
	}
}

export default Header;