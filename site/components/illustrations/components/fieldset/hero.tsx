import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';

export const Hero: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  const mask2 = getSSRId();
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();
  const filter3 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M386 145.833V121H411.643V129H394V145.833H386ZM514.214 121H462.929V129H514.214V121ZM565.5 121V129H616.786V121H565.5ZM668.071 121V129H719.357V121H668.071ZM770.643 121V129H821.929V121H770.643ZM873.214 121V129H924.5V121H873.214ZM975.786 121V129H1027.07V121H975.786ZM1078.36 121V129H1096V145.833H1104V121H1078.36ZM1104 195.5H1096V245.167H1104V195.5ZM1104 294.833H1096V344.5H1104V294.833ZM1104 394.167H1096V443.833H1104V394.167ZM1104 493.5H1096V543.167H1104V493.5ZM1104 592.833H1096V642.5H1104V592.833ZM1104 692.167H1096V709H1078.36V717H1104V692.167ZM1027.07 717V709H975.786V717H1027.07ZM924.5 717V709H873.214V717H924.5ZM821.929 717V709H770.643V717H821.929ZM719.357 717V709H668.071V717H719.357ZM616.786 717V709H565.5V717H616.786ZM514.214 717V709H462.929V717H514.214ZM411.643 717V709H394V692.167H386V717H411.643ZM386 642.5H394V592.833H386V642.5ZM386 543.167H394V493.5H386V543.167ZM386 443.833H394V394.167H386V443.833ZM386 344.5H394V294.833H386V344.5ZM386 245.167H394V195.5H386V245.167Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M461 223C461 205.327 475.327 191 493 191H997C1014.67 191 1029 205.327 1029 223C1029 240.673 1014.67 255 997 255H493C475.327 255 461 240.673 461 223Z"
          fill="illustrationPalette040"
        />
      </g>
      <Path
        d="M803 355.142C803 347.872 797.106 341.978 789.836 341.978H553.325C546.055 341.978 540.161 347.872 540.161 355.142C540.161 362.412 546.055 368.305 553.325 368.305H789.836C797.106 368.305 803 362.412 803 355.142Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M931 481.793C931 474.523 925.106 468.629 917.836 468.629H553.325C546.055 468.629 540.161 474.523 540.161 481.793C540.161 489.063 546.055 494.956 553.325 494.956H917.836C925.106 494.956 931 489.063 931 481.793Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M755 609.441C755 602.17 749.106 596.277 741.836 596.277H553.325C546.055 596.277 540.161 602.17 540.161 609.441C540.161 616.711 546.055 622.604 553.325 622.604H741.836C749.106 622.604 755 616.711 755 609.441Z"
        fill="illustrationPalette020"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.371 355.142C464.371 367.709 474.558 377.896 487.125 377.896C499.692 377.896 509.879 367.709 509.879 355.142C509.879 342.575 499.692 332.388 487.125 332.388C474.558 332.388 464.371 342.575 464.371 355.142ZM487.125 329.017C472.697 329.017 461 340.714 461 355.142C461 369.571 472.697 381.267 487.125 381.267C501.553 381.267 513.25 369.571 513.25 355.142C513.25 340.714 501.553 329.017 487.125 329.017Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter1})`}>
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="472"
          y="340"
          width="30"
          height="30"
        >
          <Path
            d="M472.822 355.142C472.822 347.242 479.226 340.838 487.125 340.838C495.025 340.838 501.429 347.242 501.429 355.142C501.429 363.042 495.025 369.446 487.125 369.446C479.226 369.446 472.822 363.042 472.822 355.142Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M479.965 333.766C468.151 336.931 461.133 349.053 464.292 360.841C467.45 372.629 479.588 379.618 491.403 376.452C503.218 373.287 510.235 361.164 507.077 349.377C503.918 337.589 491.78 330.6 479.965 333.766Z"
            fill="illustrationPalette020"
          />
        </g>
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.371 481.793C464.371 494.36 474.558 504.547 487.125 504.547C499.692 504.547 509.879 494.36 509.879 481.793C509.879 469.226 499.692 459.039 487.125 459.039C474.558 459.039 464.371 469.226 464.371 481.793ZM487.125 455.668C472.697 455.668 461 467.365 461 481.793C461 496.221 472.697 507.918 487.125 507.918C501.553 507.918 513.25 496.221 513.25 481.793C513.25 467.365 501.553 455.668 487.125 455.668Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter2})`}>
        <mask
          id={mask1}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="472"
          y="467"
          width="30"
          height="30"
        >
          <Path
            d="M472.822 481.793C472.822 473.893 479.226 467.489 487.125 467.489C495.025 467.489 501.429 473.893 501.429 481.793C501.429 489.693 495.025 496.097 487.125 496.097C479.226 496.097 472.822 489.693 472.822 481.793Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${mask1})`}>
          <Path
            d="M479.965 460.416C468.151 463.582 461.133 475.704 464.292 487.492C467.45 499.28 479.588 506.269 491.403 503.103C503.218 499.937 510.235 487.815 507.077 476.028C503.918 464.24 491.78 457.251 479.965 460.416Z"
            fill="illustrationPalette020"
          />
        </g>
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.371 609.44C464.371 622.007 474.558 632.194 487.125 632.194C499.692 632.194 509.879 622.007 509.879 609.44C509.879 596.874 499.692 586.686 487.125 586.686C474.558 586.686 464.371 596.874 464.371 609.44ZM487.125 583.315C472.697 583.315 461 595.012 461 609.44C461 623.869 472.697 635.565 487.125 635.565C501.553 635.565 513.25 623.869 513.25 609.44C513.25 595.012 501.553 583.315 487.125 583.315Z"
        fill="illustrationPalette020"
      />
      <g filter={`url(#${filter3})`}>
        <mask
          id={mask2}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="472"
          y="595"
          width="30"
          height="29"
        >
          <Path
            d="M472.822 609.44C472.822 601.541 479.226 595.137 487.125 595.137C495.025 595.137 501.429 601.541 501.429 609.44C501.429 617.34 495.025 623.744 487.125 623.744C479.226 623.744 472.822 617.34 472.822 609.44Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${mask2})`}>
          <Path
            d="M479.965 588.064C468.151 591.23 461.133 603.352 464.292 615.139C467.45 626.927 479.588 633.916 491.403 630.751C503.218 627.585 510.235 615.463 507.077 603.675C503.918 591.888 491.78 584.898 479.965 588.064Z"
            fill="illustrationPalette020"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="429"
          y="179"
          width="632"
          height="128"
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
            result="effect1_dropShadow_1201_311053"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1201_311053"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="464.061"
          y="336.458"
          width="46.1278"
          height="46.1278"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1201_311053"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1201_311053"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="464.061"
          y="463.109"
          width="46.1278"
          height="46.1278"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1201_311053"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1201_311053"
            result="shape"
          />
        </filter>
        <filter
          id={filter3}
          x="464.061"
          y="590.757"
          width="46.1278"
          height="46.1278"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1201_311053"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1201_311053"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
