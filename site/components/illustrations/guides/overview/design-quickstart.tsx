import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const DesignQuickstart: React.FC = () => {
  const clip0 = getSSRId();

  return (
    <Svg
      width="1345"
      height="759"
      viewBox="0 0 1345 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1345" height="759" fill="illustrationBackground020" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M781.152 -1770H2838.24V287.089H781.152V-1770ZM803.152 -1748V265.089H2816.24V-1748H803.152Z"
          fill="illustrationPalette020"
        />
        <Path
          d="M800.964 361.367C748.999 361.367 706.874 319.242 706.874 267.277C706.874 215.313 748.999 173.187 800.964 173.187C852.928 173.187 895.054 215.313 895.054 267.277C895.054 319.242 852.928 361.367 800.964 361.367Z"
          fill="interface010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M684.874 267.277C684.874 331.392 736.849 383.367 800.964 383.367C865.078 383.367 917.054 331.392 917.054 267.277C917.054 203.162 865.078 151.187 800.964 151.187C736.849 151.187 684.874 203.162 684.874 267.277ZM706.874 267.277C706.874 319.242 748.999 361.367 800.964 361.367C852.928 361.367 895.054 319.242 895.054 267.277C895.054 215.313 852.928 173.187 800.964 173.187C748.999 173.187 706.874 215.313 706.874 267.277Z"
          fill="illustrationPalette030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M453.608 432.68C455.403 428.045 460.616 425.743 465.251 427.539L589.233 475.573L637.086 599.556C638.876 604.193 636.568 609.403 631.931 611.193C627.294 612.983 622.083 610.675 620.294 606.037L575.307 489.481L458.749 444.323C454.114 442.527 451.812 437.314 453.608 432.68Z"
          fill="illustrationPalette030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M423.608 462.68C425.403 458.045 430.616 455.743 435.251 457.539L559.233 505.573L607.086 629.556C608.876 634.193 606.568 639.403 601.931 641.193C597.294 642.983 592.083 640.675 590.294 636.037L545.307 519.481L428.749 474.323C424.114 472.527 421.812 467.314 423.608 462.68Z"
          fill="illustrationPalette020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M393.608 492.68C395.403 488.045 400.616 485.743 405.251 487.539L529.233 535.573L577.086 659.556C578.876 664.193 576.568 669.403 571.931 671.193C567.294 672.983 562.083 670.675 560.294 666.037L515.307 549.481L398.749 504.323C394.114 502.527 391.812 497.314 393.608 492.68Z"
          fill="illustrationPalette010"
        />
        <Path
          d="M804.25 260.681L487.75 393.083V410.315L608.02 456.911L654.44 577.181H671.672L804.25 260.681Z"
          fill="illustrationPalette050"
        />
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1345" height="759" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default DesignQuickstart;
