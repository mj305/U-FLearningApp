import React from "react";
import "../BookSliderComponent.css";

import imga from "../Images/fitness-girl.jpg";

const text4 = () => {
  return (
    <>
      <div className="text-for-small">
        When we go to special or fun events, we have to pay money to enter or
        for certain goods and services. What type of fun events do you like that
        cost money?
      </div>
      <img src={imga} alt="somthing" className="pic" />
    </>
  );
};

export default text4;
