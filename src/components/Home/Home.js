import React from 'react';
import { Grid, Header, Image, Card, Label, Accordion } from 'semantic-ui-react';
import './Home.css';

class Home extends React.Component {
	render() {
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
					<Header as="h2" image="/img/project.svg" content="Project" />
					<Grid>
						<Grid.Row columns={4}>
							<Grid.Column>
								<Card>
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
										<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Label as="a" color="white" image>
											<Image src="img/icon_python.png" />
											Python
										</Label>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card>
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
											<Image src="img/icon_python.png" />
											Python
										</Label>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card>
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
										<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Label as="a" color="white" image>
											<Image src="img/icon_xamarin.png" />
											Xamarin.forms
										</Label>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Card>
									<Image
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										wrapped
										ui={false}
									/>
									<Card.Content>
										<Card.Header>www.cnaplus.shop</Card.Header>
										<Card.Meta>
											<span className="date">Deployed June 9, 2019</span>
										</Card.Meta>
										<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Label as="a" color="white" image>
											<Image src="img/icon_kotlin.png" />
											Kotlin
										</Label>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Header as="h2" image="/img/language.svg" content="Language" />
				</div>
			</div>
		);
	}
}

export default Home;