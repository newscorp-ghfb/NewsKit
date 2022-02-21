import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';
import {Circle} from '../../../circle';

export const Hero: React.FC = () => {
  const clip0 = getSSRId();
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();
  const filter3 = getSSRId();
  const filter4 = getSSRId();
  const filter5 = getSSRId();

  return (
    <Svg
      width="1345"
      height="759"
      viewBox="0 0 1345 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1345" height="759" fill="illustrationBackground010" />
        <Rect
          y="333"
          width="1345"
          height="426"
          fill="illustrationInterface020"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="439"
            y="165"
            width="467"
            height="467"
            rx="80"
            fill="illustrationInterface050"
          />
        </g>
        <g opacity="0.4" filter={`url(#${filter1})`}>
          <Rect
            x="439"
            y="165"
            width="467"
            height="467"
            rx="80"
            fill="illustrationGradient010"
          />
        </g>
        <g opacity="0.6" filter={`url(#${filter2})`}>
          <Rect
            x="148"
            y="398"
            width="228"
            height="228"
            rx="60"
            fill="illustrationInterface030"
          />
        </g>
        <g opacity="0.6" filter={`url(#${filter3})`}>
          <Rect
            x="-132"
            y="404"
            width="228"
            height="228"
            rx="60"
            fill="illustrationInterface030"
          />
        </g>
        <Rect
          opacity="0.6"
          x="-132"
          y="404"
          width="228"
          height="228"
          rx="60"
          fill="illustrationInterface020"
        />
        <g opacity="0.6" filter={`url(#${filter4})`}>
          <Rect
            x="1249"
            y="392"
            width="228"
            height="228"
            rx="60"
            fill="illustrationInterface030"
          />
        </g>
        <Rect
          opacity="0.6"
          x="1249"
          y="392"
          width="228"
          height="228"
          rx="60"
          fill="illustrationInterface020"
        />
        <g opacity="0.6" filter={`url(#${filter5})`}>
          <Rect
            x="969"
            y="398"
            width="228"
            height="228"
            rx="60"
            fill="illustrationInterface030"
          />
        </g>
        <Rect
          opacity="0.6"
          x="969"
          y="398"
          width="228"
          height="228"
          rx="60"
          fill="illustrationInterface020"
        />
        <Rect
          opacity="0.6"
          x="148"
          y="398"
          width="228"
          height="228"
          rx="60"
          fill="illustrationInterface020"
        />
        <Path
          d="M617.5 567C647.584 567 672 541.688 672 510.5V454H617.5C587.416 454 563 479.312 563 510.5C563 541.688 587.416 567 617.5 567Z"
          fill="illustrationPalette030"
        />
        <Path
          d="M563 398.5C563 367.864 587.416 343 617.5 343H672V454H617.5C587.416 454 563 429.136 563 398.5Z"
          fill="illustrationPalette030"
        />
        <Path
          d="M563 286.5C563 255.312 587.416 230 617.5 230H672V343H617.5C587.416 343 563 317.688 563 286.5Z"
          fill="illustrationPalette010"
        />
        <Path
          d="M672 230H727C757.36 230 782 255.312 782 286.5C782 317.688 757.36 343 727 343H672V230Z"
          fill="illustrationPalette020"
        />
        <Path
          d="M782 398.5C782 429.136 757.36 454 727 454C696.64 454 672 429.136 672 398.5C672 367.864 696.64 343 727 343C757.36 343 782 367.864 782 398.5Z"
          fill="illustrationPalette020"
        />
        <Circle cx="672" cy="697" r="18" fill="illustrationInterface100" />
      </g>
      <defs>
        <filter
          id={filter0}
          x="407"
          y="153"
          width="531"
          height="531"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_728_135607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_728_135607"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="407"
          y="153"
          width="531"
          height="531"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_728_135607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_728_135607"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="140"
          y="394"
          width="244"
          height="244"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_728_135607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_728_135607"
            result="shape"
          />
        </filter>
        <filter
          id={filter3}
          x="-140"
          y="400"
          width="244"
          height="244"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_728_135607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_728_135607"
            result="shape"
          />
        </filter>
        <filter
          id={filter4}
          x="1241"
          y="388"
          width="244"
          height="244"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_728_135607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_728_135607"
            result="shape"
          />
        </filter>
        <filter
          id={filter5}
          x="961"
          y="394"
          width="244"
          height="244"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_728_135607"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_728_135607"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1345" height="759" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Hero;
