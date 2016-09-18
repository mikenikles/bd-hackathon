import React from 'react'
import { Link } from 'react-router'

const Home = (props) => {
  return (
    <div>
    <h1>Project Timeline Dashboard</h1>
        <span>Add a new project to track your:</span>
        <ul className="c-list c--bullets">
            <li>Research &amp; Ideation</li>
            <li>Project Decisions</li>
            <li> Progess Timeline</li>
            <li>Project Completion</li>
        </ul>
        <Link to="/project-setup">Project-setup</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/projects">Project-list</Link>
      <Link to="/project-setup">Project-setup</Link>
    </div>
  )
}

export default Home
