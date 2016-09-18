import React from 'react'
import { Link } from 'react-router'

const Home = (props) => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/project">Project</Link>
      <Link to="/project-list">Project-list</Link>
    </div>
  )
}

export default Home
