import React from "react";
import PropTypes from "prop-types";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import "./style.scss";

const CardImage = ({ item }) => {
  return (
    <div
      className="card-image"
      key={item.id}
      style={{ backgroundImage: `url(../images/${item.photo})` }}
    >
      <div className="card-image__section">
        <div className="card-image__section__block">
          <div
            className="rating"
            style={{
              backgroundColor:
                item.like > item.dislike
                  ? "rgba(28, 187, 180, 0.8)"
                  : "rgba(255, 173, 29, 0.8)",
            }}
          >
            {item.like > item.dislike ? <FaThumbsUp /> : <FaThumbsDown />}
          </div>
          <span className="title">{item.name}</span>
        </div>
        <span className="card-image__section__opinion">{item.opinion}</span>
        <div className="card-image__section__moreInfo">
          <a href={item.moreInfo}>View Full Report</a>
        </div>
      </div>
      <div className="card-image__actions">
        <div style={{ width: item.like }}>
          <FaThumbsUp /> {item.like}
        </div>
        <div style={{ width: item.dislike }}>
          {item.dislike} <FaThumbsDown />
        </div>
      </div>
    </div>
  );
};

CardImage.propTypes = {
  item: PropTypes.object,
};

export default CardImage;
