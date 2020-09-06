import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.scss";
import NavBar from "../NavBar";

const Header = ({ title, items }) => {
  return (
    <header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      {items && <NavBar items={items} />}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default Header;
