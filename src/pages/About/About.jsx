import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>About</h1>
    </div>
  )
}

export default About