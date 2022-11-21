import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const StatesHoverActive: React.FC = () => {
  const filter0 = getSSRId();

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
        opacity="0.3"
        d="M94 196.656C94 139.771 140.115 93.6562 197 93.6562H803C859.885 93.6562 906 139.771 906 196.656V802.656C906 859.542 859.885 905.656 803 905.656H197C140.115 905.656 94 859.542 94 802.656V196.656Z"
        fill="interactiveInput030"
      />
      <Path
        opacity="0.4"
        d="M133 231.656C133 176.98 177.324 132.656 232 132.656H768C822.676 132.656 867 176.98 867 231.656V767.656C867 822.332 822.676 866.656 768 866.656H232C177.324 866.656 133 822.332 133 767.656V231.656Z"
        fill="interactiveInput030"
      />
      <Path
        d="M175 266.656C175 215.846 216.19 174.656 267 174.656H733C783.81 174.656 825 215.846 825 266.656V732.656C825 783.466 783.81 824.656 733 824.656H267C216.19 824.656 175 783.466 175 732.656V266.656Z"
        fill="interactiveInput030"
      />
      <Path
        d="M215 294.656C215 250.473 250.817 214.656 295 214.656H704.186C748.368 214.656 784.186 250.473 784.186 294.656V703.842C784.186 748.025 748.368 783.842 704.186 783.842H295C250.817 783.842 215 748.025 215 703.842V294.656Z"
        fill="interactiveInput050"
      />
      <Path
        d="M428.375 598.022L329.511 499.158L295.845 532.587L428.375 665.116L712.875 380.616L679.446 347.188L428.375 598.022Z"
        fill="white"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M541.492 748.833L525.429 724.289C514.46 707.531 491.097 701.417 473.226 710.604L477.39 708.463C472.955 710.743 470.829 716.427 472.655 721.152L494.89 778.68C498.415 787.8 507.418 800.698 514.878 807.177C514.878 807.177 559.61 844.201 559.61 858.083V875.656H632.082H651.9H668.318H686.436V858.083C686.436 844.201 713.773 800.48 713.773 800.48C718.806 791.982 723 777.01 723 767.07V693.969C722.672 677.784 708.915 664.668 691.939 664.668C683.447 664.668 676.568 671.226 676.568 679.323V685.178C676.568 668.993 662.81 655.877 645.834 655.877C637.342 655.877 630.463 662.435 630.463 670.532V676.387C630.463 660.202 616.706 647.086 599.73 647.086C591.237 647.086 584.359 653.644 584.359 661.74V667.595C584.359 664.994 584.081 662.927 583.543 661.288L578.855 585.796C578.221 575.587 569.617 567.656 559.61 567.656C549.534 567.656 541.492 575.766 541.492 585.77V658.244V748.833Z"
          fill="white"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M477.31 708.703C491.719 703.431 508.571 707.082 519.612 717.508C521.744 719.522 523.66 721.789 525.3 724.293L541.392 748.873V585.57C541.392 575.551 549.448 567.429 559.542 567.429C569.566 567.429 578.185 575.372 578.82 585.596L583.517 661.199C583.565 661.347 583.612 661.498 583.656 661.652C584.103 663.217 584.334 665.145 584.334 667.516V661.652C584.334 661.483 584.337 661.315 584.343 661.148C584.345 661.074 584.348 661 584.352 660.926C584.749 653.155 591.48 646.976 599.732 646.976C601.346 646.976 602.93 647.094 604.477 647.322C608.123 647.859 611.557 649.006 614.662 650.65C622.401 654.747 628.092 661.93 629.905 670.456C630.308 672.351 630.52 674.312 630.52 676.32V670.456C630.52 662.348 637.411 655.78 645.918 655.78C646.602 655.78 647.281 655.801 647.953 655.843C652.61 656.132 656.984 657.408 660.848 659.454C668.587 663.551 674.278 670.734 676.091 679.26C676.494 681.155 676.706 683.116 676.706 685.124V679.26C676.706 671.152 683.597 664.584 692.104 664.584C692.788 664.584 693.467 664.605 694.139 664.647C710.196 665.645 722.905 678.371 723.22 693.928V767.137C723.22 777.091 719.018 792.085 713.977 800.596C713.977 800.596 686.592 844.382 686.592 858.284V875.883H559.542V858.284C559.542 844.382 514.731 807.303 514.731 807.303C507.257 800.814 498.238 787.897 494.707 778.764L472.432 721.151C471.211 717.993 471.754 714.406 473.572 711.691C474.192 710.765 474.961 709.94 475.859 709.268C476.339 709.07 476.823 708.881 477.31 708.703ZM473.005 710.588C473.942 710.106 474.894 709.666 475.859 709.268C476.271 708.959 476.711 708.683 477.176 708.444L473.005 710.588ZM467.303 689.244C484.28 682.144 503.576 683.28 519.612 691.262V585.57C519.612 563.577 537.368 545.656 559.542 545.656C580.993 545.656 599.205 562.467 600.558 584.246L603.109 625.309C614.053 625.998 624.317 630.01 632.608 636.444C636.801 634.861 641.306 634.007 645.918 634.007C658.12 634.007 669.655 638.156 678.794 645.248C682.987 643.665 687.492 642.811 692.104 642.811C720.254 642.811 744.413 664.728 744.996 693.487L745 693.708V767.137C745 774.726 743.477 783.018 741.476 790.228C739.472 797.451 736.522 805.268 732.718 811.69L732.584 811.916L732.446 812.136L732.444 812.139L732.392 812.223C732.359 812.276 732.312 812.353 732.25 812.452L732.191 812.547C732.01 812.841 731.736 813.285 731.383 813.862C730.676 815.018 729.655 816.702 728.425 818.772C725.956 822.93 722.691 828.566 719.452 834.566C716.176 840.635 713.112 846.736 710.926 851.897C708.865 856.761 708.464 858.807 708.388 858.795C708.377 858.794 708.373 858.746 708.372 858.655V897.656H537.762V861.234C537.244 860.401 536.453 859.249 535.31 857.772C531.99 853.479 527.188 848.335 521.869 843.109C516.646 837.977 511.363 833.193 507.349 829.664C505.353 827.909 503.697 826.488 502.552 825.515C501.979 825.028 501.536 824.656 501.244 824.411C501.098 824.289 500.99 824.198 500.922 824.142L500.851 824.083L500.843 824.076L500.841 824.074L500.839 824.073L500.644 823.911L500.449 823.742C490.265 814.899 479.19 799.023 474.392 786.614L452.117 729C446.919 715.556 451.548 699.95 463.208 691.537L463.047 691.223C463.055 691.219 463.064 691.215 463.072 691.21L467.2 689.089C467.206 689.086 467.212 689.083 467.218 689.08L467.303 689.244ZM538.5 862.586C538.495 862.585 538.456 862.506 538.399 862.355C538.476 862.513 538.505 862.588 538.5 862.586Z"
        fill="black"
      />
      <defs>
        <filter
          id={filter0}
          x="438.845"
          y="545.553"
          width="317.311"
          height="374.311"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2688_78792"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2688_78792"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default StatesHoverActive;
