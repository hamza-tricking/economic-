import React from "react";
import "../../styles/navbar.css";

const Group13 = ({
  width = "223",
  height = "103",
  viewBox = "0 0 223 103",
  className,
  text,
  x,
  y,
}) => {
  return (
    <svg
      className={className}
      width={width} // Control width
      height={height} // Control height
      viewBox={viewBox} // Control viewBox dynamically
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="black"
            floodOpacity="0.2"
          />
        </filter>
      </defs>
      <path
        d="M1 30.5V1H226V30.5M1 30.5L54 67H170.5L226 30.5M1 30.5L52 56.5H170.5L226 30.5"
        stroke="black"
        filter="url(#shadow)"
      />
      <text
        className="text"
        x={x ? x : "50"}
        y={y ? y : "40"}
        fill="black"
        fontSize="25"
        fontFamily="arabic-font"
        filter="url(#shadow)">
        {text}
      </text>
    </svg>
  );
};

export default Group13;
