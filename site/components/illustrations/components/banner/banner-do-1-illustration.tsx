import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BannerDo1Illustration: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <g clipPath="url(#clip1)">
            <Rect
              x="300"
              y="269"
              width="1191"
              height="300"
              rx="4"
              fill="illustrationInterface010"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M652 367C644.268 367 638 373.268 638 381C638 388.732 644.268 395 652 395H1369C1376.73 395 1383 388.732 1383 381C1383 373.268 1376.73 367 1369 367H652ZM652 443C644.268 443 638 449.268 638 457C638 464.732 644.268 471 652 471H1537.17C1544.91 471 1551.17 464.732 1551.17 457C1551.17 449.268 1544.91 443 1537.17 443H652Z"
              fill="illustrationInterface020"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M409.5 360.719L418.312 351.906L526 459.594L517.188 468.406L496.438 447.656L472 478.094L399.25 387.469C399.296 387.433 399.348 387.392 399.408 387.345C401.217 385.923 409.362 379.522 422.312 373.531L409.5 360.719ZM544.335 387.15C544.508 387.283 544.646 387.39 544.75 387.469L512.187 428.094L448.937 364.844C456.062 363.344 463.75 362.469 472 362.469C512.387 362.469 539.848 383.683 544.335 387.15Z"
              fill="illustrationHighlight010"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="284"
          y="261"
          width="1223"
          height="332"
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
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Rect x="300" y="269" width="1191" height="300" rx="4" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default BannerDo1Illustration;
