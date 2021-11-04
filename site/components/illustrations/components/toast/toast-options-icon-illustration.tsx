import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const ToastOptionsIconIllustration: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <g clipPath={`url(#${clip1})`}>
            <Path
              d="M304.854 280.999C304.854 267.744 315.599 256.999 328.854 256.999H1490.28V581.998H328.854C315.599 581.998 304.854 571.252 304.854 557.998V280.999Z"
              fill="illustrationInterface010"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M561.854 355.999C561.854 347.162 569.017 339.999 577.854 339.999H1250.85C1259.69 339.999 1266.85 347.162 1266.85 355.999C1266.85 364.836 1259.69 371.999 1250.85 371.999H577.854C569.017 371.999 561.854 364.836 561.854 355.999ZM561.854 423.999C561.854 415.162 569.017 407.999 577.854 407.999H1545.85C1554.69 407.999 1561.85 415.162 1561.85 423.999C1561.85 432.836 1554.69 439.999 1545.85 439.999H577.853C569.017 439.999 561.854 432.836 561.854 423.999ZM577.854 475.999C569.017 475.999 561.854 483.162 561.854 491.999C561.854 500.836 569.017 507.999 577.853 507.999H1545.85C1554.69 507.999 1561.85 500.836 1561.85 491.999C1561.85 483.162 1554.69 475.999 1545.85 475.999H577.854Z"
              fill="illustrationInterface020"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M430.792 306.499C396.309 306.499 368.322 334.499 368.322 368.999C368.322 403.499 396.309 431.499 430.792 431.499C465.275 431.499 493.262 403.499 493.262 368.999C493.262 334.499 465.275 306.499 430.792 306.499ZM424.545 400.249V362.749H437.039V400.249H424.545ZM424.545 337.749V350.249H437.039V337.749H424.545Z"
              fill="illustrationHighlight010"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="288.854"
          y="248.999"
          width="1217.43"
          height="356.999"
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
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Path
            d="M304.854 280.999C304.854 267.744 315.599 256.999 328.854 256.999H1490.28V581.998H328.854C315.599 581.998 304.854 571.252 304.854 557.998V280.999Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default ToastOptionsIconIllustration;
