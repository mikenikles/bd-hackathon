import React from 'react'
import './home.scss';
import { Link } from 'react-router'

const Home = (props) => {
  return (
    <div>
        <section className="u-padding-sides-lg">
        <h1>Project Timeline Dashboard</h1>
        <span>Add a new project to track your:</span>
        <ul className="c-list c--bullets">
            <li>Research &amp; Ideation</li>
            <li>Project Decisions</li>
            <li>Progess Timeline</li>
            <li>Project Completion</li>
        </ul>
        </section>
        <div className="t-project-setup__add">
            <Link className="c-button c--add" to="/project-setup">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
                </style><title>  Shape</title><path class="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
            <div className="u-margin-top-md">Add Project</div>
            </Link>
        </div>
    </div>
  )
}

export default Home
