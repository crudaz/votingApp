import React from "react";
import PropTypes from "prop-types";

import { CgClose } from "react-icons/cg";
import "./style.scss";

import CardImage from "../CardImage";

const PreviousRulings = ({ title, items }) => {
  return (
    <div className="previous">
      <span className="previous__title">{title}</span>
      <div className="previous__list">
        {items.map((item) => (
          <CardImage item={item} />
        ))}
      </div>
    </div>
  );
};

PreviousRulings.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default PreviousRulings;
