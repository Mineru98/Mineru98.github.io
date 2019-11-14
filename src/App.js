import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="article-container">
					<Header />
					<Route exact path="/" component={Home}/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;