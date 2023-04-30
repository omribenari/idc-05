import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"} style={{ margin: 30 }}>
        Home
      </Link>
      <Link to={"/about"} style={{ margin: 30 }}>
        About Me
      </Link>
      <Link to={"/new"} style={{ margin: 30 }}>
        Create
      </Link>
    </div>
  );
};

export default Header;
