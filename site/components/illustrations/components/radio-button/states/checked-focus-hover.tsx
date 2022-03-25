import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';

export const CheckedFocusHover: React.FC = () => {
  const filter0 = getSSRId();

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
        d="M465.195 419.006C465.195 376.037 500.029 341.203 542.998 341.203C585.967 341.203 620.801 376.037 620.801 419.006C620.801 461.975 585.967 496.809 542.998 496.809C500.029 496.809 465.195 461.975 465.195 419.006Z"
        fill="illustrationPalette070"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M662.434 430.742C662.81 426.879 663.002 422.962 663.002 419C663.002 415.038 662.81 411.121 662.434 407.258L678.392 405.705C678.818 410.084 679.036 414.519 679.036 419C679.036 423.482 678.818 427.917 678.392 432.295L662.434 430.742ZM657.875 384.227L673.22 379.578C670.616 370.982 667.183 362.748 663.017 354.97L648.884 362.54C652.556 369.397 655.581 376.654 657.875 384.227ZM635.824 343.03L648.212 332.852C642.57 325.985 636.267 319.682 629.4 314.04L619.222 326.429C625.282 331.408 630.845 336.97 635.824 343.03ZM599.712 313.369L607.282 299.235C599.505 295.069 591.271 291.637 582.675 289.032L578.026 304.377C585.599 306.672 592.855 309.696 599.712 313.369ZM554.994 299.819L556.547 283.861C552.169 283.434 547.734 283.217 543.252 283.217C538.771 283.217 534.336 283.434 529.957 283.861L531.51 299.819C535.373 299.443 539.29 299.25 543.252 299.25C547.214 299.25 551.131 299.443 554.994 299.819ZM508.479 304.377L503.83 289.032C495.234 291.637 487 295.069 479.222 299.235L486.792 313.369C493.649 309.696 500.905 306.672 508.479 304.377ZM467.282 326.429L457.104 314.04C450.237 319.682 443.934 325.985 438.292 332.852L450.681 343.03C455.66 336.97 461.222 331.408 467.282 326.429ZM437.621 362.54L423.487 354.97C419.321 362.748 415.889 370.982 413.284 379.578L428.629 384.227C430.924 376.654 433.948 369.397 437.621 362.54ZM424.071 407.258C423.695 411.121 423.502 415.038 423.502 419C423.502 422.962 423.695 426.879 424.071 430.742L408.113 432.295C407.686 427.917 407.469 423.482 407.469 419C407.469 414.519 407.686 410.084 408.113 405.705L424.071 407.258ZM428.629 453.774L413.284 458.423C415.889 467.019 419.321 475.253 423.487 483.03L437.621 475.46C433.948 468.603 430.924 461.347 428.629 453.774ZM450.681 494.97L438.292 505.149C443.934 512.015 450.237 518.318 457.104 523.96L467.282 511.572C461.222 506.593 455.66 501.03 450.681 494.97ZM486.792 524.632L479.222 538.765C487 542.931 495.234 546.364 503.83 548.968L508.479 533.623C500.905 531.329 493.649 528.304 486.792 524.632ZM531.51 538.182L529.957 554.14C534.336 554.566 538.771 554.784 543.252 554.784C547.734 554.784 552.169 554.566 556.547 554.14L554.994 538.182C551.131 538.558 547.214 538.75 543.252 538.75C539.29 538.75 535.373 538.558 531.51 538.182ZM578.026 533.623L582.675 548.968C591.271 546.364 599.505 542.931 607.282 538.765L599.712 524.632C592.855 528.304 585.599 531.329 578.026 533.623ZM619.222 511.572L629.4 523.96C636.267 518.318 642.57 512.015 648.212 505.149L635.824 494.97C630.845 501.03 625.282 506.593 619.222 511.572ZM648.884 475.46L663.017 483.03C667.183 475.253 670.616 467.019 673.22 458.423L657.875 453.774C655.581 461.347 652.556 468.603 648.884 475.46Z"
        fill="illustrationPalette070"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M542.178 549L535.473 538.755C530.895 531.76 521.143 529.208 513.684 533.043L515.422 532.149C513.571 533.101 512.683 535.474 513.445 537.446L522.726 561.459C524.198 565.265 527.955 570.649 531.069 573.354C531.069 573.354 549.741 588.808 549.741 594.602V601.938H579.991H588.263H595.116H602.678V594.602C602.678 588.808 614.089 570.558 614.089 570.558C616.189 567.011 617.94 560.761 617.94 556.612V526.099C617.803 519.344 612.061 513.869 604.975 513.869C601.43 513.869 598.559 516.606 598.559 519.986V522.43C598.559 515.674 592.817 510.199 585.731 510.199C582.186 510.199 579.315 512.937 579.315 516.316V518.76C579.315 512.005 573.572 506.53 566.487 506.53C562.942 506.53 560.071 509.267 560.071 512.647V515.091C560.071 514.005 559.955 513.142 559.73 512.458L557.773 480.947C557.509 476.686 553.917 473.375 549.741 473.375C545.535 473.375 542.178 476.76 542.178 480.936V511.188V549Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M515.473 532.256C521.476 530.059 528.498 531.581 533.099 535.926C533.987 536.766 534.786 537.71 535.469 538.754L542.174 548.999V480.935C542.174 476.759 545.53 473.374 549.736 473.374C553.913 473.374 557.504 476.684 557.769 480.946L559.726 512.457C559.746 512.518 559.765 512.581 559.784 512.646C559.97 513.298 560.066 514.101 560.066 515.089V512.646C560.066 512.575 560.067 512.505 560.07 512.435C560.071 512.404 560.072 512.374 560.074 512.343C560.239 509.104 563.044 506.528 566.482 506.528C567.154 506.528 567.815 506.578 568.459 506.673C569.978 506.897 571.409 507.375 572.703 508.06C575.927 509.767 578.299 512.761 579.054 516.315C579.222 517.105 579.31 517.922 579.31 518.759V516.315C579.31 512.935 582.182 510.198 585.726 510.198C586.011 510.198 586.294 510.207 586.574 510.224C588.515 510.345 590.337 510.877 591.947 511.729C595.171 513.437 597.543 516.431 598.298 519.985C598.466 520.774 598.554 521.592 598.554 522.429V519.985C598.554 516.605 601.426 513.868 604.97 513.868C605.255 513.868 605.538 513.876 605.818 513.894C612.509 514.31 617.804 519.614 617.935 526.098V556.611C617.935 560.76 616.185 567.01 614.084 570.557C614.084 570.557 602.674 588.807 602.674 594.601V601.936H549.736V594.601C549.736 588.807 531.065 573.352 531.065 573.352C527.951 570.648 524.193 565.264 522.722 561.457L513.441 537.444C512.932 536.128 513.158 534.633 513.916 533.502C514.174 533.116 514.494 532.772 514.868 532.492C515.068 532.409 515.27 532.331 515.473 532.256ZM513.679 533.042C514.07 532.841 514.466 532.658 514.868 532.492C515.04 532.363 515.223 532.248 515.417 532.148L513.679 533.042ZM509.597 525.101C504.739 528.608 502.81 535.113 504.976 540.716L514.257 564.729C516.256 569.901 520.871 576.519 525.114 580.204L525.195 580.275L525.277 580.342L525.278 580.343L525.311 580.371L525.446 580.483C525.567 580.585 525.752 580.74 525.99 580.943C526.467 581.348 527.158 581.941 527.989 582.672C529.662 584.143 531.863 586.137 534.039 588.276C536.255 590.454 538.256 592.598 539.64 594.388C540.116 595.003 540.445 595.484 540.661 595.831V611.011H611.749V594.756C611.749 594.794 611.751 594.814 611.756 594.814C611.787 594.819 611.954 593.966 612.813 591.939C613.724 589.788 615.001 587.245 616.365 584.716C617.715 582.215 619.075 579.865 620.104 578.133C620.617 577.27 621.042 576.568 621.337 576.086C621.484 575.846 621.598 575.66 621.673 575.538L621.757 575.403L621.779 575.368L621.837 575.275L621.893 575.181C623.478 572.504 624.707 569.246 625.542 566.235C626.376 563.23 627.01 559.774 627.01 556.611V526.006L627.009 525.914C626.766 513.928 616.699 504.793 604.97 504.793C603.049 504.793 601.172 505.149 599.425 505.809C595.617 502.852 590.81 501.123 585.726 501.123C583.805 501.123 581.927 501.479 580.18 502.139C576.726 499.457 572.449 497.785 567.889 497.498L566.826 480.383C566.263 471.305 558.674 464.299 549.736 464.299C540.497 464.299 533.099 471.768 533.099 480.935V524.987C526.417 521.66 518.377 521.186 511.303 524.146M540.969 596.394C540.967 596.394 540.951 596.361 540.927 596.298C540.959 596.364 540.971 596.395 540.969 596.394ZM509.597 525.101L509.53 524.971L511.268 524.077"
          fill="black"
        />
      </g>
      <Path
        d="M741.359 455.381H773.021V467.786H726V374.068H741.359V455.381Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M780.746 430.299C780.746 422.838 782.272 416.23 785.326 410.477C788.47 404.723 792.692 400.273 797.991 397.127C803.38 393.891 809.308 392.272 815.775 392.272C821.614 392.272 826.688 393.441 831 395.778C835.401 398.026 838.904 400.858 841.509 404.274V393.486H857.003V467.786H841.509V456.729C838.904 460.235 835.356 463.157 830.865 465.494C826.374 467.831 821.254 469 815.506 469C809.129 469 803.29 467.382 797.991 464.146C792.692 460.819 788.47 456.235 785.326 450.391C782.272 444.458 780.746 437.761 780.746 430.299ZM841.509 430.569C841.509 425.445 840.431 420.995 838.275 417.219C836.209 413.443 833.47 410.567 830.057 408.589C826.643 406.611 822.961 405.622 819.009 405.622C815.057 405.622 811.374 406.611 807.961 408.589C804.548 410.477 801.763 413.308 799.608 417.084C797.542 420.77 796.509 425.175 796.509 430.299C796.509 435.423 797.542 439.918 799.608 443.784C801.763 447.649 804.548 450.616 807.961 452.684C811.464 454.661 815.147 455.65 819.009 455.65C822.961 455.65 826.643 454.661 830.057 452.684C833.47 450.706 836.209 447.829 838.275 444.053C840.431 440.188 841.509 435.693 841.509 430.569Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M892.535 404.543C895.14 400.947 898.688 398.026 903.179 395.778C907.76 393.441 912.835 392.272 918.404 392.272C924.96 392.272 930.889 393.846 936.188 396.992C941.487 400.138 945.664 404.633 948.718 410.477C951.772 416.23 953.299 422.838 953.299 430.299C953.299 437.761 951.772 444.458 948.718 450.391C945.664 456.235 941.442 460.819 936.053 464.146C930.754 467.382 924.871 469 918.404 469C912.655 469 907.535 467.876 903.044 465.629C898.643 463.381 895.14 460.505 892.535 456.999V467.786H877.176V368H892.535V404.543ZM937.67 430.299C937.67 425.175 936.592 420.77 934.436 417.084C932.371 413.308 929.586 410.477 926.083 408.589C922.67 406.611 918.987 405.622 915.035 405.622C911.173 405.622 907.49 406.611 903.988 408.589C900.574 410.567 897.79 413.443 895.634 417.219C893.568 420.995 892.535 425.445 892.535 430.569C892.535 435.693 893.568 440.188 895.634 444.053C897.79 447.829 900.574 450.706 903.988 452.684C907.49 454.661 911.173 455.65 915.035 455.65C918.987 455.65 922.67 454.661 926.083 452.684C929.586 450.616 932.371 447.649 934.436 443.784C936.592 439.918 937.67 435.423 937.67 430.299Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M1036.53 428.816C1036.53 431.603 1036.35 434.12 1035.99 436.367H979.266C979.715 442.3 981.915 447.065 985.867 450.661C989.819 454.257 994.67 456.055 1000.42 456.055C1008.68 456.055 1014.52 452.594 1017.93 445.672H1034.5C1032.26 452.504 1028.17 458.122 1022.24 462.527C1016.41 466.842 1009.13 469 1000.42 469C993.322 469 986.945 467.427 981.287 464.28C975.718 461.044 971.317 456.549 968.083 450.796C964.939 444.952 963.368 438.21 963.368 430.569C963.368 422.927 964.894 416.23 967.948 410.477C971.092 404.633 975.448 400.138 981.017 396.992C986.676 393.846 993.143 392.272 1000.42 392.272C1007.42 392.272 1013.67 393.801 1019.15 396.857C1024.62 399.914 1028.89 404.229 1031.94 409.802C1035 415.286 1036.53 421.624 1036.53 428.816ZM1020.49 423.961C1020.4 418.298 1018.38 413.758 1014.43 410.342C1010.48 406.926 1005.58 405.218 999.745 405.218C994.445 405.218 989.909 406.926 986.137 410.342C982.364 413.668 980.119 418.208 979.4 423.961H1020.49Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M1067 368V467.786H1051.64V368H1067Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M741.359 455.381H773.021V467.786H726V374.068H741.359V455.381Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M780.746 430.299C780.746 422.838 782.272 416.23 785.326 410.477C788.47 404.723 792.692 400.273 797.991 397.127C803.38 393.891 809.308 392.272 815.775 392.272C821.614 392.272 826.688 393.441 831 395.778C835.401 398.026 838.904 400.858 841.509 404.274V393.486H857.003V467.786H841.509V456.729C838.904 460.235 835.356 463.157 830.865 465.494C826.374 467.831 821.254 469 815.506 469C809.129 469 803.29 467.382 797.991 464.146C792.692 460.819 788.47 456.235 785.326 450.391C782.272 444.458 780.746 437.761 780.746 430.299ZM841.509 430.569C841.509 425.445 840.431 420.995 838.275 417.219C836.209 413.443 833.47 410.567 830.057 408.589C826.643 406.611 822.961 405.622 819.009 405.622C815.057 405.622 811.374 406.611 807.961 408.589C804.548 410.477 801.763 413.308 799.608 417.084C797.542 420.77 796.509 425.175 796.509 430.299C796.509 435.423 797.542 439.918 799.608 443.784C801.763 447.649 804.548 450.616 807.961 452.684C811.464 454.661 815.147 455.65 819.009 455.65C822.961 455.65 826.643 454.661 830.057 452.684C833.47 450.706 836.209 447.829 838.275 444.053C840.431 440.188 841.509 435.693 841.509 430.569Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M892.535 404.543C895.14 400.947 898.688 398.026 903.179 395.778C907.76 393.441 912.835 392.272 918.404 392.272C924.96 392.272 930.889 393.846 936.188 396.992C941.487 400.138 945.664 404.633 948.718 410.477C951.772 416.23 953.299 422.838 953.299 430.299C953.299 437.761 951.772 444.458 948.718 450.391C945.664 456.235 941.442 460.819 936.053 464.146C930.754 467.382 924.871 469 918.404 469C912.655 469 907.535 467.876 903.044 465.629C898.643 463.381 895.14 460.505 892.535 456.999V467.786H877.176V368H892.535V404.543ZM937.67 430.299C937.67 425.175 936.592 420.77 934.436 417.084C932.371 413.308 929.586 410.477 926.083 408.589C922.67 406.611 918.987 405.622 915.035 405.622C911.173 405.622 907.49 406.611 903.988 408.589C900.574 410.567 897.79 413.443 895.634 417.219C893.568 420.995 892.535 425.445 892.535 430.569C892.535 435.693 893.568 440.188 895.634 444.053C897.79 447.829 900.574 450.706 903.988 452.684C907.49 454.661 911.173 455.65 915.035 455.65C918.987 455.65 922.67 454.661 926.083 452.684C929.586 450.616 932.371 447.649 934.436 443.784C936.592 439.918 937.67 435.423 937.67 430.299Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M1036.53 428.816C1036.53 431.603 1036.35 434.12 1035.99 436.367H979.266C979.715 442.3 981.915 447.065 985.867 450.661C989.819 454.257 994.67 456.055 1000.42 456.055C1008.68 456.055 1014.52 452.594 1017.93 445.672H1034.5C1032.26 452.504 1028.17 458.122 1022.24 462.527C1016.41 466.842 1009.13 469 1000.42 469C993.322 469 986.945 467.427 981.287 464.28C975.718 461.044 971.317 456.549 968.083 450.796C964.939 444.952 963.368 438.21 963.368 430.569C963.368 422.927 964.894 416.23 967.948 410.477C971.092 404.633 975.448 400.138 981.017 396.992C986.676 393.846 993.143 392.272 1000.42 392.272C1007.42 392.272 1013.67 393.801 1019.15 396.857C1024.62 399.914 1028.89 404.229 1031.94 409.802C1035 415.286 1036.53 421.624 1036.53 428.816ZM1020.49 423.961C1020.4 418.298 1018.38 413.758 1014.43 410.342C1010.48 406.926 1005.58 405.218 999.745 405.218C994.445 405.218 989.909 406.926 986.137 410.342C982.364 413.668 980.119 418.208 979.4 423.961H1020.49Z"
        fill="illustrationAnatomyBorder020"
      />
      <Path
        d="M1067 368V467.786H1051.64V368H1067Z"
        fill="illustrationAnatomyBorder020"
      />
      <defs>
        <filter
          id={filter0}
          x="406.872"
          y="409.436"
          width="316.257"
          height="316.257"
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
          <feOffset dy="18.5642" />
          <feGaussianBlur stdDeviation="18.5642" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_840_135912"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_840_135912"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default CheckedFocusHover;
