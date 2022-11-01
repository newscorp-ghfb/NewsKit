import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const CheckedDisabled: React.FC = () => {
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
        d="M215 294.656C215 250.473 250.817 214.656 295 214.656H704.186C748.368 214.656 784.186 250.473 784.186 294.656V703.842C784.186 748.025 748.368 783.842 704.186 783.842H295C250.817 783.842 215 748.025 215 703.842V294.656Z"
        fill="darkBlue020"
      />
      <Path
        d="M428.375 598.022L329.511 499.158L295.845 532.587L428.375 665.116L712.875 380.616L679.446 347.188L428.375 598.022Z"
        fill="darkBlue040"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M697 640.89L552 575.656L586.295 729.656L628.2 668.831L697 640.89Z"
          fill="black"
        />
        <Path
          d="M699.079 646.01L711.046 641.15L699.267 635.851L554.267 570.617L544.209 566.092L546.606 576.857L580.901 730.857L583.656 743.227L590.845 732.791L631.812 673.328L699.079 646.01Z"
          stroke="white"
          strokeWidth="11.0518"
        />
      </g>
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
        d="M780.32 865.543L661.614 746.838C659.422 749.916 657.43 753.146 655.657 756.509C649.412 768.35 645.878 781.842 645.878 796.159C645.878 843.17 683.988 881.28 730.999 881.28C745.316 881.28 758.807 877.745 770.648 871.501C774.011 869.727 777.242 867.735 780.32 865.543ZM762.408 863.261L663.896 764.749C659.426 774.28 656.929 784.92 656.929 796.159C656.929 837.066 690.091 870.228 730.999 870.228C742.238 870.228 752.878 867.731 762.408 863.261ZM798.101 827.57C802.571 818.039 805.068 807.399 805.068 796.16C805.068 755.253 771.906 722.091 730.999 722.091C719.759 722.091 709.12 724.588 699.589 729.058L798.101 827.57ZM806.341 835.81C812.585 823.969 816.12 810.477 816.12 796.16C816.12 749.149 778.01 711.039 730.999 711.039C716.682 711.039 703.19 714.574 691.349 720.818C687.986 722.592 684.756 724.584 681.678 726.776L800.383 845.481C802.575 842.403 804.567 839.173 806.341 835.81ZM855.545 796.16C855.545 864.945 799.784 920.706 730.999 920.706C662.213 920.706 606.452 864.945 606.452 796.16C606.452 727.375 662.213 671.613 730.999 671.613C799.784 671.613 855.545 727.375 855.545 796.16ZM844.493 796.16C844.493 858.841 793.68 909.654 730.999 909.654C668.317 909.654 617.504 858.841 617.504 796.16C617.504 733.478 668.317 682.665 730.999 682.665C793.68 682.665 844.493 733.478 844.493 796.16Z"
        fill="white"
      />
      <defs>
        <filter
          id={filter0}
          x="503.262"
          y="534.424"
          width="254.985"
          height="266.58"
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
            result="effect1_dropShadow_2655_78395"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2655_78395"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="584.349"
          y="660.564"
          width="293.3"
          height="293.299"
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
            result="effect1_dropShadow_2655_78395"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2655_78395"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default CheckedDisabled;
