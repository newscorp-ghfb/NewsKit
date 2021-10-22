import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';
import {Circle} from '../../circle';

export const InlineMessageHero: React.FC = () => {
  const clip0 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1344" height="759" fill="illustrationBackground020" />
        <Path
          d="M240.5 287C240.5 274.021 251.021 263.5 264 263.5H1084C1096.98 263.5 1107.5 274.021 1107.5 287V473C1107.5 485.979 1096.98 496.5 1084 496.5H264C251.021 496.5 240.5 485.979 240.5 473V287Z"
          fill="illustrationPalette040"
          stroke="#577FFB"
        />
        <Rect
          x="422"
          y="417"
          width="610"
          height="16"
          rx="8"
          fill="illustrationPalette010"
        />
        <Rect
          x="422"
          y="374"
          width="610"
          height="16"
          rx="8"
          fill="illustrationPalette010"
        />
        <Rect x="422" y="332" width="319" height="17" rx="8.5" fill="white" />
        <Circle cx="342" cy="347" r="39" fill="illustrationPalette010" />
        <g opacity="0.4">
          <Rect
            width="691.2"
            height="26.4"
            rx="13.2"
            transform="matrix(-1 0 0 1 1017.2 94.8008)"
            fill="illustrationShadow010"
          />
          <Rect
            width="691.2"
            height="26.4"
            rx="13.2"
            transform="matrix(-1 0 0 1 1017.2 33.1992)"
            fill="illustrationShadow010"
          />
          <Rect
            width="347.774"
            height="26.4"
            rx="13.2"
            transform="matrix(-1 0 0 1 673.773 156.4)"
            fill="illustrationShadow010"
          />
        </g>
        <g opacity="0.4">
          <Rect
            width="691.2"
            height="26.4"
            rx="13.2"
            transform="matrix(-1 0 0 1 1017.2 698.199)"
            fill="illustrationShadow010"
          />
          <Rect
            width="691.2"
            height="26.4"
            rx="13.2"
            transform="matrix(-1 0 0 1 1017.2 636.6)"
            fill="illustrationShadow010"
          />
          <Rect
            width="691.2"
            height="26.4"
            rx="13.2"
            transform="matrix(-1 0 0 1 1017.2 575)"
            fill="illustrationShadow010"
          />
        </g>
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1344" height="759" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default InlineMessageHero;
