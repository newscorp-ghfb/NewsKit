import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BlockHorizontalIllustration: React.FC = () => {
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
        <Rect
          x="953"
          y="112"
          width="117"
          height="416"
          rx="12"
          transform="rotate(90 953 112)"
          stroke="#2B4AAB"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 16"
        />
        <Path
          opacity="0.6"
          d="M918.637 195L918.637 211L567.75 211L567.75 195L918.637 195Z"
          fill="green030"
        />
        <Path
          d="M568 137C568 133.686 570.686 131 574 131L913 131C916.314 131 919 133.686 919 137L919 181C919 184.314 916.314 187 913 187L574 187C570.686 187 568 184.314 568 181L568 137Z"
          fill="illustrationInterface020"
        />
        <Rect
          x="953"
          y="371"
          width="117"
          height="416"
          rx="12"
          transform="rotate(90 953 371)"
          stroke="#2B4AAB"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 16"
        />
        <Path
          opacity="0.6"
          d="M918.637 454L918.637 470L567.75 470L567.75 454L918.637 454Z"
          fill="green030"
        />
        <Path
          d="M568 396C568 392.686 570.686 390 574 390L913 390C916.314 390 919 392.686 919 396L919 440C919 443.314 916.314 446 913 446L574 446C570.686 446 568 443.314 568 440L568 396Z"
          fill="illustrationInterface020"
        />
        <Path
          d="M567.746 282L918.633 282L918.633 294L567.746 294L567.746 282Z"
          fill="illustrationHighlight010"
        />
        <Path
          opacity="0.6"
          d="M918.637 302L918.637 318L567.75 318L567.75 302L918.637 302Z"
          fill="green030"
        />
        <Rect
          x="953"
          y="261"
          width="78"
          height="416"
          rx="12"
          transform="rotate(90 953 261)"
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

export default BlockHorizontalIllustration;
