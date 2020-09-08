import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import CardImage from "../CardImage";

const PreviousRulings = ({ title, items, handleClick }) => {
  return (
    <div className="previous">
      <span className="previous__title">{title}</span>
      <div className="previous__list">
        {items.map((item) => (
          <CardImage key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

PreviousRulings.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  handleClick: PropTypes.func,
};

export default PreviousRulings;
