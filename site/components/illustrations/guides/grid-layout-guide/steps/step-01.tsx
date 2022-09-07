import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Step01: React.FC = () => {
  const filter0 = getSSRId();

  return (
    <Svg
      width="1345"
      height="759"
      viewBox="0 0 1345 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1345" height="759" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="454"
          y="62.9143"
          width="437.424"
          height="636.086"
          rx="13.4248"
          fill="illustrationInterface010"
        />
        <Path
          d="M454 74.4248C454 67.0105 460.01 61 467.425 61H877.999C885.413 61 891.424 67.0105 891.424 74.4248V344.321H454V74.4248Z"
          fill="illustrationInterface030"
        />
        <Rect
          x="489.28"
          y="391"
          width="364.507"
          height="22.3746"
          rx="11.1873"
          fill="illustrationPalette020"
        />
        <Rect
          x="489.28"
          y="439.306"
          width="239.345"
          height="22.3746"
          rx="11.1873"
          fill="illustrationPalette020"
        />
        <Rect
          x="489.279"
          y="524.947"
          width="364.507"
          height="13.175"
          rx="6.58748"
          fill="illustrationInterface020"
        />
        <Rect
          x="489.28"
          y="494.202"
          width="364.507"
          height="13.175"
          rx="6.58748"
          fill="illustrationInterface020"
        />
        <Rect
          x="489.279"
          y="556"
          width="184.45"
          height="13.175"
          rx="6.58748"
          fill="illustrationInterface020"
        />
        <Path
          d="M683 644.5C683 631.521 693.521 621 706.5 621H830.5C843.479 621 854 631.521 854 644.5C854 657.479 843.479 668 830.5 668H706.5C693.521 668 683 657.479 683 644.5Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="436.1"
          y="52.0502"
          width="473.223"
          height="673.799"
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
          <feOffset dy="8.94985" />
          <feGaussianBlur stdDeviation="8.94985" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2001_73156"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2001_73156"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Step01;
