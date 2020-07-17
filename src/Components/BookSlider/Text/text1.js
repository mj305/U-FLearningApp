import React from "react";
import "../BookSliderComponent.css";

import imga from "../Images/fitness-girl.jpg";

const text1 = () => {
  return (
    <>
      <div className="text">
        We use money to buy what we need or want. Some of those include housing,
        food, clothes, fun, and many other things.
        <br />
        <div className="paragraph">
          When living in a house or apartment, we have to pay the bank or owner
          money.
        </div>
      </div>
      <img src={imga} alt="somthing" className="pic" />
    </>
  );
};

export default text1;
