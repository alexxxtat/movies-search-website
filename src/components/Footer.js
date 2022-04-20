import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="tag" onClick={() => (window.location.href = "/")}>
        Movie Searcher
      </Link>
      <p>Alex Chou </p>
    </div>
  );
};

export default Footer;
