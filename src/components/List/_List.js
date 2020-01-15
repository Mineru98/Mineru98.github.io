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
	Header
} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import './List.css';

var view = null;
var header = null;

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
			header = <Header id="list_tab" image="/img/project.svg" content="Experience" />;
			view = (
				<List divided>
					<List.Item>
						<Link to="/list?id=2020-01-15-BoilerPlate">
							<List.Content>
								<List.Header id="blog_list_header">드러난 나의 민낯</List.Header>
								<List.Description id="blog_list_content">
									React를 처음부터 제대로 공부하면서 서비스를 만들진 않았지만
									야매로 React를 공부한지 이제 어느덧 1년이 지나면서 슬슬 나의 민낯이 들어나기 시작하는 기분이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<List.Content>
								<List.Header id="blog_list_header">자료구조란?</List.Header>
								<List.Description id="blog_list_content">
									대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<List.Content>
								<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
								<List.Description id="blog_list_content">
									군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<List.Content>
								<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
								<List.Description id="blog_list_content">준비중입니다...</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<List.Content>
								<List.Header id="blog_list_header">코딩교육</List.Header>
								<List.Description id="blog_list_content">
									2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도 시켜야하는지
									걱정을 하기 시작했다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<List.Content>
								<List.Header id="blog_list_header">알고리즘이란?</List.Header>
								<List.Description id="blog_list_content">
									컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란 말을
									자주 언급되어서 다들 알고 있는 키워드이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<List.Content>
								<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
								<List.Description id="blog_list_content">
									개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
				</List>
			);
		} else if (tag === 'tool') {
			header = <Header id="list_tab" image="/img/project.svg" content="Tool" />;
			view = (
				<List divided>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<List.Content>
								<List.Header id="blog_list_header">자료구조란?</List.Header>
								<List.Description id="blog_list_content">
									대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<List.Content>
								<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
								<List.Description id="blog_list_content">
									군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<List.Content>
								<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
								<List.Description id="blog_list_content">준비중입니다...</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<List.Content>
								<List.Header id="blog_list_header">코딩교육</List.Header>
								<List.Description id="blog_list_content">
									2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도 시켜야하는지
									걱정을 하기 시작했다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<List.Content>
								<List.Header id="blog_list_header">알고리즘이란?</List.Header>
								<List.Description id="blog_list_content">
									컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란 말을
									자주 언급되어서 다들 알고 있는 키워드이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<List.Content>
								<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
								<List.Description id="blog_list_content">
									개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
				</List>
			);
		} else if (tag === 'java') {
			header = <Header id="list_tab" image="/img/icon_java.png" content="Java" />;
			view = (
				<List divided>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<List.Content>
								<List.Header id="blog_list_header">자료구조란?</List.Header>
								<List.Description id="blog_list_content">
									대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<List.Content>
								<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
								<List.Description id="blog_list_content">
									군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<List.Content>
								<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
								<List.Description id="blog_list_content">준비중입니다...</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<List.Content>
								<List.Header id="blog_list_header">코딩교육</List.Header>
								<List.Description id="blog_list_content">
									2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도 시켜야하는지
									걱정을 하기 시작했다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<List.Content>
								<List.Header id="blog_list_header">알고리즘이란?</List.Header>
								<List.Description id="blog_list_content">
									컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란 말을
									자주 언급되어서 다들 알고 있는 키워드이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<List.Content>
								<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
								<List.Description id="blog_list_content">
									개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
				</List>
			);
		} else if (tag === 'kotlin') {
			header = <Header id="list_tab" image="/img/icon_kotlin.png" content="Kotlin" />;
			view = (
				<List divided>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<List.Content>
								<List.Header id="blog_list_header">자료구조란?</List.Header>
								<List.Description id="blog_list_content">
									대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<List.Content>
								<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
								<List.Description id="blog_list_content">
									군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<List.Content>
								<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
								<List.Description id="blog_list_content">준비중입니다...</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<List.Content>
								<List.Header id="blog_list_header">코딩교육</List.Header>
								<List.Description id="blog_list_content">
									2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도 시켜야하는지
									걱정을 하기 시작했다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<List.Content>
								<List.Header id="blog_list_header">알고리즘이란?</List.Header>
								<List.Description id="blog_list_content">
									컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란 말을
									자주 언급되어서 다들 알고 있는 키워드이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<List.Content>
								<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
								<List.Description id="blog_list_content">
									개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
				</List>
			);
		} else if (tag === 'python') {
			header = <Header id="list_tab" image="/img/icon_python.png" content="Python" />;
			view = (
				<List divided>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<List.Content>
								<List.Header id="blog_list_header">자료구조란?</List.Header>
								<List.Description id="blog_list_content">
									대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<List.Content>
								<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
								<List.Description id="blog_list_content">
									군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<List.Content>
								<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
								<List.Description id="blog_list_content">준비중입니다...</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<List.Content>
								<List.Header id="blog_list_header">코딩교육</List.Header>
								<List.Description id="blog_list_content">
									2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도 시켜야하는지
									걱정을 하기 시작했다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<List.Content>
								<List.Header id="blog_list_header">알고리즘이란?</List.Header>
								<List.Description id="blog_list_content">
									컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란 말을
									자주 언급되어서 다들 알고 있는 키워드이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<List.Content>
								<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
								<List.Description id="blog_list_content">
									개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
				</List>
			);
		} else if (tag === 'nodejs') {
			header = <Header id="list_tab" image="/img/icon_nodejs.png" content="NodeJS" />;
			view = (
				<List divided>
					<List.Item>
						<Link to="/list?id=2019-02-14-06-Algorithm02-post">
							<List.Content>
								<List.Header id="blog_list_header">자료구조란?</List.Header>
								<List.Description id="blog_list_content">
									대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-10-05-Plan">
							<List.Content>
								<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
								<List.Description id="blog_list_content">
									군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-04-CnA-Project">
							<List.Content>
								<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
								<List.Description id="blog_list_content">준비중입니다...</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-03-coding-education-post">
							<List.Content>
								<List.Header id="blog_list_header">코딩교육</List.Header>
								<List.Description id="blog_list_content">
									2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도 시켜야하는지
									걱정을 하기 시작했다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-02-Algorithm01-post">
							<List.Content>
								<List.Header id="blog_list_header">알고리즘이란?</List.Header>
								<List.Description id="blog_list_content">
									컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란 말을
									자주 언급되어서 다들 알고 있는 키워드이다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
					<List.Item>
						<Link to="/list?id=2019-01-07-01-First-post">
							<List.Content>
								<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
								<List.Description id="blog_list_content">
									개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
								</List.Description>
							</List.Content>
						</Link>
					</List.Item>
				</List>
			);
		}
		if (tag) {
			this.setState({
				isList: true
			});
		}
		if (query.id) {
			this.setState({
				isList: false
			});
		}
		const url = `https://mineru98.github.io/static/posts/${query.id}.md`;
		axios.get(url).then(res => {
			this.setState({
				source: res.data
			});
		});
	}
	componentDidMount() {
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	componentDidUpdate(prevProps, prevState) {
	}

	contextRef = createRef();

	render() {
		const { source, isList } = this.state;
		return (
			<div>
				{/* PC 화면 */}
				<Responsive minWidth={769}>
					<div className="list_background">
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
					<div className="list_container">
						{isList ? (
							<Grid centered columns={2}>
								<Grid.Column>
									<Ref innerRef={this.contextRef}>
										<Segment>
											{header}
											{view}
											<Rail position="right">
												<Sticky context={this.contextRef}>
													<Menu vertical>
														<Menu.Item>
															<Menu.Header id="list_header">Production</Menu.Header>
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
															<Menu.Header id="list_header">Language</Menu.Header>
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
						) : (
							<div className="list_container2">
								<ReactMarkdown source={source} />
							</div>
						)}
					</div>
				</Responsive>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div className="list_background">
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
					<div className="list_container">
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