import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const DateTimeIllustration: React.FC = () => {
  const filter0 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M447 542C447 564.091 464.909 582 487 582L857 582C879.092 582 897 564.091 897 542L897 274L447.001 274L447 542Z"
          fill="white"
        />
        <Path
          d="M897 204C897 181.909 879.091 164 857 164L487 164C464.909 164 447 181.909 447 204L447 274L897 274V204Z"
          fill="blue040"
        />
        <Path
          d="M822 518H897V542C897 564.091 879.091 582 857 582H822V518Z"
          fill="#D7D7D7"
        />
        <Path
          d="M819.952 505C863.5 521 897 505 897 505C897 547.526 862.478 582 819.952 582C802.5 536 819.952 505 819.952 505Z"
          fill="neutral020"
        />
        <Path
          d="M564 366.46V327.882H631.54V505H588.139V366.46H564Z"
          fill="blue100"
        />
        <Path
          d="M658.6 471.76C664.126 467.393 666.646 465.371 666.158 465.694C682.088 452.592 694.605 441.836 703.707 433.425C712.973 425.014 720.775 416.198 727.115 406.978C733.454 397.759 736.624 388.781 736.624 380.047C736.624 373.415 735.08 368.239 731.991 364.519C728.903 360.798 724.27 358.938 718.093 358.938C711.916 358.938 707.04 361.284 703.464 365.975C700.05 370.504 698.343 376.974 698.343 385.385H658.112C658.437 371.636 661.363 360.151 666.89 350.931C672.579 341.712 679.975 334.918 689.078 330.551C698.343 326.184 708.584 324 719.8 324C739.144 324 753.692 328.933 763.445 338.8C773.361 348.667 778.318 361.526 778.318 377.378C778.318 394.685 772.385 410.78 760.519 425.661C748.653 440.38 733.536 454.776 715.167 468.848H781V502.574H658.6V471.76Z"
          fill="blue100"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="431"
          y="156"
          width="482"
          height="450"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
export default DateTimeIllustration;
