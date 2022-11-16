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
          d="M865.366 -1961.82H3144.22V317.039H865.366V-1961.82ZM889.737 -1937.45V292.667H3119.85V-1937.45H889.737Z"
          fill="illustrationPalette020"
        />
        <Path
          d="M887.313 399.325C829.746 399.325 783.079 352.658 783.079 295.091C783.079 237.524 829.746 190.857 887.313 190.857C944.879 190.857 991.546 237.524 991.546 295.091C991.546 352.658 944.879 399.325 887.313 399.325Z"
          fill="interface010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M758.708 295.092C758.708 366.118 816.286 423.697 887.313 423.697C958.34 423.697 1015.92 366.118 1015.92 295.092C1015.92 224.065 958.34 166.486 887.313 166.486C816.286 166.486 758.708 224.065 758.708 295.092ZM783.079 295.092C783.079 352.658 829.746 399.325 887.313 399.325C944.88 399.325 991.546 352.658 991.546 295.092C991.546 237.525 944.88 190.858 887.313 190.858C829.746 190.858 783.079 237.525 783.079 295.092Z"
          fill="illustrationPalette030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M502.51 478.324C504.499 473.19 510.274 470.64 515.409 472.629L652.756 525.841L705.768 663.191C707.751 668.328 705.194 674.1 700.057 676.083C694.92 678.065 689.148 675.508 687.166 670.371L637.329 541.249L508.205 491.223C503.07 489.234 500.521 483.459 502.51 478.324Z"
          fill="illustrationPalette030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M469.276 511.559C471.265 506.424 477.04 503.874 482.174 505.864L619.522 559.076L672.534 696.425C674.517 701.563 671.96 707.334 666.823 709.317C661.686 711.3 655.914 708.743 653.931 703.606L604.095 574.484L474.971 524.457C469.836 522.468 467.286 516.693 469.276 511.559Z"
          fill="illustrationPalette020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M436.041 544.793C438.031 539.658 443.806 537.109 448.94 539.098L586.288 592.31L639.3 729.66C641.283 734.797 638.726 740.569 633.589 742.551C628.452 744.534 622.68 741.977 620.697 736.84L570.861 607.718L441.736 557.692C436.602 555.702 434.052 549.927 436.041 544.793Z"
          fill="illustrationPalette010"
        />
        <Path
          d="M890.954 287.785L540.333 434.462V453.551L673.569 505.17L724.993 638.406H744.082L890.954 287.785Z"
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
