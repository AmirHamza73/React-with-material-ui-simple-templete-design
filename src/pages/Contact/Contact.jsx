import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>Contact</h1>
    </>
  )
}

export default Contact