import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';
import {Ellipse} from '../../ellipse';

export const Hero: React.FC = () => {
  const mask0 = getSSRId();
  const filter0 = getSSRId();

  return (
    <Svg
      width="1345"
      height="759"
      viewBox="0 0 1345 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1345" height="759" fill="illustrationBackground020" />
      <Ellipse
        cx="672"
        cy="664.5"
        rx="174"
        ry="9.5"
        fill="illustrationShadow010"
      />
      <Path
        d="M918 174H427.5C397.525 174 373 198.525 373 228.5V555.5C373 585.475 397.525 610 427.5 610H563.75V664.5H781.75V610H918C947.975 610 972.5 585.475 972.5 555.5V228.5C972.5 198.525 947.975 174 918 174Z"
        fill="illustrationPalette010"
      />
      <Path
        opacity="0.2"
        d="M918 174H427.5C397.525 174 373 198.525 373 228.5V555.5C373 585.475 397.525 610 427.5 610H563.75V664.5H781.75V610H918C947.975 610 972.5 585.475 972.5 555.5V228.5C972.5 198.525 947.975 174 918 174Z"
        fill="illustrationPalette020"
      />
      <Rect
        x="427"
        y="228"
        width="491"
        height="327"
        fill="illustrationPalette030"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="427"
        y="228"
        width="491"
        height="328"
      >
        <Path
          d="M918 555.5H427.5V228H918V555.5Z"
          fill="illustrationPalette030"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M804.41 227.728C706.27 82.4727 602.168 85.619 599.663 85.4523C526.456 80.581 371.265 80.4898 295.152 154.205C219.04 227.92 142.664 383.306 280.067 433.818C453.849 428.155 476.33 597.571 572.609 633.207C668.889 668.843 745.076 638.587 809.421 561.643C873.766 484.699 902.551 372.983 804.41 227.728Z"
          fill="illustrationPalette040"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M726.41 219.728C628.27 74.4727 524.168 77.619 521.663 77.4523C448.456 72.581 293.265 72.4898 217.152 146.205C141.04 219.92 64.6636 375.306 202.067 425.818C375.849 420.155 398.33 589.571 494.609 625.207C590.889 660.843 667.076 630.587 731.421 553.643C795.766 476.699 824.551 364.983 726.41 219.728Z"
          fill="illustrationPalette050"
        />
      </g>
      <Path
        d="M462 389.741C462 460.677 517.694 518.474 587.327 520.959C589.492 521.037 590.574 521.075 591.287 520.385C592 519.695 592 518.521 592 516.174C592 258.737 592 401.042 592 328.977C592 270.997 592 161.208 592 119.521C592 112.854 592 109.52 590.281 109.05C588.563 108.579 586.866 111.465 583.471 117.237C554.55 166.411 462 328.556 462 389.741Z"
        fill="illustrationPalette010"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M592 504.406C653.456 504.406 703.519 453.951 703.519 391.409C703.519 379.463 698.521 359.561 688.719 333.539C679.201 308.27 666.112 279.645 652.021 251.271C630.747 208.431 607.599 166.981 592 139.874C576.401 166.981 553.253 208.431 531.979 251.271C517.888 279.645 504.799 308.27 495.281 333.539C485.479 359.561 480.481 379.463 480.481 391.409C480.481 453.951 530.544 504.406 592 504.406ZM592 526C665.454 526 725 465.742 725 391.409C725 326.624 623.97 151.415 598.018 107.479C595.278 102.84 588.722 102.84 585.982 107.479C560.031 151.415 459 326.624 459 391.409C459 465.742 518.546 526 592 526Z"
          fill="illustrationPalette040"
        />
      </g>
      <Path
        d="M725 391.556C725 464.213 668.021 523.413 596.781 525.958C594.566 526.038 593.459 526.077 592.729 525.37C592 524.663 592 523.461 592 521.057C592 257.371 592 403.131 592 329.316C592 269.929 592 157.475 592 114.776C592 107.948 592 104.533 593.758 104.051C595.516 103.569 597.253 106.525 600.726 112.437C630.314 162.805 725 328.885 725 391.556Z"
        fill="illustrationPalette040"
      />
      <defs>
        <filter
          id={filter0}
          x="443"
          y="96"
          width="298"
          height="454"
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
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_746_136671"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_746_136671"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
