import React, { useState, useCallback } from "react";

import Text1 from "./Text/text1";
import Text2 from "./Text/text2";
import Text3 from "./Text/text3";
import Text4 from "./Text/text4";
import Text5 from "./Text/text5";
import Text6 from "./Text/text6";
import Text7 from "./Text/text7";

import { useTransition, animated } from "react-spring";

import "./BookSliderComponent.css";

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text1 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text2 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text3 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text4 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text5 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text6 />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
      }}
    >
      <Text7 />
    </animated.div>
  ),
];

const BookSliderComponent = () => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 7), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
};

export default BookSliderComponent;
