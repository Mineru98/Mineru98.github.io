import React, { createRef } from 'react';
import {
	Grid,
	Rail,
	Ref,
	Segment,
	Sticky,
	Container,
	Menu,
	Responsive,
	List,
	Image
} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import './List.css';

var view = null;

class _List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: '',
			isList: true
		};
	}
	UNSAFE_componentWillMount() {
		const tag = this.props.match.params.tag;
		const query = queryString.parse(this.props.location.search);
		if (tag === 'experience') {
			view = (
				<List divided relaxed>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<Grid columns={2}>
								<Grid.Row stretched>
									<Grid.Column width={4}>
										<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Grid.Column>
									<Grid.Column width={12}>
										<div className="list_header">제목 1</div>
										<div className="list_content">
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<Grid columns={2}>
								<Grid.Row stretched>
									<Grid.Column width={4}>
										<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Grid.Column>
									<Grid.Column width={12}>
										<div className="list_header">제목 1</div>
										<div className="list_content">
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<Grid columns={2}>
								<Grid.Row stretched>
									<Grid.Column width={4}>
										<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Grid.Column>
									<Grid.Column width={12}>
										<div className="list_header">제목 1</div>
										<div className="list_content">
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<Grid columns={2}>
								<Grid.Row stretched>
									<Grid.Column width={4}>
										<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Grid.Column>
									<Grid.Column width={12}>
										<div className="list_header">제목 1</div>
										<div className="list_content">
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<Grid columns={2}>
								<Grid.Row stretched>
									<Grid.Column width={4}>
										<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Grid.Column>
									<Grid.Column width={12}>
										<div className="list_header">제목 1</div>
										<div className="list_content">
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<Grid columns={2}>
								<Grid.Row stretched>
									<Grid.Column width={4}>
										<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Grid.Column>
									<Grid.Column width={12}>
										<div className="list_header">제목 1</div>
										<div className="list_content">
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
											내용을 요약하자면.......<br />
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</List.Item>
				</List>
			);
		} else if (tag === 'tool') {
			view = (
				<List divided relaxed>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
							<List.Description as="a">Updated 10 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
							<List.Description as="a">Updated 22 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
							<List.Description as="a">Updated 34 mins ago</List.Description>
						</List.Content>
					</List.Item>
				</List>
			);
		} else if (tag === 'java') {
			view = (
				<List divided relaxed>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
							<List.Description as="a">Updated 10 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
							<List.Description as="a">Updated 22 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
							<List.Description as="a">Updated 34 mins ago</List.Description>
						</List.Content>
					</List.Item>
				</List>
			);
		} else if (tag === 'kotlin') {
			view = (
				<List divided relaxed>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
							<List.Description as="a">Updated 10 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
							<List.Description as="a">Updated 22 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
							<List.Description as="a">Updated 34 mins ago</List.Description>
						</List.Content>
					</List.Item>
				</List>
			);
		} else if (tag === 'python') {
			view = (
				<List divided relaxed>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
							<List.Description as="a">Updated 10 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
							<List.Description as="a">Updated 22 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
							<List.Description as="a">Updated 34 mins ago</List.Description>
						</List.Content>
					</List.Item>
				</List>
			);
		} else if (tag === 'nodejs') {
			view = (
				<List divided relaxed>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
							<List.Description as="a">Updated 10 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
							<List.Description as="a">Updated 22 mins ago</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="github" size="large" verticalAlign="middle" />
						<List.Content>
							<List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
							<List.Description as="a">Updated 34 mins ago</List.Description>
						</List.Content>
					</List.Item>
				</List>
			);
		}
		if (tag) {
			console.log('tag');
			this.setState({
				isList: true
			});
		}
		if (query.id) {
			console.log('id');
			this.setState({
				isList: false
			});
		}
		console.log(query);
		const url = `https://mineru98.github.io/static/posts/${query.id}.md`;
		axios.get(url).then(res => {
			this.setState({
				source: res.data
			});
		});
	}
	componentDidMount() {
		console.log('Component Did MOUNT!');
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('Component Did Update!');
		console.log(this.state.isList);
	}

	contextRef = createRef();

	render() {
		const { source, isList } = this.state;
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
											{isList ? view : <ReactMarkdown source={source} />}
										</Container>
										<Rail position="right">
											<Sticky context={this.contextRef}>
												<Menu vertical>
													<Menu.Item>
														<Menu.Header id="blog_header">Production</Menu.Header>
														<Menu.Menu>
															<Menu.Item as="a">
																<Link to="/list/experience">Experience (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link to="/list/tool">Tool (0)</Link>
															</Menu.Item>
														</Menu.Menu>
													</Menu.Item>
													<Menu.Item>
														<Menu.Header id="blog_header">Language</Menu.Header>
														<Menu.Menu>
															<Menu.Item as="a">
																<Link to="/list/java">Java (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link to="/list/kotlin">Kotlin (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link to="/list/python">Python (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link to="/list/nodejs">NodeJS (0)</Link>
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
export default _List;