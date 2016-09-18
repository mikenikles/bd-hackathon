import React from 'react'
import { Link } from 'react-router'

const Home = (props) => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/projects">Project-list</Link>
    </div>
  )
}

export default Home
