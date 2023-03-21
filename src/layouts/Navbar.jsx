import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="overlay"></div>
      <div class="container">
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/show-books" className="nav-link2">
                Show Books
              </Link>
            </li>
            <li>
              <Link to="/add-book" className="nav-link3">
                Add Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
