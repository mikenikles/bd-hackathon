import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App/App';
import Home from './components/home/home';
import About from './components/About/About';
import Login from './components/login/login';
import Project from './components/project/project';
import ProjectSetup from './components/project-setup/project-setup';
import AddTimelineEntry from './components/project/add-timeline-entry';
import Search from './components/search/search';
import ProjectList from './components/project-list/project-list';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/projects" component={ProjectList}/>
      <Route path="/project-setup" component={ProjectSetup}/>
      <Route path="/projects/:id" component={Project}/>
      <Route path="/projects/:id/add-timeline-entry" component={AddTimelineEntry}/>
      <Route path="/projects/:id/search" component={Search}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
