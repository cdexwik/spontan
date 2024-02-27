import React from "react";
import { Dimensions } from "react-native";
import Svg, { G, Rect } from "react-native-svg";

const DashedLine = () => {
  let width = Dimensions.get("window").width;
  {
    if (width > 480) {
      width = 480 * 0.96;
    } else {
      width = width * 0.88;
    }
  }
  const spacing = 16;

  const dashes = new Array(Math.floor(width / spacing)).fill(null);
  return (
    <Svg height="11" width="98%">
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            x="12"
            y="5"
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
