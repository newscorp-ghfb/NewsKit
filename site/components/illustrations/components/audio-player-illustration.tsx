import React from 'react';
import {getSSRId} from 'newskit';
import {Path} from '../path';
import {Rect} from '../rect';
import {Circle} from '../circle';
import {Svg} from '../svg';

export const AudioPlayerIllustration: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <Circle cx="672.5" cy="379.5" r="187.5" fill="illustrationPalette050" />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="466"
        y="174"
        width="413"
        height="412"
      >
        <Path
          d="M619.097 181.501C509.228 210.94 443.972 323.668 473.344 433.285C502.716 542.902 615.593 607.899 725.462 578.46C835.331 549.02 900.587 436.293 871.216 326.675C841.844 217.058 728.967 152.062 619.097 181.501Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Path
          d="M619.097 181.501C509.228 210.94 443.972 323.668 473.344 433.285C502.716 542.902 615.593 607.899 725.462 578.46C835.331 549.02 900.587 436.293 871.216 326.675C841.844 217.058 728.967 152.062 619.097 181.501Z"
          fill="illustrationInterface080"
        />
      </g>
      <mask
        id={mask1}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="466"
        y="174"
        width="413"
        height="412"
      >
        <Path
          d="M619.097 181.501C509.228 210.94 443.972 323.668 473.344 433.285C502.716 542.902 615.593 607.899 725.462 578.46C835.331 549.02 900.587 436.293 871.216 326.675C841.844 217.058 728.967 152.062 619.097 181.501Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask1})`}>
        <Path
          d="M619.097 181.501C509.228 210.94 443.972 323.668 473.344 433.285C502.716 542.902 615.593 607.899 725.462 578.46C835.331 549.02 900.587 436.293 871.216 326.675C841.844 217.058 728.967 152.062 619.097 181.501Z"
          fill="illustrationPalette060"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M886.162 346.106C867.471 237.879 807.247 212.784 805.86 212.042C765.329 190.353 676.778 150.216 614.397 172.615C552.016 195.015 489.525 328.375 554.968 392.686C614.106 450.801 603.956 516.088 645.647 539.731C687.339 563.375 746.731 565.202 803.226 537.92C859.72 510.639 904.853 454.333 886.162 346.106Z"
          fill="illustrationPalette050"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M888.055 236.891C935.526 304.051 916.762 349.295 916.417 350.424C906.336 383.413 892.838 429.044 847.724 450.316C802.609 471.589 729.552 450.788 728.019 450.235C697.678 439.293 697.838 388.622 679.338 356.59C659.463 322.176 643.891 292.481 653.554 257.843C663.216 223.205 708.51 198.865 742.095 179.481C774.841 160.581 840.583 169.731 888.055 236.891Z"
          fill="illustrationPalette040"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M903.968 233.418C931.211 271.958 920.442 297.922 920.244 298.57C914.459 317.501 906.713 343.687 880.824 355.895C854.934 368.103 813.01 356.166 812.13 355.848C794.718 349.569 794.81 320.491 784.193 302.109C772.787 282.359 763.852 265.319 769.397 245.441C774.942 225.564 800.934 211.596 820.207 200.472C838.999 189.626 876.726 194.877 903.968 233.418Z"
          fill="illustrationPalette030"
        />
      </g>
      <Circle cx="288.5" cy="191.5" r="87.5" fill="illustrationPalette030" />
      <Circle cx="997" cy="454" r="60" fill="illustrationPalette070" />
      <Circle cx="399" cy="562" r="38" fill="illustrationPalette070" />
      <Circle cx="566" cy="104" r="16" fill="illustrationPalette070" />
      <Circle cx="1151.5" cy="215.5" r="23.5" fill="illustrationPalette020" />
      <Circle cx="1120" cy="631" r="18" fill="illustrationPalette040" />
      <Circle cx="191.5" cy="434.5" r="9.5" fill="illustrationPalette020" />
      <Path
        d="M655.918 373.964L577.819 317.429C572.893 313.862 566 317.382 566 323.464L566 436.536C566 442.618 572.893 446.138 577.819 442.571L655.918 386.036C660.027 383.061 660.027 376.939 655.918 373.964Z"
        fill="white"
      />
      <Rect x="699" y="323" width="30" height="113" rx="4" fill="white" />
      <Rect x="753" y="323" width="30" height="113" rx="4" fill="white" />
    </Svg>
  );
};
export default AudioPlayerIllustration;
