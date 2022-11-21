import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const StackIllustration: React.FC = () => {
  const clip0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="600"
      viewBox="0 0 1490 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 2.86396C0 1.28224 1.7912 0 4.00075 0H1487C1489.21 0 1491 1.28223 1491 2.86395V597.136C1491 598.718 1489.21 600 1487 600H4.00077C1.79122 600 0 598.718 0 597.136V2.86396Z"
          fill="illustrationBackground020"
        />
        <Path
          d="M740 398L740 204L752 204L752 398L740 398Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M694.648 300.324C694.648 337.506 664.506 367.648 627.324 367.648C590.142 367.648 560 337.506 560 300.324C560 263.142 590.142 233 627.324 233C664.506 233 694.648 263.142 694.648 300.324Z"
          fill="illustrationInterface020"
        />
        <Path
          d="M931.648 301.324C931.648 338.506 901.506 368.648 864.324 368.648C827.142 368.648 797 338.506 797 301.324C797 264.142 827.142 234 864.324 234C901.506 234 931.648 264.142 931.648 301.324Z"
          fill="illustrationInterface020"
        />
        <Path opacity="0.4" d="M703 204H732V398H703V204Z" fill="red020" />
        <Path opacity="0.4" d="M760 204H789V398H760V204Z" fill="red020" />
        <Rect
          x="536"
          y="185"
          width="418"
          height="230"
          rx="12"
          stroke="#2B4AAB"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 16"
        />
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1490" height="600" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default StackIllustration;
