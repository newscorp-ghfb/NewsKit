import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const DrawerOptionsWidthIllustration: React.FC = () => {
  const mask0 = getSSRId();

  const clip0 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <Rect
          x="487"
          y="278.982"
          width="1255.34"
          height="769.852"
          rx="22.1939"
          fill="illustrationInterface020"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            width="513.235"
            height="770.444"
            rx="8.79047"
            transform="matrix(-1 0 0 1 1000.23 278.982)"
            fill="illustrationInterface010"
          />
        </g>
        <Rect
          width="432.4"
          height="12.4702"
          rx="6.23512"
          transform="matrix(-1 0 0 1 960.538 470.226)"
          fill="illustrationInterface020"
        />
        <Rect
          width="432.4"
          height="12.4702"
          rx="6.23512"
          transform="matrix(-1 0 0 1 960.538 684.991)"
          fill="illustrationInterface020"
        />
        <Rect
          width="432.4"
          height="13.8558"
          rx="6.61325"
          transform="matrix(-1 0 0 1 960.538 503.48)"
          fill="illustrationInterface020"
        />
        <Rect
          width="432.4"
          height="13.8558"
          rx="6.61325"
          transform="matrix(-1 0 0 1 960.538 538.119)"
          fill="illustrationInterface020"
        />
        <Rect
          width="432.4"
          height="13.8558"
          rx="6.61325"
          transform="matrix(-1 0 0 1 960.538 718.245)"
          fill="illustrationInterface020"
        />
        <Rect
          width="432.4"
          height="13.8559"
          rx="6.61325"
          transform="matrix(-1 0 0 1 960 435.586)"
          fill="illustrationInterface020"
        />
        <Rect
          width="432.4"
          height="13.8559"
          rx="6.61325"
          transform="matrix(-1 0 0 1 960 650.352)"
          fill="illustrationInterface020"
        />
        <Rect
          width="218.312"
          height="12.4703"
          rx="6.23513"
          transform="matrix(-1 0 0 1 746 402.332)"
          fill="illustrationInterface030"
        />
        <Rect
          width="218.312"
          height="12.4702"
          rx="6.23512"
          transform="matrix(-1 0 0 1 746 618.483)"
          fill="illustrationInterface030"
        />
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="509"
          y="311"
          width="45"
          height="45"
        >
          <Path
            d="M518.723 323.148L521.331 320.54L531.67 330.879L542.008 320.54L544.616 323.148L534.277 333.487L544.616 343.825L542.008 346.433L531.67 336.095L521.331 346.433L518.723 343.825L529.062 333.487L518.723 323.148Z"
            fill="#0A0A0A"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Rect
            width="44.3879"
            height="44.3879"
            transform="matrix(-1 0 0 1 553.864 311.293)"
            fill="illustrationHighlight010"
          />
        </g>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M487 207.179L487 127L498.712 127L498.712 162.901L988.675 162.901L988.675 127L1000.39 127L1000.39 207.179L988.675 207.179L988.675 171.278L498.712 171.278L498.712 207.179L487 207.179Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="483"
          y="278.982"
          width="521.235"
          height="778.444"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
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
        <clipPath id={clip0}>
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default DrawerOptionsWidthIllustration;
