import React, { createRef } from 'react';
import { Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky, Container, Responsive } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './Blog.css';

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: ''
		};
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
	render() {
		const { source } = this.state;
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
												<Header as="h3">메뉴</Header>
												<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
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