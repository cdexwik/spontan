// @src/App.js
import React from "react";
import { Dimensions } from "react-native";
import Svg, { G, Rect } from "react-native-svg";

const DashedLine = () => {
  const { width } = Dimensions.get("screen");
  const spacing = 16;

  const dashes = new Array(Math.floor(width / spacing)).fill(null);
  return (
    <Svg height="11" width="100%">
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            x="12"
            y="10"
            width="6"
            height="1"
            fill="#A0A0A0"
            translateX={spacing * index}
          />
        ))}
      </G>
    </Svg>
  );
};

export default DashedLine;
