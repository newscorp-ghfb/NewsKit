import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';
import {Circle} from '../../circle';

export const MessageHeroIllustration: React.FC = () => {
  const clip0 = getSSRId();
  const filter0 = getSSRId();

  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1344" height="759" fill="#F4F4F4" />
        <g filter={`url(#${filter0})`}>
          <Path
            d="M240 287C240 273.745 250.745 263 264 263H1084C1097.25 263 1108 273.745 1108 287V473C1108 486.255 1097.25 497 1084 497H264C250.745 497 240 486.255 240 473V287Z"
            fill="illustrationPalette040"
          />
        </g>
        <Rect
          x="422"
          y="417"
          width="610"
          height="16"
          rx="8"
          fill="illustrationPalette020"
        />
        <Rect
          x="422"
          y="374"
          width="610"
          height="16"
          rx="8"
          fill="illustrationPalette020"
        />
        <Rect
          x="422"
          y="332"
          width="319"
          height="17"
          rx="8.5"
          fill="illustrationPalette010"
        />
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
            transform="matrix(-1 0 0 1 673.774 156.4)"
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
        <filter
          id={filter0}
          x="224"
          y="255"
          width="900"
          height="266"
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
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1344" height="759" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default MessageHeroIllustration;
