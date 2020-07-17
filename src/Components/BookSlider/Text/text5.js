import React from "react";
import "../BookSliderComponent.css";

import imga from "../Images/fitness-girl.jpg";

const text5 = () => {
  return (
    <>
      <div className="text-for-small">
        Sometimes, we use money to help our family, friends, and other people.
        Can you think of some ways you can use money to help others?
      </div>
      <img src={imga} alt="somthing" className="pic" />
    </>
  );
};

export default text5;
