import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const InvalidHover: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1000"
      height="1001"
      viewBox="0 0 1000 1001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        y="0.34375"
        width="1000"
        height="1000"
        rx="22"
        fill="illustrationBackground020"
      />
      <Path
        d="M215 295C215 250.817 250.817 215 295 215H704.186C748.368 215 784.186 250.817 784.186 295V704.186C784.186 748.368 748.368 784.186 704.186 784.186H295C250.817 784.186 215 748.368 215 704.186V295Z"
        fill="interactiveNegative010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M704.186 241H295C265.177 241 241 265.177 241 295V704.186C241 734.009 265.177 758.186 295 758.186H704.186C734.009 758.186 758.186 734.009 758.186 704.186V295C758.186 265.177 734.009 241 704.186 241ZM295 215C250.817 215 215 250.817 215 295V704.186C215 748.368 250.817 784.186 295 784.186H704.186C748.368 784.186 784.186 748.368 784.186 704.186V295C784.186 250.817 748.368 215 704.186 215H295Z"
        fill="interactiveNegative050"
      />
      <Path
        d="M736.833 655C678.413 655 631 702.413 631 760.833C631 819.253 678.413 866.667 736.833 866.667C795.253 866.667 842.667 819.253 842.667 760.833C842.667 702.413 795.253 655 736.833 655Z"
        fill="inkNegative"
      />
      <Path
        d="M697.667 816.278L682 802.028L697.667 786.328L777.994 706L792.916 721.028L697.667 816.278Z"
        fill="inkInverse"
      />
      <Path
        d="M777.25 816.278L792.917 802.028L777.25 786.328L696.922 706L682 721.028L777.25 816.278Z"
        fill="inkInverse"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M331.492 749.176L315.429 724.633C304.46 707.874 281.097 701.76 263.226 710.948L267.39 708.807C262.955 711.087 260.829 716.771 262.655 721.495L284.89 779.024C288.415 788.144 297.418 801.042 304.878 807.521C304.878 807.521 349.61 844.545 349.61 858.426V876H422.082H441.9H458.318H476.436V858.426C476.436 844.545 503.773 800.824 503.773 800.824C508.806 792.325 513 777.354 513 767.414V694.313C512.672 678.128 498.915 665.012 481.939 665.012C473.447 665.012 466.568 671.57 466.568 679.667V685.521C466.568 669.337 452.81 656.22 435.834 656.22C427.342 656.22 420.463 662.779 420.463 670.875V676.73C420.463 660.546 406.706 647.429 389.73 647.429C381.237 647.429 374.359 653.987 374.359 662.084V667.939C374.359 665.338 374.081 663.27 373.543 661.632L368.855 586.14C368.221 575.931 359.617 568 349.61 568C339.534 568 331.492 576.11 331.492 586.114V658.588V749.176Z"
          fill="white"
        />
      </g>
      <g filter={`url(#${filter1})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M267.31 709.047C281.719 703.775 298.571 707.426 309.612 717.852C311.744 719.866 313.66 722.133 315.3 724.637L331.392 749.216V585.914C331.392 575.895 339.448 567.773 349.542 567.773C359.566 567.773 368.185 575.716 368.82 585.94L373.517 661.543C373.565 661.69 373.612 661.841 373.656 661.996C374.103 663.56 374.334 665.489 374.334 667.859V661.996C374.334 661.827 374.337 661.659 374.343 661.492C374.345 661.417 374.348 661.343 374.352 661.269C374.749 653.499 381.48 647.319 389.732 647.319C391.346 647.319 392.93 647.438 394.477 647.666C398.123 648.203 401.557 649.35 404.662 650.993C412.401 655.09 418.092 662.274 419.905 670.8C420.308 672.695 420.52 674.656 420.52 676.664V670.8C420.52 662.691 427.411 656.124 435.918 656.124C436.602 656.124 437.281 656.145 437.953 656.187C442.61 656.476 446.984 657.752 450.848 659.798C458.587 663.894 464.278 671.078 466.091 679.604C466.494 681.499 466.706 683.46 466.706 685.468V679.604C466.706 671.496 473.597 664.928 482.104 664.928C482.788 664.928 483.467 664.949 484.139 664.991C500.196 665.989 512.905 678.715 513.22 694.272V767.48C513.22 777.435 509.018 792.429 503.977 800.94C503.977 800.94 476.592 844.726 476.592 858.627V876.227H349.542V858.627C349.542 844.726 304.731 807.647 304.731 807.647C297.257 801.158 288.238 788.241 284.707 779.108L262.432 721.495C261.211 718.336 261.754 714.75 263.572 712.035C264.192 711.108 264.961 710.284 265.859 709.612C266.339 709.413 266.823 709.225 267.31 709.047ZM263.005 710.931C263.942 710.45 264.894 710.01 265.859 709.612C266.271 709.303 266.711 709.027 267.176 708.787L263.005 710.931ZM257.303 689.588C274.28 682.487 293.576 683.624 309.612 691.606V585.914C309.612 563.921 327.368 546 349.542 546C370.993 546 389.205 562.811 390.558 584.59L393.109 625.652C404.053 626.341 414.317 630.353 422.608 636.788C426.801 635.205 431.306 634.35 435.918 634.35C448.12 634.35 459.655 638.499 468.794 645.592C472.987 644.009 477.492 643.155 482.104 643.155C510.254 643.155 534.413 665.072 534.996 693.831L535 694.051V767.48C535 775.069 533.477 783.362 531.477 790.571C529.472 797.794 526.522 805.612 522.718 812.033L522.584 812.26L522.446 812.48L522.444 812.483L522.392 812.567C522.359 812.62 522.312 812.697 522.25 812.796L522.191 812.891C522.01 813.184 521.736 813.629 521.383 814.206C520.676 815.362 519.655 817.046 518.425 819.116C515.956 823.273 512.691 828.91 509.452 834.91C506.176 840.979 503.112 847.08 500.926 852.241C498.865 857.104 498.464 859.151 498.388 859.139C498.377 859.137 498.373 859.09 498.372 858.999V898H327.762V861.577C327.244 860.745 326.453 859.593 325.31 858.116C321.99 853.823 317.188 848.679 311.869 843.452C306.646 838.321 301.363 833.537 297.349 830.008C295.353 828.253 293.697 826.831 292.552 825.858C291.979 825.372 291.536 825 291.244 824.755C291.098 824.632 290.99 824.542 290.922 824.486L290.851 824.427L290.843 824.42L290.841 824.418L290.839 824.417L290.644 824.255L290.449 824.086C280.265 815.243 269.19 799.367 264.392 786.957L242.117 729.344C236.919 715.9 241.548 700.294 253.208 691.881L253.047 691.567C253.055 691.563 253.064 691.558 253.072 691.554L257.2 689.433C257.206 689.43 257.212 689.426 257.218 689.423L257.303 689.588ZM328.5 862.93C328.495 862.928 328.456 862.85 328.399 862.699C328.476 862.856 328.505 862.932 328.5 862.93Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="228.845"
          y="545.896"
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
            result="effect1_dropShadow_526_32835"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_526_32835"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="206.845"
          y="523.896"
          width="361.311"
          height="418.311"
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
            result="effect1_dropShadow_526_32835"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_526_32835"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default InvalidHover;
