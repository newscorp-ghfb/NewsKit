import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const HeroCardIllustration: React.FC = () => {
  const filter0 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="476.131"
          y="131.036"
          width="390.869"
          height="497.893"
          rx="12"
          fill="illustrationPalette040"
        />
        <Path
          d="M476 141C476 134.373 481.373 129 488 129H855C861.627 129 867 134.373 867 141V339H476V141Z"
          fill="illustrationPalette060"
        />
        <Rect
          x="507.536"
          y="370.496"
          width="325.822"
          height="20"
          rx="10"
          fill="illustrationInterface020"
        />
        <Rect
          x="507.536"
          y="413.676"
          width="213.943"
          height="20"
          rx="10"
          fill="illustrationInterface020"
        />
        <Rect
          x="507.536"
          y="496.113"
          width="325.822"
          height="11.7767"
          rx="5.88835"
          fill="illustrationInterface020"
        />
        <Rect
          x="507.536"
          y="523.592"
          width="325.822"
          height="11.7767"
          rx="5.88835"
          fill="illustrationInterface020"
        />
        <Rect
          x="507.536"
          y="468.633"
          width="325.822"
          height="11.7767"
          rx="5.88835"
          fill="illustrationInterface020"
        />
        <Rect
          x="507.536"
          y="551.071"
          width="164.874"
          height="11.7767"
          rx="5.88835"
          fill="illustrationInterface020"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="460"
          y="121"
          width="423"
          height="531.928"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default HeroCardIllustration;
