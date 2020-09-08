import React from "react";
import PropTypes from "prop-types";

import { GrFacebook, GrTwitter } from "react-icons/gr";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <span>Terms and Conditions</span>
        <span>Privacity Policy</span>
        <span>Contact US</span>
      </div>
      <div>
        <span>Follow Us</span>
        <GrFacebook />
        <GrTwitter />
      </div>
    </div>
  );
};

Footer.propTypes = {
  items: PropTypes.array,
};

export default Footer;
