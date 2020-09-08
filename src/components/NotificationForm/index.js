import React from "react";
import PropTypes from "prop-types";

import { CgClose } from "react-icons/cg";
import "./style.scss";

const NotificationForm = ({ question, image, handleClick }) => {
  return (
    <div class="form" style={{ backgroundImage: `url(/images/${image})` }}>
      <h1>{question}</h1>
      <a href="#">Submit a Name</a>
    </div>
  );
};

NotificationForm.propTypes = {
  question: PropTypes.object,
  image: PropTypes.string,
  handleClick: PropTypes.func,
};

export default NotificationForm;
