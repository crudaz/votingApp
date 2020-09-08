import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const NotificationForm = ({ item, handleClick }) => {
  return (
    <div
      className="form"
      style={{ backgroundImage: `url(/images/${item.image})` }}
      onClick={handleClick}
    >
      <h1>{item.question}</h1>
      <span>Submit a Name</span>
    </div>
  );
};

NotificationForm.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func,
};

export default NotificationForm;
