import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const SplashSvg = ({
  width = "100%",
  height = "100%",
}: {
  width?: string | number;
  height?: string | number;
}) => (
  <Svg
    viewBox="0 0 360 640"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
  >

    <Defs>
      <ClipPath id="screen">
        <Rect x="0" y="0" width="360" height="640" rx="40" ry="40" />
      </ClipPath>
    </Defs>

    <Rect width="360" height="640" fill="#FFF6F0" rx="40" />

    <G clipPath="url(#screen)">
      <Rect x="16" y="80" width="328" height="520" fill="#FFF1E8" rx="28" />

      <Circle cx="55" cy="165" r="105" fill="#FF7B5C" />

      <Circle cx="268" cy="205" r="72" fill="#FFB4A8" />

      <Circle cx="165" cy="380" r="125" fill="#FFDA7A" opacity={0.95} />

      <Circle cx="298" cy="410" r="48" fill="white" opacity={0.92} />
      <Circle cx="298" cy="410" r="48" fill="#FFF9F5" opacity={0.3} />

      <Circle cx="95" cy="530" r="70" fill="#1E3552" />

      <Path
        d="M 220 560 A 88 88 0 0 1 396 560 L 396 608 A 28 28 0 0 1 368 636 L 248 636 A 28 28 0 0 1 220 608 Z"
        fill="#B8E6D1"
      />
    </G>
  </Svg>
);

export default SplashSvg;
