import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BlockVerticalIllustration: React.FC = () => {
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
          d="M618.648 301.324C618.648 338.506 588.506 368.648 551.324 368.648C514.142 368.648 484 338.506 484 301.324C484 264.142 514.142 234 551.324 234C588.506 234 618.648 264.142 618.648 301.324Z"
          fill="illustrationInterface020"
        />
        <Path
          opacity="0.4"
          d="M626.648 204H655.648V398H626.648V204Z"
          fill="red020"
        />
        <Rect
          x="467"
          y="185"
          width="205"
          height="230"
          rx="12"
          stroke="#2B4AAB"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 16"
        />
        <Path
          d="M969.648 301.324C969.648 338.506 939.506 368.648 902.324 368.648C865.142 368.648 835 338.506 835 301.324C835 264.142 865.142 234 902.324 234C939.506 234 969.648 264.142 969.648 301.324Z"
          fill="illustrationInterface020"
        />
        <Path
          opacity="0.4"
          d="M977.648 204H1006.65V398H977.648V204Z"
          fill="red020"
        />
        <Rect
          x="818"
          y="185"
          width="205"
          height="230"
          rx="12"
          stroke="#2B4AAB"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 16"
        />
        <Path
          d="M720 398L720 204L732 204L732 398L720 398Z"
          fill="illustrationHighlight010"
        />
        <Path opacity="0.4" d="M740 204H769V398H740V204Z" fill="red020" />
        <Rect
          x="704"
          y="185"
          width="82"
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

export default BlockVerticalIllustration;
