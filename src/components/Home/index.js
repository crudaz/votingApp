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
  const [current, setCurrent] = useState(
    characters.filter((character) => character.isCurrent)[0]
  );

  const [previous, setPrevious] = useState(
    characters.filter((character) => !character.isCurrent)
  );

  const [showNotification, setShowNetnotification] = useState(true);

  const handleNotification = () => {
    setShowNetnotification(false);
  };

  return (
    <>
      <div className="home">
        <div
          className="home__section"
          style={{ backgroundImage: `url(/images/${current.photo})` }}
        >
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
          {previous && (
            <PreviousRulings title={previousText.title} items={previous} />
          )}

          {notificationForm && (
            <NotificationForm
              question={notificationForm.question}
              image={notificationForm.image}
            />
          )}

          <div class="horizontal_dotted_line"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
