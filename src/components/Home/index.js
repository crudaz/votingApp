import React, { useState } from "react";
import image from "../assets/images/one.jpg";
import { characters, notification } from "../../config";

import "./style.scss";

import CardHeader from "../CardHeader";
import Notification from "../Notification";

import Header from "../../components/Header";

const Home = () => {
  const [current, setCurrent] = useState(
    characters.filter((character) => character.isCurrent)[0]
  );

  const [showNotification, setShowNetnotification] = useState(true);

  const handleNotification = () => {
    setShowNetnotification(false);
  };

  return (
    <>
      <div className="home">
        <div className="home__section">
          <div className="home__section__content">
            {current && <CardHeader item={current} />}
          </div>
          <div className="home__section__closing">
            <span>CLOSING IN</span>
            <span>
              <span>22</span> days
            </span>
          </div>
        </div>
        <div className="home__content">
          {notification && showNotification && (
            <Notification
              item={notification}
              handleClick={handleNotification}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
