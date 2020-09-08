import React from "react";
import PropTypes from "prop-types";

import { FaWikipediaW, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import "./style.scss";

const CardHeader = ({ item, handleClick }) => {
  return (
    <div className="card">
      <div className="card__section">
        <span>What's your opinion on</span>
        <span className="card__section__title">{item.name}?</span>
        <span className="card__section__opinion">{item.opinion}</span>
        <div className="card__section__moreInfo">
          <FaWikipediaW />
          <a href={item.moreInfo}>More Information</a>
        </div>
        <span className="card__section__question">What's Your Verdict?</span>
      </div>
      <div className="card__actions">
        <div onClick={() => handleClick(item, "up")}>
          <FaThumbsUp />
        </div>
        <div onClick={() => handleClick(item, "down")}>
          <FaThumbsDown />
        </div>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func,
};

export default CardHeader;
