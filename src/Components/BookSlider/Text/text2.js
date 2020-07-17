import React from "react";
import "../BookSliderComponent.css";

import imga from "../Images/blackmoneypower-1.jpg";

const text2 = () => {
  return (
    <>
      <div className="text-for-small">
        For food, we give our money to the grocery store. What are some foods
        you like to but at the grocery store?
      </div>
      <img src={imga} alt="somthing" className="pic" />
    </>
  );
};

export default text2;
