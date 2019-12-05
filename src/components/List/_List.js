import React, { createRef } from 'react';
import { Grid, Rail, Ref, Segment, Sticky, Container, Menu, Responsive, List } from 'semantic-ui-react';
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
		if(tag){
			console.log("tag");
			this.setState({
				isList: true
			});
		}
		if(query.id){
			console.log("id");
			this.setState({
				isList: false
			});
		}
		console.log(query);
		const url = `https://mineru98.github.io/static/posts/2019-01-07-02-Algorithm01-post.md`;
		axios.get(url).then(res => {
			this.setState({
				source: res.data
			});
		});
  }
	componentDidMount() {
    console.log('Component Did MOUNT!')
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true;
  }
	componentDidUpdate(prevProps, prevState) {
		console.log('Component Did Update!')
		console.log(this.state.isList)
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