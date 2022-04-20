import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="left-links">
        <Link
          to="/"
          className="tag"
          onClick={() => (window.location.href = "/")}
        >
          Movie Searcher
        </Link>
      </div>
      <div className="right-links">
        <Link
          to="/"
          className="tag"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="tag"
          onClick={() => (window.location.href = "/about")}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
