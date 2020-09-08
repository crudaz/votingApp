import React, { useState } from "react";
import {
  characters,
  notification,
  previousText,
  notificationForm,
} from "../../config";

import "./style.scss";

// Components
import CardHeader from "../CardHeader";
import Notification from "../Notification";
import PreviousRulings from "../PreviousRulings";
import NotificationForm from "../NotificationForm";
import Footer from "../Footer";

const Home = () => {
  const [current] = useState(
    characters.filter((character) => character.isCurrent)[0]
  );

  const [previous] = useState(
    characters.filter((character) => !character.isCurrent)
  );

  const [showNotification, setShowNetnotification] = useState(true);

  const handleNotification = () => {
    setShowNetnotification(false);
  };

  const handleRulings = () => {
    console.log("view Report");
  };

  const handleSubmitForm = () => {
    console.log("submit form");
  };

  const handleVote = (item, vote) => {
    console.log("item: ", item);
    console.log("vote: ", vote);
  };

  return (
    <>
      <div className="home">
        {current && <CardHeader item={current} handleClick={handleVote} />}
        <div
          className="home__section"
          style={{ backgroundImage: `url(/images/${current.photo})` }}
        >
          <div className="home__section__content"></div>
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
          {previous && (
            <PreviousRulings
              title={previousText.title}
              items={previous}
              handleClick={handleRulings}
            />
          )}

          {notificationForm && (
            <NotificationForm
              item={notificationForm}
              handleClick={handleSubmitForm}
            />
          )}

          <div className="horizontal_dotted_line"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
