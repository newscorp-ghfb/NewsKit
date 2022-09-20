import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const ResponsiveProps: React.FC = () => {
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
          x="314"
          y="190"
          width="716"
          height="379"
          rx="13.4248"
          fill="illustrationInterface010"
        />
        <Path
          d="M327.425 569C320.01 569 314 562.99 314 555.575L314 203.425C314 196.01 320.01 190 327.425 190L583 190L583 569L327.425 569Z"
          fill="illustrationInterface030"
        />
        <Rect
          x="628.28"
          y="261"
          width="364.507"
          height="22.3746"
          rx="11.1873"
          fill="illustrationPalette020"
        />
        <Rect
          x="628.28"
          y="309.307"
          width="239.345"
          height="22.3746"
          rx="11.1873"
          fill="illustrationPalette020"
        />
        <Rect
          x="628.28"
          y="394.947"
          width="364.507"
          height="13.175"
          rx="6.58748"
          fill="illustrationInterface020"
        />
        <Rect
          x="628.28"
          y="364.202"
          width="364.507"
          height="13.175"
          rx="6.58748"
          fill="illustrationInterface020"
        />
        <Rect
          x="628.28"
          y="426"
          width="184.45"
          height="13.175"
          rx="6.58748"
          fill="illustrationInterface020"
        />
        <Path
          d="M822 506.5C822 493.521 832.522 483 845.5 483H969.5C982.479 483 993 493.521 993 506.5C993 519.479 982.479 530 969.5 530H845.5C832.522 530 822 519.479 822 506.5Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="296.1"
          y="181.05"
          width="751.8"
          height="414.799"
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
            result="effect1_dropShadow_2001_73164"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2001_73164"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default ResponsiveProps;
