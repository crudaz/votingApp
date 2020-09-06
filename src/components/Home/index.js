import React from "react";
import image from "../assets/images/one.jpg";

import "./style.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__section">
          <div>Content</div>
          <div className="home__section__closing">
            <span>CLOSING IN</span>
            <span>
              <span>22</span> days
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
