import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';
import {Circle} from '../../circle';

export const Do01: React.FC = () => {
  const filter0 = getSSRId();
  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.90235C0 2.69321 1.79 0.902344 3.99807 0.902344H1486C1488.21 0.902344 1490 2.6932 1490 4.90234V834.906C1490 837.115 1488.21 838.906 1486 838.906H3.99809C1.79002 838.906 0 837.115 0 834.906V4.90235Z"
        fill="illustrationBackground020"
      />
      <Rect
        x="-2"
        y="408.902"
        width="652"
        height="23"
        fill="illustrationHighlight010"
      />
      <Rect
        x="839"
        y="408.902"
        width="652"
        height="23"
        fill="illustrationShadow010"
      />
      <g filter={`url(#filter0_${filter0})`}>
        <Circle cx="745" cy="419.902" r="148" fill="illustrationHighlight010" />
      </g>
      <Path
        d="M720.875 452.241L688.037 419.402L676.854 430.506L720.875 474.527L815.375 380.027L804.272 368.923L720.875 452.241Z"
        fill="illustrationInterface010"
      />
      <Rect
        x="479.8"
        y="523.839"
        width="11.0105"
        height="77.0736"
        rx="5.50526"
        transform="rotate(-110.192 479.8 523.839)"
        fill="illustrationHighlight010"
      />
      <Rect
        x="750"
        y="693.976"
        width="11.0105"
        height="77.0736"
        rx="5.50526"
        transform="rotate(-180 750 693.976)"
        fill="illustrationHighlight010"
      />
      <Rect
        x="560.691"
        y="671.319"
        width="11.0105"
        height="105.982"
        rx="5.50526"
        transform="rotate(-142.126 560.691 671.319)"
        fill="illustrationHighlight010"
      />
      <Rect
        x="1009.2"
        y="316.039"
        width="11.0105"
        height="77.0736"
        rx="5.50526"
        transform="rotate(69.8083 1009.2 316.039)"
        fill="illustrationHighlight010"
      />
      <Rect
        x="739"
        y="145.902"
        width="11.0105"
        height="77.0736"
        rx="5.50526"
        fill="illustrationHighlight010"
      />
      <Rect
        x="928.309"
        y="168.559"
        width="11.0105"
        height="105.982"
        rx="5.50526"
        transform="rotate(37.8744 928.309 168.559)"
        fill="illustrationHighlight010"
      />
      <defs>
        <filter
          id={`filter0_${filter0}`}
          x="581"
          y="263.902"
          width="328"
          height="328"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_12:186495"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_12:186495"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default Do01;
