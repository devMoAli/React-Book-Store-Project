import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link1">Home</Link>
      <Link to="/show-books" className="nav-link2">Show Books</Link>
      <Link to="/add-book" className="nav-link3">Add Book</Link>
    </nav>
  )
}

export default Navbar