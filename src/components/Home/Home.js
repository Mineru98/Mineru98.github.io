import React from 'react';
import { Grid, Header, Image, Card, Label, Container, Accordion } from 'semantic-ui-react';
import { Radar } from 'react-chartjs-2';
import './Home.css';

const data = {
	labels: ['Syntax', 'Debuging', 'Architecture', 'Expansion', 'CodeReview'],
	datasets: [
		{
			label: 'C',
			backgroundColor: 'rgba(20,148,255,0.2)',
			borderColor: 'rgba(20,148,255,1)',
			pointBackgroundColor: 'rgba(20,148,255,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(20,148,255,1)',
			data: [82, 81, 51, 58, 63]
		},
		{
			label: 'Java',
			backgroundColor: 'rgba(255,169,20,0.2)',
			borderColor: 'rgba(255,169,20,1)',
			pointBackgroundColor: 'rgba(1255,169,20,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,169,20,1)',
			data: [88, 90, 91, 95, 92]
		},
		{
			label: 'Python',
			backgroundColor: 'rgba(239,220,5,0.2)',
			borderColor: 'rgba(239,220,5,1)',
			pointBackgroundColor: 'rgba(239,220,5,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(239,220,5,1)',
			data: [85, 77, 67, 84, 81]
		},
		{
			label: 'JavaScript',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [86, 72, 72, 97, 88]
		}
	]
};

class Home extends React.Component {
	render() {
		const panel = [
			{
				key: 0,
				title: 'C / C++ / C#',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Combination_of_Parentheses">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Combination of Parentheses</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_cplusplus.png" /> C
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/CShap_Clock_Angle">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Calculate Clock Angle</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_csharp.png" /> C#
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 1,
				title: 'Java / Kotlin',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/HopsAndroid">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Android App Project</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Dictionary Random with Kotlin</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 2,
				title: 'JavaScript / NodeJS / ReactJS',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Division_PC_Mobile">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Distinguish PC or Mobile</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_js.png" /> JavaScript
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Dictionary Random with NoteJS</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_nodejs.png" /> NodeJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 3,
				title: 'Python',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={3}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/AutoBench">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Auto Bench</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/KoreaMockTestBot">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Korea Mock Test Bot</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Sep 12, 2019</span>
											</Card.Meta>
											<Card.Description>Korea Mock Test Bot Result Searching </Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Fibonacci-Even-Sum">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Fibonacci</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Sep 12, 2019</span>
											</Card.Meta>
											<Card.Description>Fibonacci</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			}
		];
		return (
			<div>
				<div className="home_background">
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
				<div className="home_container">
					<Container textAlign="left">
						<Header id="default" as="h2" image="/img/project.svg" content="Project" />
						<p id="default" className="description">
							지금까지 제가 해왔던 작업물들입니다.
						</p>
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://Noticend.com">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Noticend.com</Card.Header>
											<Card.Meta>
												<span className="date">Deployed March 20, 2018</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_xamarin.png" /> Xamarin.forms
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="http://cnaplus.shop">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>cnaplus.shop</Card.Header>
											<Card.Meta>
												<span className="date">Deployed June 9, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/AutoBench">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Auto Bench</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Apr 7, 2019</span>
											</Card.Meta>
											<Card.Description>
												Matthew is a musician living in Nashville.
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/KoreaMockTestBot">
										<Image
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>Korea Mock Test Bot</Card.Header>
											<Card.Meta>
												<span className="date">Deployed Sep 12, 2019</span>
											</Card.Meta>
											<Card.Description>Korea Mock Test Bot Result Searching </Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
					<Container textAlign="left">
						<Header id="default" as="h2" image="/img/language.svg" content="My Code Skil" />
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Radar data={data} height={100} />
								</Grid.Column>
							</Grid.Row>
							<Grid.Row columns={1}>
								<Grid.Column>
									<Accordion defaultActiveIndex={[]} panels={panel} exclusive={false} />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</div>
		);
	}
}
export default Home;