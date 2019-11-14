import React from 'react';
import { Responsive } from 'semantic-ui-react';
import Disqus from 'disqus-react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import AnimatedNumber from 'react-animated-number';
import "./Home.css";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: '',
			value: 5000
		};
	}
	

	componentDidMount() {
		const url = `https://mineru98.github.io/ReactDeploy/static/posts/test.md`;
		axios.get(url).then(res => {
			this.setState({
				source: res.data
			});
		});
	}

	render() {
		const { source } = this.state;
		const disqusShortname = 'https-mineru98-github-io'; //found in your Disqus.com dashboard
		const disqusConfig = {
			url: 'https://mineru98.github.io/ReactDeploy', //this.props.pageUrl
			identifier: 'article-id', //this.props.uniqueId
			title: 'Title of Your Article' //this.props.title
		};

		return (
			<div className="home_container">
				<AnimatedNumber
							component="text"
							value={value}
							style={{
								transition: '0.8s ease-out',
								fontSize: 35,
								transitionProperty: 'background-color, color, opacity'
							}}
							stepPrecision={0}
							duration={1000}
						/>
				<ReactMarkdown source={source} />
				<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
			</div>
		);
	}
}

export default Home;