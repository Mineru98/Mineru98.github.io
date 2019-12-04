import React, { createRef } from 'react';
import {
	Grid,
	Header,
	Image,
	Rail,
	Ref,
	Segment,
	Sticky,
	Container,
	Menu,
	Responsive
} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './Blog.css';

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: '',
			activeItem: ''
		};
		this.handleItemClick.bind(this)
	}

	componentDidMount() {
		const url = `https://mineru98.github.io/static/posts/2019-01-07-02-Algorithm01-post.md`;
		axios.get(url).then(res => {
			this.setState({
				source: res.data
			});
		});
	}
	contextRef = createRef()

	handleItemClick = (name) => this.setState({ activeItem: name })

	render() {
		const { source, activeItem } = this.state;
		return (
			<div>
				{/* PC 화면 */}
				<Responsive minWidth={769}>
					<div className="blog_background">
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
					<div className="blog_container">
						<Grid centered columns={2}>
							<Grid.Column>
								<Ref innerRef={this.contextRef}>
									<Segment>
										<Container textAlign="left">
											<ReactMarkdown source={source} />
										</Container>
										<Rail position="right">
											<Sticky context={this.contextRef}>
												<Menu vertical>
													<Menu.Item>
														<Menu.Header>Products</Menu.Header>
														<Menu.Menu>
															<Menu.Item
																name="enterprise"
																active={activeItem === 'enterprise'}
																onClick={this.handleItemClick}
															/>
															<Menu.Item
																name="consumer"
																active={activeItem === 'consumer'}
																onClick={this.handleItemClick}
															/>
														</Menu.Menu>
													</Menu.Item>
													<Menu.Item>
														<Menu.Header>CMS Solutions</Menu.Header>
														<Menu.Menu>
															<Menu.Item
																name="rails"
																active={activeItem === 'rails'}
																onClick={this.handleItemClick}
															/>
															<Menu.Item
																name="python"
																active={activeItem === 'python'}
																onClick={this.handleItemClick}
															/>
															<Menu.Item
																name="php"
																active={activeItem === 'php'}
																onClick={this.handleItemClick}
															/>
														</Menu.Menu>
													</Menu.Item>
													<Menu.Item>
														<Menu.Header>Hosting</Menu.Header>
														<Menu.Menu>
															<Menu.Item
																name="shared"
																active={activeItem === 'shared'}
																onClick={this.handleItemClick}
															/>
															<Menu.Item
																name="dedicated"
																active={activeItem === 'dedicated'}
																onClick={this.handleItemClick}
															/>
														</Menu.Menu>
													</Menu.Item>
													<Menu.Item>
														<Menu.Header>Support</Menu.Header>
														<Menu.Menu>
															<Menu.Item
																name="email"
																active={activeItem === 'email'}
																onClick={this.handleItemClick}
															>
																E-mail Support
															</Menu.Item>
															<Menu.Item
																name="faq"
																active={activeItem === 'faq'}
																onClick={this.handleItemClick}
															>
																FAQs
															</Menu.Item>
														</Menu.Menu>
													</Menu.Item>
												</Menu>
											</Sticky>
										</Rail>
									</Segment>
								</Ref>
							</Grid.Column>
						</Grid>
					</div>
				</Responsive>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div className="blog_background">
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
					<div className="blog_container">
						<Container textAlign="left">
							<ReactMarkdown source={source} />
						</Container>
					</div>
				</Responsive>
			</div>
		);
	}
}
export default Blog;