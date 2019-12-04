import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import _List from './components/List/_List';
import Blog from './components/Blog/Blog';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="article-container">
					<Header />
					<Route exact path="/" component={Home}/>
					<Route exact path="/en" component={Home}/>
					<Route exact path="/jp" component={Home}/>
					<Route exact path="/blog" component={Blog}/>
					<Route exact path="/list" component={_List}/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;