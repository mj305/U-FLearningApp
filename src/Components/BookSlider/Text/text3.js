import React from "react";
import "../BookSliderComponent.css";

import imga from "../Images/fitness-girl.jpg";

const text3 = () => {
  return (
    <>
      <div className="text-for-small">
        To keep ourselves covered and warm, we give our money to clothing
        stores.{" "}
      </div>
      <img src={imga} alt="somthing" className="pic" />
    </>
  );
};

export default text3;
