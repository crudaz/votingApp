import React from "react";
import PropTypes from "prop-types";

import { FaWikipediaW, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import "./style.scss";

const CardHeader = ({ item }) => {
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
        <div>
          <FaThumbsUp />
        </div>
        <div>
          <FaThumbsDown />
        </div>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  item: PropTypes.object,
};

export default CardHeader;
