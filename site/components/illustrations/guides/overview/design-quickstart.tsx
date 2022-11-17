import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const DesignQuickstart: React.FC = () => {
  const clip0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1490" height="838" fill="illustrationBackground020" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M865.365 -1961.82H3144.22V317.039H865.365V-1961.82ZM889.737 -1937.45V292.667H3119.85V-1937.45H889.737Z"
          fill="illustrationPalette020"
        />
        <Path
          d="M887.313 399.325C829.747 399.325 783.08 352.658 783.08 295.091C783.08 237.525 829.747 190.858 887.313 190.858C944.88 190.858 991.547 237.525 991.547 295.091C991.547 352.658 944.88 399.325 887.313 399.325Z"
          fill="interface010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M758.707 295.091C758.707 366.118 816.286 423.697 887.313 423.697C958.339 423.697 1015.92 366.118 1015.92 295.091C1015.92 224.065 958.339 166.486 887.313 166.486C816.286 166.486 758.707 224.065 758.707 295.091ZM783.079 295.091C783.079 352.658 829.746 399.325 887.313 399.325C944.879 399.325 991.546 352.658 991.546 295.091C991.546 237.525 944.879 190.858 887.313 190.858C829.746 190.858 783.079 237.525 783.079 295.091Z"
          fill="illustrationPalette030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M502.51 478.325C504.499 473.191 510.274 470.641 515.409 472.63L652.757 525.842L705.769 663.192C707.751 668.329 705.194 674.101 700.057 676.084C694.92 678.066 689.148 675.509 687.166 670.372L637.329 541.25L508.205 491.224C503.071 489.235 500.521 483.46 502.51 478.325Z"
          fill="illustrationPalette030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M469.276 511.56C471.265 506.425 477.04 503.875 482.174 505.865L619.522 559.077L672.534 696.426C674.517 701.564 671.96 707.335 666.823 709.318C661.686 711.301 655.914 708.744 653.931 703.607L604.095 574.484L474.971 524.458C469.836 522.469 467.286 516.694 469.276 511.56Z"
          fill="illustrationPalette020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M436.041 544.794C438.031 539.659 443.806 537.109 448.94 539.099L586.288 592.311L639.3 729.661C641.283 734.798 638.726 740.569 633.589 742.552C628.451 744.535 622.68 741.978 620.697 736.841L570.86 607.719L441.736 557.692C436.602 555.703 434.052 549.928 436.041 544.794Z"
          fill="illustrationPalette010"
        />
        <Path
          d="M890.953 287.784L540.332 434.46V453.55L673.568 505.169L724.992 638.405H744.082L890.953 287.784Z"
          fill="illustrationPalette050"
        />
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default DesignQuickstart;
