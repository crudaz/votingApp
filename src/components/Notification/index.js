import React from "react";
import PropTypes from "prop-types";

import { CgClose } from "react-icons/cg";
import "./style.scss";

const Notification = ({ item, handleClick }) => {
  return (
    <div className="notification">
      <div className="notification__left">
        <span>{item.leftText[0]}</span>
        <span>{item.leftText[1]}</span>
      </div>
      <div className="notification__right">{item.rightText}</div>
      <div className="notification__action">
        <CgClose onClick={handleClick} />
      </div>
    </div>
  );
};

Notification.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Notification;
