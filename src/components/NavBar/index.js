import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.scss";

const NavBar = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <Link to={item.link}>{item.name}</Link>
        ))}
        <i class="search"></i>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  items: PropTypes.array,
};

export default NavBar;
