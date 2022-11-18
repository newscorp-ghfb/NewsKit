import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const CheckedValidHover: React.FC = () => {
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
        d="M215 294.656C215 250.473 250.817 214.656 295 214.656H704.186C748.368 214.656 784.186 250.473 784.186 294.656V703.842C784.186 748.025 748.368 783.842 704.186 783.842H295C250.817 783.842 215 748.025 215 703.842V294.656Z"
        fill="interactivePositive050"
      />
      <Path
        d="M428.375 598.022L329.511 499.158L295.845 532.587L428.375 665.116L712.875 380.616L679.446 347.188L428.375 598.022Z"
        fill="white"
      />
      <Path
        d="M736.833 654.656C678.413 654.656 631 702.07 631 760.49C631 818.91 678.413 866.323 736.833 866.323C795.253 866.323 842.667 818.91 842.667 760.49C842.667 702.07 795.253 654.656 736.833 654.656Z"
        fill="interactivePositive040"
      />
      <Path
        d="M715.667 813.407L662.75 760.491L677.672 745.568L715.667 783.456L795.994 703.129L810.917 718.157L715.667 813.407Z"
        fill="inkInverse"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M331.492 748.833L315.429 724.289C304.46 707.531 281.097 701.417 263.226 710.604L267.39 708.463C262.955 710.743 260.829 716.427 262.655 721.152L284.89 778.68C288.415 787.8 297.418 800.698 304.878 807.177C304.878 807.177 349.61 844.201 349.61 858.083V875.656H422.082H441.9H458.318H476.436V858.083C476.436 844.201 503.773 800.48 503.773 800.48C508.806 791.982 513 777.01 513 767.07V693.969C512.672 677.784 498.915 664.668 481.939 664.668C473.447 664.668 466.568 671.226 466.568 679.323V685.178C466.568 668.993 452.81 655.877 435.834 655.877C427.342 655.877 420.463 662.435 420.463 670.532V676.387C420.463 660.202 406.706 647.086 389.73 647.086C381.237 647.086 374.359 653.644 374.359 661.74V667.595C374.359 664.994 374.081 662.927 373.543 661.288L368.855 585.796C368.221 575.587 359.617 567.656 349.61 567.656C339.534 567.656 331.492 575.766 331.492 585.77V658.244V748.833Z"
          fill="white"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M267.31 708.703C281.719 703.431 298.571 707.082 309.612 717.508C311.744 719.522 313.66 721.789 315.3 724.293L331.392 748.873V585.57C331.392 575.551 339.448 567.429 349.542 567.429C359.566 567.429 368.185 575.372 368.82 585.596L373.517 661.199C373.565 661.347 373.612 661.498 373.656 661.652C374.103 663.217 374.334 665.145 374.334 667.516V661.652C374.334 661.483 374.337 661.315 374.343 661.148C374.345 661.074 374.348 661 374.352 660.926C374.749 653.155 381.48 646.976 389.732 646.976C391.346 646.976 392.93 647.094 394.477 647.322C398.123 647.859 401.557 649.006 404.662 650.65C412.401 654.747 418.092 661.93 419.905 670.456C420.308 672.351 420.52 674.312 420.52 676.32V670.456C420.52 662.348 427.411 655.78 435.918 655.78C436.602 655.78 437.281 655.801 437.953 655.843C442.61 656.132 446.984 657.408 450.848 659.454C458.587 663.551 464.278 670.734 466.091 679.26C466.494 681.155 466.706 683.116 466.706 685.124V679.26C466.706 671.152 473.597 664.584 482.104 664.584C482.788 664.584 483.467 664.605 484.139 664.647C500.196 665.645 512.905 678.371 513.22 693.928V767.137C513.22 777.091 509.018 792.085 503.977 800.596C503.977 800.596 476.592 844.382 476.592 858.284V875.883H349.542V858.284C349.542 844.382 304.731 807.303 304.731 807.303C297.257 800.814 288.238 787.897 284.707 778.764L262.432 721.151C261.211 717.993 261.754 714.406 263.572 711.691C264.192 710.765 264.961 709.94 265.859 709.268C266.339 709.07 266.823 708.881 267.31 708.703ZM263.005 710.588C263.942 710.106 264.894 709.666 265.859 709.268C266.271 708.959 266.711 708.683 267.176 708.444L263.005 710.588ZM257.303 689.244C274.28 682.144 293.576 683.28 309.612 691.262V585.57C309.612 563.577 327.368 545.656 349.542 545.656C370.993 545.656 389.205 562.467 390.558 584.246L393.109 625.309C404.053 625.998 414.317 630.01 422.608 636.444C426.801 634.861 431.306 634.007 435.918 634.007C448.12 634.007 459.655 638.156 468.794 645.248C472.987 643.665 477.492 642.811 482.104 642.811C510.254 642.811 534.413 664.728 534.996 693.487L535 693.708V767.137C535 774.726 533.477 783.018 531.476 790.228C529.472 797.451 526.522 805.268 522.718 811.69L522.584 811.916L522.446 812.136L522.444 812.139L522.392 812.223C522.359 812.276 522.312 812.353 522.25 812.452L522.191 812.547C522.01 812.841 521.736 813.285 521.383 813.862C520.676 815.018 519.655 816.702 518.425 818.772C515.956 822.93 512.691 828.566 509.452 834.566C506.176 840.635 503.112 846.736 500.926 851.897C498.865 856.761 498.464 858.807 498.388 858.795C498.377 858.794 498.373 858.746 498.372 858.655V897.656H327.762V861.234C327.244 860.401 326.453 859.249 325.31 857.772C321.99 853.479 317.188 848.335 311.869 843.109C306.646 837.977 301.363 833.193 297.349 829.664C295.353 827.909 293.697 826.488 292.552 825.515C291.979 825.028 291.536 824.656 291.244 824.411C291.098 824.289 290.99 824.198 290.922 824.142L290.851 824.083L290.843 824.076L290.841 824.074L290.839 824.073L290.644 823.911L290.449 823.742C280.265 814.899 269.19 799.023 264.392 786.614L242.117 729C236.919 715.556 241.548 699.95 253.208 691.537L253.047 691.223C253.055 691.219 253.064 691.215 253.072 691.21L257.2 689.089C257.206 689.086 257.212 689.083 257.218 689.08L257.303 689.244ZM328.5 862.586C328.495 862.585 328.456 862.506 328.399 862.355C328.476 862.513 328.505 862.588 328.5 862.586Z"
        fill="black"
      />
      <defs>
        <filter
          id={filter0}
          x="228.845"
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
            result="effect1_dropShadow_2688_78756"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2688_78756"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default CheckedValidHover;
