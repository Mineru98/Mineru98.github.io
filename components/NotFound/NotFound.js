import React, { useState, useEffect } from 'react';
import { Header, Grid, Responsive } from 'semantic-ui-react';
import './NotFound.css';
const isServer = typeof window === 'undefined';

export default function NotFound(props) {
	const [width, setWidth] = useState(!isServer ? window.innerWidth : null);

	useEffect(() => {
		const handleResize = () => {
			setWidth(!isServer ? window.innerWidth : null);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>
			<Responsive minWidth={769}>
				<div className="notfound background">
					<Grid>
						<Grid.Row centered columns={3}>
							<Grid.Column>
								<h1>> Hello, World!</h1>
								<h1>> This is Mineru Coding Blog.</h1>
								<h1>> </h1>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<div className="notfound container">
					<Header className="notfound-coment" as="h2">
						{'죄송합니다'}
						<br />
						{'요청하신 페이지를 찾을 수 없습니다.'}
					</Header>
				</div>
			</Responsive>
			<Responsive minWidth={1} maxWidth={768}>
				<div className="notfound background mobile">
					<Grid>
						<Grid.Row centered columns={1}>
							<Grid.Column>
								<h1>> Hello, World!</h1>
								<h1>> This is Mineru Coding Blog.</h1>
								<h1>> </h1>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<div className="notfound container">
					<Header className="notfound-coment mobile" as="h2">
						{'죄송합니다'}
						<br/>
						{'요청하신 페이지를 찾을 수 없습니다.'}
					</Header>
				</div>
			</Responsive>
		</div>
	);
}