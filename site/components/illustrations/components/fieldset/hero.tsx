import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Hero: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();
  const filter3 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1490" height="838" fill="illustrationBackground020" />
      <Rect
        x="390"
        y="125"
        width="710"
        height="588"
        stroke="#AEBFFF"
        strokeWidth="8"
        strokeDasharray="54 54"
      />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="461"
          y="191"
          width="568"
          height="64"
          rx="32"
          fill="illustrationPalette040"
        />
      </g>
      <Rect
        width="262.839"
        height="26.3274"
        rx="13.1637"
        transform="matrix(-1 0 0 1 803 341.978)"
        fill="illustrationPalette020"
      />
      <Rect
        width="390.839"
        height="26.3274"
        rx="13.1637"
        transform="matrix(-1 0 0 1 931 468.629)"
        fill="illustrationPalette020"
      />
      <Rect
        width="214.839"
        height="26.3274"
        rx="13.1637"
        transform="matrix(-1 0 0 1 755 596.277)"
        fill="illustrationPalette020"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.371 355.142C464.371 367.709 474.558 377.896 487.125 377.896C499.692 377.896 509.879 367.709 509.879 355.142C509.879 342.575 499.692 332.388 487.125 332.388C474.558 332.388 464.371 342.575 464.371 355.142ZM487.125 329.017C472.697 329.017 461 340.714 461 355.142C461 369.571 472.697 381.267 487.125 381.267C501.553 381.267 513.25 369.571 513.25 355.142C513.25 340.714 501.553 329.017 487.125 329.017Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter1})`}>
        <Path
          d="M472.821 355.142C472.821 347.242 479.225 340.838 487.125 340.838V340.838C495.025 340.838 501.429 347.242 501.429 355.142V355.142C501.429 363.042 495.025 369.446 487.125 369.446V369.446C479.225 369.446 472.821 363.042 472.821 355.142V355.142Z"
          fill="illustrationPalette020"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.371 481.793C464.371 494.36 474.558 504.547 487.125 504.547C499.692 504.547 509.879 494.36 509.879 481.793C509.879 469.226 499.692 459.039 487.125 459.039C474.558 459.039 464.371 469.226 464.371 481.793ZM487.125 455.668C472.697 455.668 461 467.365 461 481.793C461 496.221 472.697 507.918 487.125 507.918C501.553 507.918 513.25 496.221 513.25 481.793C513.25 467.365 501.553 455.668 487.125 455.668Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter2})`}>
        <Path
          d="M472.821 481.793C472.821 473.893 479.225 467.489 487.125 467.489V467.489C495.025 467.489 501.429 473.893 501.429 481.793V481.793C501.429 489.693 495.025 496.097 487.125 496.097V496.097C479.225 496.097 472.821 489.693 472.821 481.793V481.793Z"
          fill="illustrationPalette020"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.371 609.44C464.371 622.007 474.558 632.194 487.125 632.194C499.692 632.194 509.879 622.007 509.879 609.44C509.879 596.874 499.692 586.686 487.125 586.686C474.558 586.686 464.371 596.874 464.371 609.44ZM487.125 583.315C472.697 583.315 461 595.012 461 609.44C461 623.869 472.697 635.565 487.125 635.565C501.553 635.565 513.25 623.869 513.25 609.44C513.25 595.012 501.553 583.315 487.125 583.315Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter3})`}>
        <Path
          d="M472.821 609.44C472.821 601.541 479.225 595.137 487.125 595.137V595.137C495.025 595.137 501.429 601.541 501.429 609.44V609.44C501.429 617.34 495.025 623.744 487.125 623.744V623.744C479.225 623.744 472.821 617.34 472.821 609.44V609.44Z"
          fill="illustrationPalette020"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="429"
          y="179"
          width="632"
          height="128"
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
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2549_80193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2549_80193"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="464.061"
          y="336.458"
          width="46.1278"
          height="46.1278"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2549_80193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2549_80193"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="464.061"
          y="463.109"
          width="46.1278"
          height="46.1278"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2549_80193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2549_80193"
            result="shape"
          />
        </filter>
        <filter
          id={filter3}
          x="464.061"
          y="590.757"
          width="46.1278"
          height="46.1278"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2549_80193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2549_80193"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
