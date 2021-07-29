import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BannerDont1Illustration: React.FC = () => {
  const clip0 = getSSRId();

  const filter0 = getSSRId();
  const filter1 = getSSRId();

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
          <Rect
            x="150"
            y="164"
            width="1191"
            height="253"
            rx="4"
            fill="illustrationInterface010"
          />
          <Path
            d="M481 236C473.268 236 467 242.268 467 250C467 257.732 473.268 264 481 264H984C991.732 264 998 257.732 998 250C998 242.268 991.732 236 984 236H481Z"
            fill="illustrationInterface020"
          />
          <Path
            d="M481 312C473.268 312 467 318.268 467 326C467 333.732 473.268 340 481 340H1273C1280.73 340 1287 333.732 1287 326C1287 318.268 1280.73 312 1273 312H481Z"
            fill="illustrationInterface020"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M250.5 231.719L259.312 222.906L367 330.594L358.188 339.406L337.438 318.656L313 349.094L240.25 258.469C240.296 258.433 240.348 258.392 240.408 258.345C242.217 256.923 250.362 250.522 263.312 244.531L250.5 231.719ZM385.335 258.15C385.508 258.283 385.646 258.39 385.75 258.469L353.187 299.094L289.937 235.844C297.062 234.344 304.75 233.469 313 233.469C353.387 233.469 380.848 254.683 385.335 258.15Z"
            fill="illustrationHighlight010"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Rect
            x="150"
            y="421"
            width="1191"
            height="253"
            rx="4"
            fill="illustrationInterface010"
          />
          <Path
            d="M481 493C473.268 493 467 499.268 467 507C467 514.732 473.268 521 481 521H984C991.732 521 998 514.732 998 507C998 499.268 991.732 493 984 493H481Z"
            fill="illustrationInterface020"
          />
          <Path
            d="M481 569C473.268 569 467 575.268 467 583C467 590.732 473.268 597 481 597H1273C1280.73 597 1287 590.732 1287 583C1287 575.268 1280.73 569 1273 569H481Z"
            fill="illustrationInterface020"
          />
          <Path
            d="M313 505.437L360.063 586.75H265.937L313 505.437ZM313 480.5L244.25 599.25H381.75L313 480.5ZM319.25 568H306.75V580.5H319.25V568ZM319.25 530.5H306.75V555.5H319.25V530.5Z"
            fill="illustrationHighlight010"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="134"
          y="156"
          width="1223"
          height="285"
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
        <filter
          id={filter1}
          x="134"
          y="413"
          width="1223"
          height="285"
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
      </defs>
    </Svg>
  );
};
export default BannerDont1Illustration;
