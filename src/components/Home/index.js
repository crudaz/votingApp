import React, { useState } from "react";
import image from "../assets/images/one.jpg";
import { characters } from "../../config";

import "./style.scss";
import CardHeader from "../CardHeader";

const Home = () => {
  const [current, setCurrent] = useState(
    characters.filter((character) => character.isCurrent)[0]
  );

  return (
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
    </div>
  );
};

export default Home;
