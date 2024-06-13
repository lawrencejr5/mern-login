import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav>
      <div className="logo">YanHub</div>
      {
        props.admin && <Link
        style={{ color: "white", fontWeight: "600", textDecoration: "none" }}
        to="/"
      >
        Create Task &rarr;
      </Link>
      }
      
  
    </nav>
  );
};

export default Header;
