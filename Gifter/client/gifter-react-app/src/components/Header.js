import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
            Gifter
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/add" className="nav-link">
            New Post
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users/1" className="nav-link">
            Post by User
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;