import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const InlineMessageOptionsIntentIllustration: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  return (
    <Svg
      width="1490"
      height="839"
      viewBox="0 0 1490 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.00343C0 1.79429 1.79086 0.00341797 4 0.00341797H1486.72C1488.93 0.00341797 1490.72 1.79428 1490.72 4.00342V834.007C1490.72 836.216 1488.93 838.007 1486.72 838.007H4.00002C1.79088 838.007 0 836.216 0 834.007V4.00343Z"
        fill="illustrationBackground020"
      />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="277.428"
          y="209.003"
          width="935.146"
          height="156.593"
          rx="11.7351"
          fill="interfaceInformative010"
        />
      </g>
      <Rect
        x="328.383"
        y="248.599"
        width="375.523"
        height="19.8498"
        rx="9.9249"
        fill="white"
      />
      <Rect
        opacity="0.7"
        x="328.383"
        y="300.928"
        width="753.98"
        height="19.8498"
        rx="9.9249"
        fill="white"
      />
      <g filter={`url(#${filter1})`}>
        <Rect
          x="277.428"
          y="472.003"
          width="935.146"
          height="156.593"
          rx="11.7351"
          fill="interfaceNegative010"
        />
      </g>
      <Rect
        x="328.383"
        y="511.724"
        width="375.523"
        height="19.8498"
        rx="9.9249"
        fill="white"
      />
      <Rect
        opacity="0.7"
        x="328.383"
        y="564.053"
        width="753.98"
        height="19.8498"
        rx="9.9249"
        fill="white"
      />
      <defs>
        <filter
          id={filter0}
          x="261.428"
          y="201.003"
          width="967.146"
          height="188.593"
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
        <filter
          id={filter1}
          x="261.428"
          y="464.003"
          width="967.146"
          height="188.593"
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
      </defs>
    </Svg>
  );
};
export default InlineMessageOptionsIntentIllustration;
