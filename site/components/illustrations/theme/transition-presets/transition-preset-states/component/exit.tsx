import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../../svg';
import {Path} from '../../../../path';
import {Rect} from '../../../../rect';

export const exit: React.FC = () => {
  const clip0 = getSSRId();

  return (
    <Svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect
          width="1000"
          height="1000"
          rx="22"
          fill="illustrationBackground020"
        />
        <Path
          d="M110 93C110 84.1635 117.163 77 126 77H1000V923H110V93Z"
          fill="illustrationPalette010"
        />
        <g opacity="0.2">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M283.968 181C277.358 181 272 190.185 272 201.515V333.96C272 345.29 277.358 354.476 283.968 354.476H1014.03C1020.64 354.476 1026 345.29 1026 333.96V201.515C1026 190.185 1020.64 181 1014.03 181H283.968ZM272.533 418.914C272.533 402.29 286.008 388.815 302.63 388.815H473.716C490.338 388.815 503.813 402.291 503.813 418.914V604.741C503.813 621.364 490.338 634.839 473.716 634.839H302.63C286.008 634.839 272.533 621.364 272.533 604.74V418.914ZM533.625 418.914C533.625 402.29 547.1 388.815 563.722 388.815H734.808C751.43 388.815 764.905 402.291 764.905 418.914V604.741C764.905 621.364 751.43 634.839 734.808 634.839H563.722C547.1 634.839 533.625 621.364 533.625 604.74V418.914ZM824.817 388.815C808.195 388.815 794.72 402.29 794.72 418.914V604.74C794.72 621.364 808.195 634.839 824.817 634.839H995.903C1012.53 634.839 1026 621.364 1026 604.741V418.914C1026 402.291 1012.53 388.815 995.903 388.815H824.817Z"
            fill="illustrationPalette020"
          />
          <Path
            d="M272.533 707.074C272.533 690.451 286.008 676.976 302.63 676.976H473.716C490.338 676.976 503.813 690.451 503.813 707.074V923C503.813 923 490.338 923 473.716 923H302.63C272.533 923 272.533 923 272.533 923V707.074Z"
            fill="illustrationPalette020"
          />
          <Path
            d="M533.625 707.074C533.625 690.451 547.1 676.976 563.722 676.976H734.808C751.43 676.976 764.905 690.451 764.905 707.074V923C764.905 923 751.43 923 734.808 923H563.722C547.1 923 533.625 923 533.625 923V707.074Z"
            fill="illustrationPalette020"
          />
          <Path
            d="M824.817 676.976C808.195 676.976 794.72 690.451 794.72 707.074V923C794.72 923 808.195 923 824.817 923H995.903C1012.53 923 1026 923 1026 923V707.074C1026 690.451 1012.53 676.976 995.903 676.976H824.817Z"
            fill="illustrationPalette020"
          />
        </g>
        <Path
          d="M110 93C110 84.1635 117.163 77 126 77H512V923H126C117.163 923 110 915.837 110 907V93Z"
          fill="illustrationPalette020"
        />
        <Rect
          x="170"
          y="205"
          width="283"
          height="27"
          rx="13.5"
          fill="illustrationPalette030"
        />
        <Rect
          x="170"
          y="264"
          width="186"
          height="25"
          rx="12.5"
          fill="illustrationPalette030"
        />
        <Rect
          opacity="0.4"
          x="170"
          y="375"
          width="283"
          height="13"
          rx="6.5"
          fill="white"
        />
        <Rect
          opacity="0.4"
          x="170"
          y="409"
          width="283"
          height="18"
          rx="9"
          fill="white"
        />
        <Rect
          opacity="0.4"
          x="170"
          y="335"
          width="283"
          height="16"
          rx="8"
          fill="white"
        />
        <Rect
          opacity="0.4"
          x="170"
          y="447"
          width="143"
          height="16"
          rx="8"
          fill="white"
        />
        <Path
          d="M151.65 152L146 146.96L151.65 141.408L180.618 113L186 118.315L151.65 152Z"
          fill="illustrationPalette030"
        />
        <Path
          d="M180.35 152L186 146.96L180.35 141.408L151.382 113L146 118.315L180.35 152Z"
          fill="illustrationPalette030"
        />
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1000" height="1000" rx="22" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default exit;
