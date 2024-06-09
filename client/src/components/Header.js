import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div className="logo">YanHub</div>
      <Link
        style={{ color: "white", fontWeight: "600", textDecoration: "none" }}
        to="/"
      >
        Create Task &rarr;
      </Link>
    </nav>
  );
};

export default Header;
