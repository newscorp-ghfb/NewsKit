import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../../svg';
import {Path} from '../../../../path';
import {Rect} from '../../../../rect';

export const Considerations: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();
  const filter0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path d="M0 0H1490V838H0V0Z" fill="illustrationInterface020" />
        <g clipPath={`url(#${clip1})`}>
          <Path
            d="M368.629 -218.714C368.629 -241.106 386.799 -259.259 409.212 -259.259H1080.66C1103.08 -259.259 1121.25 -241.106 1121.25 -218.714V1106.6C1121.25 1128.99 1103.08 1147.14 1080.66 1147.14H409.212C386.799 1147.14 368.629 1128.99 368.629 1106.6V-218.714Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M425 -26.1064C425 -35.9904 431.315 -44.0029 439.104 -44.0029H1040.9C1048.69 -44.0029 1055 -35.9904 1055 -26.1064V111.101C1055 120.985 1048.69 128.997 1040.9 128.997H439.104C431.315 128.997 425 120.985 425 111.101V-26.1064Z"
            fill="illustrationInterface020"
          />
          <g filter={`url(#${filter0})`}>
            <Rect
              x="430"
              y="212.999"
              width="630"
              height="45"
              rx="22.5"
              fill="illustrationInterface060"
            />
            <Rect
              x="433"
              y="331.999"
              width="84"
              height="84"
              rx="42"
              fill="illustrationInterface010"
              stroke="#41A0AA"
              stroke-width="6"
            />
            <Rect
              x="433"
              y="492.999"
              width="84"
              height="84"
              rx="42"
              stroke="#41A0AA"
              stroke-width="6"
            />
            <Rect
              x="448"
              y="507.999"
              width="54"
              height="54"
              rx="27"
              fill="illustrationInterface060"
            />
            <Rect
              x="432"
              y="653.999"
              width="84"
              height="84"
              rx="42"
              fill="illustrationInterface010"
              stroke="#41A0AA"
              stroke-width="6"
            />
            <Rect
              x="561"
              y="363.999"
              width="327"
              height="19"
              rx="9.5"
              fill="illustrationInterface060"
            />
            <Rect
              x="561"
              y="524.999"
              width="327"
              height="19"
              rx="9.5"
              fill="illustrationInterface060"
            />
            <Rect
              x="560"
              y="685.999"
              width="327"
              height="19"
              rx="9.5"
              fill="illustrationInterface060"
            />
          </g>
        </g>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M406.262 -297H1083.63C1125.19 -297 1158.89 -263.336 1158.89 -221.809V1110.48C1158.89 1152.01 1125.19 1185.67 1083.63 1185.67H406.262C364.696 1185.67 331 1152.01 331 1110.48V-221.809C331 -263.336 364.696 -297 406.262 -297ZM406.262 -259.405C385.479 -259.405 368.631 -242.572 368.631 -221.809V1110.48C368.631 1131.24 385.479 1148.08 406.262 1148.08H1083.63C1104.41 1148.08 1121.26 1131.24 1121.26 1110.48V-221.809C1121.26 -242.572 1104.41 -259.405 1083.63 -259.405H406.262Z"
          fill="illustrationInterface060"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="423.994"
          y="210.496"
          width="641.011"
          height="538.011"
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
          <feOffset dy="2.50286" />
          <feGaussianBlur stdDeviation="2.50286" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_28999"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_28999"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            x="368.629"
            y="-259.259"
            width="752.617"
            height="1407.48"
            rx="13.9863"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Considerations;
