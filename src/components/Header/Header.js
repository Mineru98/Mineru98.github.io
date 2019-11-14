import React, { createRef } from 'react';
import { Grid } from 'semantic-ui-react';
import Headeroom from 'react-headroom';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends React.Component {
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
					<div className="top">
						<Grid>
							<Grid.Row>
								<Grid.Column width={8}>
									<Link to="/">
										<span>Mineru Coding</span> <span>Blog</span>
									</Link>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
				</Headeroom>
			</div>
		);
	}
}

export default Header;
