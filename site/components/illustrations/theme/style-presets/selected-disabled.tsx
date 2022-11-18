import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const SelectedDisabled: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        width="1000"
        height="1000"
        rx="22"
        fill="illustrationBackground020"
      />
      <Path
        d="M184 222.656C134.294 222.656 94 267.736 94 323.344V759.656H175H833L907 759.656V323.344C907 267.736 866.706 222.656 817 222.656H184Z"
        fill="darkBlue020"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107.5 748.656C100.044 748.656 94 754.7 94 762.156C94 769.612 100.044 775.656 107.5 775.656H893.5C900.956 775.656 907 769.612 907 762.156C907 754.7 900.956 748.656 893.5 748.656H107.5Z"
        fill="darkBlue040"
      />
      <Path
        d="M425.2 429.506V449.281H392.65V551.656H368.15V449.281H335.6V429.506H425.2Z"
        fill="darkBlue040"
      />
      <Path
        d="M436.776 502.831C436.776 493.031 438.701 484.34 442.551 476.756C446.518 469.173 451.826 463.34 458.476 459.256C465.243 455.173 472.768 453.131 481.051 453.131C488.284 453.131 494.584 454.59 499.951 457.506C505.434 460.423 509.809 464.098 513.076 468.531V454.706H537.751V551.656H513.076V537.481C509.926 542.031 505.551 545.823 499.951 548.856C494.468 551.773 488.109 553.231 480.876 553.231C472.709 553.231 465.243 551.131 458.476 546.931C451.826 542.731 446.518 536.84 442.551 529.256C438.701 521.556 436.776 512.748 436.776 502.831ZM513.076 503.181C513.076 497.231 511.909 492.156 509.576 487.956C507.243 483.64 504.093 480.373 500.126 478.156C496.159 475.823 491.901 474.656 487.351 474.656C482.801 474.656 478.601 475.765 474.751 477.981C470.901 480.198 467.751 483.465 465.301 487.781C462.968 491.981 461.801 496.998 461.801 502.831C461.801 508.665 462.968 513.798 465.301 518.231C467.751 522.548 470.901 525.873 474.751 528.206C478.718 530.54 482.918 531.706 487.351 531.706C491.901 531.706 496.159 530.598 500.126 528.381C504.093 526.048 507.243 522.781 509.576 518.581C511.909 514.265 513.076 509.131 513.076 503.181Z"
        fill="darkBlue040"
      />
      <Path
        d="M586.18 468.881C589.33 464.215 593.646 460.423 599.13 457.506C604.73 454.59 611.088 453.131 618.205 453.131C626.488 453.131 633.955 455.173 640.605 459.256C647.371 463.34 652.68 469.173 656.53 476.756C660.496 484.223 662.48 492.915 662.48 502.831C662.48 512.748 660.496 521.556 656.53 529.256C652.68 536.84 647.371 542.731 640.605 546.931C633.955 551.131 626.488 553.231 618.205 553.231C610.971 553.231 604.613 551.831 599.13 549.031C593.763 546.115 589.446 542.381 586.18 537.831V551.656H561.68V422.156H586.18V468.881ZM637.455 502.831C637.455 496.998 636.23 491.981 633.78 487.781C631.446 483.465 628.296 480.198 624.33 477.981C620.48 475.765 616.28 474.656 611.73 474.656C607.296 474.656 603.096 475.823 599.13 478.156C595.28 480.373 592.13 483.64 589.68 487.956C587.346 492.273 586.18 497.348 586.18 503.181C586.18 509.015 587.346 514.09 589.68 518.406C592.13 522.723 595.28 526.048 599.13 528.381C603.096 530.598 607.296 531.706 611.73 531.706C616.28 531.706 620.48 530.54 624.33 528.206C628.296 525.873 631.446 522.548 633.78 518.231C636.23 513.915 637.455 508.781 637.455 502.831Z"
        fill="darkBlue040"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M697 640.89L552 575.656L586.295 729.656L628.2 668.831L697 640.89Z"
          fill="black"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M725.092 641.41L635.424 677.825L581.016 756.798L536.417 556.527L725.092 641.41ZM628.2 668.831L697 640.89L552 575.656L586.295 729.656L628.2 668.831Z"
        fill="white"
      />
      <g filter={`url(#${filter1})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M780.32 865.546C766.405 875.455 749.382 881.283 730.999 881.283C683.988 881.283 645.878 843.173 645.878 796.162C645.878 777.778 651.705 760.755 661.614 746.841L780.32 865.546ZM800.383 845.484C810.292 831.569 816.12 814.547 816.12 796.163C816.12 749.152 778.01 711.042 730.999 711.042C712.615 711.042 695.592 716.87 681.678 726.779L800.383 845.484ZM730.999 909.657C793.68 909.657 844.493 858.844 844.493 796.163C844.493 733.481 793.68 682.668 730.999 682.668C668.317 682.668 617.504 733.481 617.504 796.163C617.504 858.844 668.317 909.657 730.999 909.657Z"
          fill="black"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M780.32 865.545L661.614 746.84C659.422 749.918 657.43 753.148 655.657 756.511C649.412 768.352 645.878 781.844 645.878 796.161C645.878 843.172 683.988 881.282 730.999 881.282C745.316 881.282 758.807 877.747 770.648 871.503C774.011 869.729 777.242 867.737 780.32 865.545ZM762.408 863.263L663.896 764.751C659.426 774.282 656.929 784.922 656.929 796.161C656.929 837.068 690.091 870.23 730.999 870.23C742.238 870.23 752.878 867.733 762.408 863.263ZM798.101 827.572C802.571 818.041 805.068 807.401 805.068 796.162C805.068 755.255 771.906 722.093 730.999 722.093C719.759 722.093 709.12 724.59 699.589 729.06L798.101 827.572ZM806.341 835.811C812.585 823.971 816.12 810.479 816.12 796.162C816.12 749.151 778.01 711.041 730.999 711.041C716.682 711.041 703.19 714.576 691.349 720.82C687.986 722.594 684.756 724.586 681.678 726.778L800.383 845.483C802.575 842.405 804.567 839.175 806.341 835.811ZM855.545 796.162C855.545 864.947 799.784 920.708 730.999 920.708C662.213 920.708 606.452 864.947 606.452 796.162C606.452 727.377 662.213 671.615 730.999 671.615C799.784 671.615 855.545 727.377 855.545 796.162ZM844.493 796.162C844.493 858.843 793.68 909.656 730.999 909.656C668.317 909.656 617.504 858.843 617.504 796.162C617.504 733.48 668.317 682.667 730.999 682.667C793.68 682.667 844.493 733.48 844.493 796.162Z"
        fill="white"
      />
      <defs>
        <filter
          id={filter0}
          x="518.845"
          y="553.553"
          width="211.311"
          height="220.311"
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
          <feOffset dy="11.0518" />
          <feGaussianBlur stdDeviation="16.5776" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2655_78405"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2655_78405"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="584.349"
          y="660.564"
          width="293.3"
          height="293.301"
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
          <feOffset dy="11.0518" />
          <feGaussianBlur stdDeviation="16.5776" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2655_78405"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2655_78405"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default SelectedDisabled;
