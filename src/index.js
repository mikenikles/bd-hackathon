import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App/App';
import About from './components/About/About';
import Login from './components/login/login';
import Project from './components/project/project';
import ProjectList from './components/project-list/project-list';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/project" component={Project}/>
    <Route path="/project-list" component={ProjectList}/>
  </Router>,
  document.getElementById('root')
);
