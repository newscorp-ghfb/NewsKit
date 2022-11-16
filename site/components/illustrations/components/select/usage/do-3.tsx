import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Do3: React.FC = () => {
  const clip0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground010" />
        <Path
          d="M589.621 162V164.233H582.538V169.155H588.06V171.388H582.538V178.688H579.801V162H589.621ZM604.139 165.458V178.688H601.402V177.127C600.969 177.671 600.401 178.103 599.697 178.423C599.008 178.728 598.272 178.88 597.488 178.88C596.447 178.88 595.511 178.663 594.679 178.231C593.862 177.799 593.214 177.159 592.734 176.31C592.27 175.462 592.038 174.438 592.038 173.237V165.458H594.751V172.829C594.751 174.014 595.047 174.926 595.639 175.566C596.231 176.19 597.04 176.503 598.064 176.503C599.089 176.503 599.897 176.19 600.489 175.566C601.097 174.926 601.402 174.014 601.402 172.829V165.458H604.139ZM610.487 160.92V178.688H607.75V160.92H610.487ZM616.818 160.92V178.688H614.081V160.92H616.818ZM633.324 165.242C634.364 165.242 635.292 165.458 636.109 165.89C636.941 166.322 637.589 166.963 638.054 167.811C638.518 168.659 638.75 169.684 638.75 170.884V178.688H636.037V171.292C636.037 170.108 635.741 169.203 635.148 168.579C634.556 167.939 633.748 167.619 632.723 167.619C631.699 167.619 630.883 167.939 630.274 168.579C629.682 169.203 629.386 170.108 629.386 171.292V178.688H626.649V165.458H629.386V166.971C629.834 166.426 630.402 166.002 631.091 165.698C631.795 165.394 632.539 165.242 633.324 165.242ZM641.329 172.013C641.329 170.684 641.601 169.508 642.145 168.483C642.706 167.459 643.458 166.666 644.402 166.106C645.363 165.53 646.419 165.242 647.572 165.242C648.612 165.242 649.516 165.45 650.285 165.866C651.069 166.266 651.693 166.77 652.158 167.379V165.458H654.919V178.688H652.158V176.719C651.693 177.343 651.061 177.863 650.261 178.279C649.46 178.696 648.548 178.904 647.524 178.904C646.387 178.904 645.347 178.615 644.402 178.039C643.458 177.447 642.706 176.631 642.145 175.59C641.601 174.534 641.329 173.341 641.329 172.013ZM652.158 172.061C652.158 171.148 651.966 170.356 651.581 169.684C651.213 169.011 650.725 168.499 650.117 168.147C649.508 167.795 648.852 167.619 648.148 167.619C647.444 167.619 646.787 167.795 646.179 168.147C645.571 168.483 645.075 168.987 644.69 169.66C644.322 170.316 644.138 171.1 644.138 172.013C644.138 172.925 644.322 173.725 644.69 174.414C645.075 175.102 645.571 175.63 646.179 175.998C646.803 176.351 647.46 176.527 648.148 176.527C648.852 176.527 649.508 176.351 650.117 175.998C650.725 175.646 651.213 175.134 651.581 174.462C651.966 173.773 652.158 172.973 652.158 172.061ZM674.529 165.242C675.569 165.242 676.498 165.458 677.314 165.89C678.146 166.322 678.795 166.963 679.259 167.811C679.739 168.659 679.979 169.684 679.979 170.884V178.688H677.266V171.292C677.266 170.108 676.97 169.203 676.378 168.579C675.785 167.939 674.977 167.619 673.952 167.619C672.928 167.619 672.112 167.939 671.503 168.579C670.911 169.203 670.615 170.108 670.615 171.292V178.688H667.902V171.292C667.902 170.108 667.606 169.203 667.014 168.579C666.421 167.939 665.613 167.619 664.589 167.619C663.564 167.619 662.748 167.939 662.139 168.579C661.547 169.203 661.251 170.108 661.251 171.292V178.688H658.514V165.458H661.251V166.971C661.699 166.426 662.268 166.002 662.956 165.698C663.644 165.394 664.38 165.242 665.165 165.242C666.221 165.242 667.166 165.466 667.998 165.914C668.83 166.362 669.471 167.011 669.919 167.859C670.319 167.059 670.943 166.426 671.792 165.962C672.64 165.482 673.552 165.242 674.529 165.242ZM695.587 171.749C695.587 172.245 695.555 172.693 695.491 173.093H685.383C685.463 174.15 685.855 174.998 686.559 175.638C687.264 176.278 688.128 176.599 689.152 176.599C690.625 176.599 691.666 175.982 692.274 174.75H695.227C694.827 175.966 694.099 176.967 693.042 177.751C692.002 178.519 690.705 178.904 689.152 178.904C687.888 178.904 686.751 178.623 685.743 178.063C684.751 177.487 683.966 176.687 683.39 175.662C682.83 174.622 682.55 173.421 682.55 172.061C682.55 170.7 682.822 169.508 683.366 168.483C683.926 167.443 684.703 166.642 685.695 166.082C686.703 165.522 687.856 165.242 689.152 165.242C690.401 165.242 691.513 165.514 692.49 166.058C693.466 166.602 694.227 167.371 694.771 168.363C695.315 169.34 695.587 170.468 695.587 171.749ZM692.73 170.884C692.714 169.876 692.354 169.067 691.65 168.459C690.945 167.851 690.073 167.547 689.032 167.547C688.088 167.547 687.28 167.851 686.607 168.459C685.935 169.051 685.535 169.86 685.407 170.884H692.73Z"
          fill="illustrationHighlight010"
        />
        <Rect
          x="578.71"
          y="210.729"
          width="330.58"
          height="94.6005"
          rx="11.29"
          fill="interfaceBackground"
        />
        <Rect
          x="578.71"
          y="210.729"
          width="330.58"
          height="94.6005"
          rx="11.29"
          stroke="#C0C7CC"
          strokeWidth="1.41992"
        />
        <Path
          d="M585.299 362.924C584.179 362.924 583.17 362.732 582.274 362.348C581.377 361.948 580.673 361.387 580.161 360.667C579.649 359.947 579.393 359.106 579.393 358.146H582.322C582.386 358.866 582.666 359.458 583.162 359.923C583.674 360.387 584.387 360.619 585.299 360.619C586.244 360.619 586.98 360.395 587.508 359.947C588.036 359.482 588.3 358.89 588.3 358.17C588.3 357.61 588.132 357.153 587.796 356.801C587.476 356.449 587.068 356.177 586.572 355.985C586.091 355.793 585.419 355.585 584.555 355.361C583.466 355.073 582.578 354.784 581.89 354.496C581.217 354.192 580.641 353.728 580.161 353.104C579.681 352.479 579.441 351.647 579.441 350.607C579.441 349.646 579.681 348.806 580.161 348.086C580.641 347.365 581.313 346.813 582.178 346.429C583.042 346.045 584.043 345.853 585.179 345.853C586.796 345.853 588.116 346.261 589.141 347.077C590.181 347.878 590.757 348.982 590.869 350.391H587.844C587.796 349.782 587.508 349.262 586.98 348.83C586.452 348.398 585.755 348.182 584.891 348.182C584.107 348.182 583.466 348.382 582.97 348.782C582.474 349.182 582.226 349.758 582.226 350.511C582.226 351.023 582.378 351.447 582.682 351.783C583.002 352.103 583.402 352.359 583.883 352.552C584.363 352.744 585.019 352.952 585.851 353.176C586.956 353.48 587.852 353.784 588.54 354.088C589.245 354.392 589.837 354.865 590.317 355.505C590.813 356.129 591.062 356.969 591.062 358.026C591.062 358.874 590.829 359.675 590.365 360.427C589.917 361.179 589.253 361.787 588.372 362.252C587.508 362.7 586.484 362.924 585.299 362.924ZM600.03 362.972C598.781 362.972 597.653 362.692 596.644 362.132C595.636 361.555 594.844 360.755 594.267 359.731C593.691 358.69 593.403 357.49 593.403 356.129C593.403 354.784 593.699 353.592 594.291 352.552C594.884 351.511 595.692 350.711 596.716 350.15C597.741 349.59 598.885 349.31 600.15 349.31C601.414 349.31 602.559 349.59 603.583 350.15C604.608 350.711 605.416 351.511 606.008 352.552C606.601 353.592 606.897 354.784 606.897 356.129C606.897 357.474 606.593 358.666 605.984 359.707C605.376 360.747 604.544 361.555 603.487 362.132C602.447 362.692 601.294 362.972 600.03 362.972ZM600.03 360.595C600.734 360.595 601.39 360.427 601.999 360.091C602.623 359.755 603.127 359.25 603.511 358.578C603.895 357.906 604.087 357.089 604.087 356.129C604.087 355.169 603.903 354.36 603.535 353.704C603.167 353.032 602.679 352.528 602.071 352.191C601.462 351.855 600.806 351.687 600.102 351.687C599.397 351.687 598.741 351.855 598.133 352.191C597.541 352.528 597.068 353.032 596.716 353.704C596.364 354.36 596.188 355.169 596.188 356.129C596.188 357.554 596.548 358.658 597.269 359.442C598.005 360.211 598.925 360.595 600.03 360.595ZM608.69 356.129C608.69 354.768 608.962 353.576 609.506 352.552C610.067 351.511 610.835 350.711 611.811 350.15C612.788 349.59 613.908 349.31 615.173 349.31C616.774 349.31 618.094 349.694 619.135 350.463C620.191 351.215 620.903 352.295 621.271 353.704H618.318C618.078 353.048 617.694 352.536 617.166 352.167C616.637 351.799 615.973 351.615 615.173 351.615C614.052 351.615 613.156 352.015 612.484 352.816C611.827 353.6 611.499 354.704 611.499 356.129C611.499 357.554 611.827 358.666 612.484 359.466C613.156 360.267 614.052 360.667 615.173 360.667C616.758 360.667 617.806 359.971 618.318 358.578H621.271C620.887 359.923 620.167 360.995 619.111 361.795C618.054 362.58 616.742 362.972 615.173 362.972C613.908 362.972 612.788 362.692 611.811 362.132C610.835 361.555 610.067 360.755 609.506 359.731C608.962 358.69 608.69 357.49 608.69 356.129ZM625.392 347.773C624.896 347.773 624.479 347.605 624.143 347.269C623.807 346.933 623.639 346.517 623.639 346.021C623.639 345.525 623.807 345.108 624.143 344.772C624.479 344.436 624.896 344.268 625.392 344.268C625.872 344.268 626.28 344.436 626.616 344.772C626.953 345.108 627.121 345.525 627.121 346.021C627.121 346.517 626.953 346.933 626.616 347.269C626.28 347.605 625.872 347.773 625.392 347.773ZM626.736 349.526V362.756H623.999V349.526H626.736ZM629.418 356.081C629.418 354.752 629.69 353.576 630.234 352.552C630.794 351.527 631.547 350.735 632.491 350.175C633.451 349.598 634.508 349.31 635.66 349.31C636.701 349.31 637.605 349.518 638.373 349.934C639.158 350.335 639.782 350.839 640.246 351.447V349.526H643.007V362.756H640.246V360.787C639.782 361.411 639.15 361.932 638.349 362.348C637.549 362.764 636.637 362.972 635.612 362.972C634.476 362.972 633.435 362.684 632.491 362.108C631.547 361.515 630.794 360.699 630.234 359.659C629.69 358.602 629.418 357.41 629.418 356.081ZM640.246 356.129C640.246 355.217 640.054 354.424 639.67 353.752C639.302 353.08 638.814 352.568 638.205 352.215C637.597 351.863 636.941 351.687 636.237 351.687C635.532 351.687 634.876 351.863 634.268 352.215C633.659 352.552 633.163 353.056 632.779 353.728C632.411 354.384 632.227 355.169 632.227 356.081C632.227 356.993 632.411 357.794 632.779 358.482C633.163 359.17 633.659 359.699 634.268 360.067C634.892 360.419 635.548 360.595 636.237 360.595C636.941 360.595 637.597 360.419 638.205 360.067C638.814 359.715 639.302 359.202 639.67 358.53C640.054 357.842 640.246 357.041 640.246 356.129ZM649.34 344.988V362.756H646.603V344.988H649.34ZM663.973 362.972C662.932 362.972 661.996 362.788 661.163 362.42C660.347 362.036 659.699 361.523 659.218 360.883C658.738 360.227 658.482 359.498 658.45 358.698H661.283C661.331 359.258 661.595 359.731 662.076 360.115C662.572 360.483 663.188 360.667 663.924 360.667C664.693 360.667 665.285 360.523 665.701 360.235C666.133 359.931 666.35 359.546 666.35 359.082C666.35 358.586 666.109 358.218 665.629 357.978C665.165 357.738 664.421 357.474 663.396 357.185C662.404 356.913 661.595 356.649 660.971 356.393C660.347 356.137 659.803 355.745 659.339 355.217C658.89 354.688 658.666 353.992 658.666 353.128C658.666 352.423 658.874 351.783 659.291 351.207C659.707 350.615 660.299 350.15 661.067 349.814C661.852 349.478 662.748 349.31 663.756 349.31C665.261 349.31 666.47 349.694 667.382 350.463C668.31 351.215 668.807 352.247 668.871 353.56H666.133C666.085 352.968 665.845 352.495 665.413 352.143C664.981 351.791 664.397 351.615 663.66 351.615C662.94 351.615 662.388 351.751 662.004 352.023C661.62 352.295 661.427 352.656 661.427 353.104C661.427 353.456 661.555 353.752 661.812 353.992C662.068 354.232 662.38 354.424 662.748 354.568C663.116 354.696 663.66 354.865 664.381 355.073C665.341 355.329 666.125 355.593 666.734 355.865C667.358 356.121 667.894 356.505 668.342 357.017C668.791 357.53 669.023 358.21 669.039 359.058C669.039 359.811 668.831 360.483 668.414 361.075C667.998 361.667 667.406 362.132 666.638 362.468C665.885 362.804 664.997 362.972 663.973 362.972ZM684.121 355.817C684.121 356.313 684.089 356.761 684.025 357.161H673.917C673.997 358.218 674.389 359.066 675.094 359.707C675.798 360.347 676.662 360.667 677.687 360.667C679.159 360.667 680.2 360.051 680.808 358.818H683.761C683.361 360.035 682.633 361.035 681.576 361.819C680.536 362.588 679.239 362.972 677.687 362.972C676.422 362.972 675.286 362.692 674.277 362.132C673.285 361.555 672.5 360.755 671.924 359.731C671.364 358.69 671.084 357.49 671.084 356.129C671.084 354.768 671.356 353.576 671.9 352.552C672.46 351.511 673.237 350.711 674.229 350.15C675.238 349.59 676.39 349.31 677.687 349.31C678.935 349.31 680.048 349.582 681.024 350.126C682 350.671 682.761 351.439 683.305 352.431C683.849 353.408 684.121 354.536 684.121 355.817ZM681.264 354.953C681.248 353.944 680.888 353.136 680.184 352.528C679.479 351.919 678.607 351.615 677.567 351.615C676.622 351.615 675.814 351.919 675.142 352.528C674.469 353.12 674.069 353.928 673.941 354.953H681.264ZM685.903 356.129C685.903 354.768 686.175 353.576 686.719 352.552C687.279 351.511 688.048 350.711 689.024 350.15C690 349.59 691.121 349.31 692.385 349.31C693.986 349.31 695.307 349.694 696.347 350.463C697.404 351.215 698.116 352.295 698.484 353.704H695.531C695.291 353.048 694.906 352.536 694.378 352.167C693.85 351.799 693.186 351.615 692.385 351.615C691.265 351.615 690.369 352.015 689.696 352.816C689.04 353.6 688.712 354.704 688.712 356.129C688.712 357.554 689.04 358.666 689.696 359.466C690.369 360.267 691.265 360.667 692.385 360.667C693.97 360.667 695.019 359.971 695.531 358.578H698.484C698.1 359.923 697.38 360.995 696.323 361.795C695.267 362.58 693.954 362.972 692.385 362.972C691.121 362.972 690 362.692 689.024 362.132C688.048 361.555 687.279 360.755 686.719 359.731C686.175 358.69 685.903 357.49 685.903 356.129ZM713.193 349.526V362.756H710.456V361.195C710.024 361.739 709.455 362.172 708.751 362.492C708.063 362.796 707.326 362.948 706.542 362.948C705.502 362.948 704.565 362.732 703.733 362.3C702.917 361.867 702.268 361.227 701.788 360.379C701.324 359.53 701.092 358.506 701.092 357.306V349.526H703.805V356.897C703.805 358.082 704.101 358.994 704.693 359.635C705.286 360.259 706.094 360.571 707.118 360.571C708.143 360.571 708.951 360.259 709.543 359.635C710.152 358.994 710.456 358.082 710.456 356.897V349.526H713.193ZM719.542 351.447C719.942 350.775 720.47 350.255 721.126 349.886C721.798 349.502 722.591 349.31 723.503 349.31V352.143H722.807C721.734 352.143 720.918 352.415 720.358 352.96C719.814 353.504 719.542 354.448 719.542 355.793V362.756H716.804V349.526H719.542V351.447ZM727.412 347.773C726.916 347.773 726.499 347.605 726.163 347.269C725.827 346.933 725.659 346.517 725.659 346.021C725.659 345.525 725.827 345.108 726.163 344.772C726.499 344.436 726.916 344.268 727.412 344.268C727.892 344.268 728.3 344.436 728.636 344.772C728.972 345.108 729.141 345.525 729.141 346.021C729.141 346.517 728.972 346.933 728.636 347.269C728.3 347.605 727.892 347.773 727.412 347.773ZM728.756 349.526V362.756H726.019V349.526H728.756ZM735.543 351.759V359.082C735.543 359.579 735.655 359.939 735.88 360.163C736.12 360.371 736.52 360.475 737.08 360.475H738.761V362.756H736.6C735.367 362.756 734.423 362.468 733.767 361.891C733.11 361.315 732.782 360.379 732.782 359.082V351.759H731.222V349.526H732.782V346.237H735.543V349.526H738.761V351.759H735.543ZM753.193 349.526L745.077 368.975H742.244L744.933 362.54L739.723 349.526H742.772L746.494 359.611L750.359 349.526H753.193ZM768.17 349.31C769.211 349.31 770.139 349.526 770.955 349.958C771.788 350.391 772.436 351.031 772.9 351.879C773.364 352.728 773.596 353.752 773.596 354.953V362.756H770.883V355.361C770.883 354.176 770.587 353.272 769.995 352.648C769.403 352.007 768.594 351.687 767.57 351.687C766.545 351.687 765.729 352.007 765.121 352.648C764.529 353.272 764.232 354.176 764.232 355.361V362.756H761.495V349.526H764.232V351.039C764.681 350.495 765.249 350.07 765.937 349.766C766.641 349.462 767.386 349.31 768.17 349.31ZM789.069 349.526V362.756H786.332V361.195C785.9 361.739 785.331 362.172 784.627 362.492C783.939 362.796 783.202 362.948 782.418 362.948C781.378 362.948 780.441 362.732 779.609 362.3C778.793 361.867 778.144 361.227 777.664 360.379C777.2 359.53 776.968 358.506 776.968 357.306V349.526H779.681V356.897C779.681 358.082 779.977 358.994 780.569 359.635C781.162 360.259 781.97 360.571 782.994 360.571C784.019 360.571 784.827 360.259 785.419 359.635C786.028 358.994 786.332 358.082 786.332 356.897V349.526H789.069ZM808.695 349.31C809.736 349.31 810.664 349.526 811.48 349.958C812.313 350.391 812.961 351.031 813.425 351.879C813.905 352.728 814.146 353.752 814.146 354.953V362.756H811.432V355.361C811.432 354.176 811.136 353.272 810.544 352.648C809.952 352.007 809.143 351.687 808.119 351.687C807.095 351.687 806.278 352.007 805.67 352.648C805.078 353.272 804.782 354.176 804.782 355.361V362.756H802.068V355.361C802.068 354.176 801.772 353.272 801.18 352.648C800.588 352.007 799.779 351.687 798.755 351.687C797.731 351.687 796.914 352.007 796.306 352.648C795.714 353.272 795.418 354.176 795.418 355.361V362.756H792.68V349.526H795.418V351.039C795.866 350.495 796.434 350.07 797.122 349.766C797.811 349.462 798.547 349.31 799.331 349.31C800.388 349.31 801.332 349.534 802.164 349.982C802.997 350.431 803.637 351.079 804.085 351.927C804.485 351.127 805.11 350.495 805.958 350.03C806.806 349.55 807.719 349.31 808.695 349.31ZM820.366 351.495C820.83 350.855 821.462 350.335 822.262 349.934C823.079 349.518 823.983 349.31 824.976 349.31C826.144 349.31 827.201 349.59 828.145 350.15C829.089 350.711 829.834 351.511 830.378 352.552C830.922 353.576 831.194 354.752 831.194 356.081C831.194 357.41 830.922 358.602 830.378 359.659C829.834 360.699 829.081 361.515 828.121 362.108C827.177 362.684 826.128 362.972 824.976 362.972C823.951 362.972 823.039 362.772 822.238 362.372C821.454 361.972 820.83 361.459 820.366 360.835V362.756H817.628V344.988H820.366V351.495ZM828.409 356.081C828.409 355.169 828.217 354.384 827.833 353.728C827.465 353.056 826.968 352.552 826.344 352.215C825.736 351.863 825.08 351.687 824.375 351.687C823.687 351.687 823.031 351.863 822.407 352.215C821.798 352.568 821.302 353.08 820.918 353.752C820.55 354.424 820.366 355.217 820.366 356.129C820.366 357.041 820.55 357.842 820.918 358.53C821.302 359.202 821.798 359.715 822.407 360.067C823.031 360.419 823.687 360.595 824.375 360.595C825.08 360.595 825.736 360.419 826.344 360.067C826.968 359.699 827.465 359.17 827.833 358.482C828.217 357.794 828.409 356.993 828.409 356.081ZM846.026 355.817C846.026 356.313 845.994 356.761 845.93 357.161H835.822C835.902 358.218 836.294 359.066 836.998 359.707C837.703 360.347 838.567 360.667 839.591 360.667C841.064 360.667 842.105 360.051 842.713 358.818H845.666C845.266 360.035 844.538 361.035 843.481 361.819C842.441 362.588 841.144 362.972 839.591 362.972C838.327 362.972 837.19 362.692 836.182 362.132C835.19 361.555 834.405 360.755 833.829 359.731C833.269 358.69 832.989 357.49 832.989 356.129C832.989 354.768 833.261 353.576 833.805 352.552C834.365 351.511 835.142 350.711 836.134 350.15C837.142 349.59 838.295 349.31 839.591 349.31C840.84 349.31 841.952 349.582 842.929 350.126C843.905 350.671 844.666 351.439 845.21 352.431C845.754 353.408 846.026 354.536 846.026 355.817ZM843.169 354.953C843.153 353.944 842.793 353.136 842.089 352.528C841.384 351.919 840.512 351.615 839.471 351.615C838.527 351.615 837.719 351.919 837.046 352.528C836.374 353.12 835.974 353.928 835.846 354.953H843.169ZM851.457 351.447C851.857 350.775 852.385 350.255 853.042 349.886C853.714 349.502 854.506 349.31 855.419 349.31V352.143H854.722C853.65 352.143 852.834 352.415 852.273 352.96C851.729 353.504 851.457 354.448 851.457 355.793V362.756H848.72V349.526H851.457V351.447Z"
          fill="illustrationHighlight010"
        />
        <Rect
          x="578.71"
          y="394.8"
          width="330.58"
          height="94.6005"
          rx="11.29"
          fill="interfaceBackground"
        />
        <Rect
          x="578.71"
          y="394.8"
          width="330.58"
          height="94.6005"
          rx="11.29"
          stroke="#C0C7CC"
          strokeWidth="1.41992"
        />
        <Path
          d="M582.538 530.141V546.828H579.801V530.141H582.538ZM592.806 533.382C593.847 533.382 594.775 533.598 595.592 534.031C596.424 534.463 597.072 535.103 597.536 535.951C598.001 536.8 598.233 537.824 598.233 539.025V546.828H595.52V539.433C595.52 538.248 595.223 537.344 594.631 536.72C594.039 536.08 593.231 535.759 592.206 535.759C591.182 535.759 590.365 536.08 589.757 536.72C589.165 537.344 588.869 538.248 588.869 539.433V546.828H586.132V533.598H588.869V535.111C589.317 534.567 589.885 534.143 590.573 533.839C591.278 533.534 592.022 533.382 592.806 533.382ZM625.729 533.598L621.623 546.828H618.742L616.077 537.056L613.412 546.828H610.53L606.401 533.598H609.186L611.947 544.235L614.756 533.598H617.613L620.302 544.187L623.04 533.598H625.729ZM634.617 533.382C635.626 533.382 636.522 533.598 637.306 534.031C638.107 534.463 638.731 535.103 639.179 535.951C639.643 536.8 639.875 537.824 639.875 539.025V546.828H637.162V539.433C637.162 538.248 636.866 537.344 636.274 536.72C635.682 536.08 634.873 535.759 633.849 535.759C632.824 535.759 632.008 536.08 631.4 536.72C630.808 537.344 630.511 538.248 630.511 539.433V546.828H627.774V529.061H630.511V535.135C630.976 534.575 631.56 534.143 632.264 533.839C632.985 533.534 633.769 533.382 634.617 533.382ZM644.759 531.846C644.263 531.846 643.847 531.678 643.511 531.342C643.175 531.005 643.007 530.589 643.007 530.093C643.007 529.597 643.175 529.181 643.511 528.844C643.847 528.508 644.263 528.34 644.759 528.34C645.24 528.34 645.648 528.508 645.984 528.844C646.32 529.181 646.488 529.597 646.488 530.093C646.488 530.589 646.32 531.005 645.984 531.342C645.648 531.678 645.24 531.846 644.759 531.846ZM646.104 533.598V546.828H643.367V533.598H646.104ZM648.785 540.201C648.785 538.841 649.057 537.648 649.602 536.624C650.162 535.583 650.93 534.783 651.907 534.223C652.883 533.663 654.004 533.382 655.268 533.382C656.869 533.382 658.189 533.767 659.23 534.535C660.286 535.287 660.998 536.368 661.367 537.776H658.413C658.173 537.12 657.789 536.608 657.261 536.24C656.733 535.871 656.068 535.687 655.268 535.687C654.148 535.687 653.251 536.088 652.579 536.888C651.923 537.672 651.594 538.777 651.594 540.201C651.594 541.626 651.923 542.738 652.579 543.539C653.251 544.339 654.148 544.739 655.268 544.739C656.853 544.739 657.901 544.043 658.413 542.65H661.367C660.982 543.995 660.262 545.067 659.206 545.868C658.149 546.652 656.837 547.044 655.268 547.044C654.004 547.044 652.883 546.764 651.907 546.204C650.93 545.628 650.162 544.827 649.602 543.803C649.057 542.762 648.785 541.562 648.785 540.201ZM670.937 533.382C671.946 533.382 672.842 533.598 673.626 534.031C674.427 534.463 675.051 535.103 675.499 535.951C675.963 536.8 676.196 537.824 676.196 539.025V546.828H673.482V539.433C673.482 538.248 673.186 537.344 672.594 536.72C672.002 536.08 671.193 535.759 670.169 535.759C669.145 535.759 668.328 536.08 667.72 536.72C667.128 537.344 666.832 538.248 666.832 539.433V546.828H664.094V529.061H666.832V535.135C667.296 534.575 667.88 534.143 668.584 533.839C669.305 533.534 670.089 533.382 670.937 533.382ZM688.661 535.543C689.125 534.935 689.758 534.423 690.558 534.007C691.358 533.59 692.263 533.382 693.271 533.382C694.424 533.382 695.472 533.671 696.416 534.247C697.377 534.807 698.129 535.599 698.673 536.624C699.218 537.648 699.49 538.825 699.49 540.153C699.49 541.482 699.218 542.674 698.673 543.731C698.129 544.771 697.377 545.588 696.416 546.18C695.472 546.756 694.424 547.044 693.271 547.044C692.263 547.044 691.366 546.844 690.582 546.444C689.798 546.028 689.157 545.516 688.661 544.907V553.119H685.924V533.598H688.661V535.543ZM696.705 540.153C696.705 539.241 696.513 538.457 696.128 537.8C695.76 537.128 695.264 536.624 694.64 536.288C694.031 535.935 693.375 535.759 692.671 535.759C691.983 535.759 691.326 535.935 690.702 536.288C690.094 536.64 689.598 537.152 689.213 537.824C688.845 538.497 688.661 539.289 688.661 540.201C688.661 541.114 688.845 541.914 689.213 542.602C689.598 543.275 690.094 543.787 690.702 544.139C691.326 544.491 691.983 544.667 692.671 544.667C693.375 544.667 694.031 544.491 694.64 544.139C695.264 543.771 695.76 543.243 696.128 542.554C696.513 541.866 696.705 541.066 696.705 540.153ZM704.934 529.061V546.828H702.197V529.061H704.934ZM707.615 540.153C707.615 538.825 707.887 537.648 708.431 536.624C708.992 535.599 709.744 534.807 710.688 534.247C711.649 533.671 712.705 533.382 713.858 533.382C714.898 533.382 715.802 533.59 716.571 534.007C717.355 534.407 717.979 534.911 718.444 535.519V533.598H721.205V546.828H718.444V544.859C717.979 545.484 717.347 546.004 716.547 546.42C715.746 546.836 714.834 547.044 713.81 547.044C712.673 547.044 711.633 546.756 710.688 546.18C709.744 545.588 708.992 544.771 708.431 543.731C707.887 542.674 707.615 541.482 707.615 540.153ZM718.444 540.201C718.444 539.289 718.252 538.497 717.867 537.824C717.499 537.152 717.011 536.64 716.403 536.288C715.794 535.935 715.138 535.759 714.434 535.759C713.73 535.759 713.073 535.935 712.465 536.288C711.857 536.624 711.361 537.128 710.976 537.8C710.608 538.457 710.424 539.241 710.424 540.153C710.424 541.066 710.608 541.866 710.976 542.554C711.361 543.243 711.857 543.771 712.465 544.139C713.089 544.491 713.746 544.667 714.434 544.667C715.138 544.667 715.794 544.491 716.403 544.139C717.011 543.787 717.499 543.275 717.867 542.602C718.252 541.914 718.444 541.114 718.444 540.201ZM731.475 533.382C732.515 533.382 733.444 533.598 734.26 534.031C735.092 534.463 735.741 535.103 736.205 535.951C736.669 536.8 736.901 537.824 736.901 539.025V546.828H734.188V539.433C734.188 538.248 733.892 537.344 733.3 536.72C732.707 536.08 731.899 535.759 730.875 535.759C729.85 535.759 729.034 536.08 728.425 536.72C727.833 537.344 727.537 538.248 727.537 539.433V546.828H724.8V533.598H727.537V535.111C727.985 534.567 728.554 534.143 729.242 533.839C729.946 533.534 730.69 533.382 731.475 533.382ZM752.518 539.889C752.518 540.385 752.486 540.834 752.422 541.234H742.313C742.393 542.29 742.786 543.139 743.49 543.779C744.194 544.419 745.058 544.739 746.083 544.739C747.556 544.739 748.596 544.123 749.204 542.89H752.158C751.757 544.107 751.029 545.107 749.973 545.892C748.932 546.66 747.636 547.044 746.083 547.044C744.818 547.044 743.682 546.764 742.673 546.204C741.681 545.628 740.897 544.827 740.32 543.803C739.76 542.762 739.48 541.562 739.48 540.201C739.48 538.841 739.752 537.648 740.296 536.624C740.857 535.583 741.633 534.783 742.625 534.223C743.634 533.663 744.786 533.382 746.083 533.382C747.331 533.382 748.444 533.655 749.42 534.199C750.397 534.743 751.157 535.511 751.701 536.504C752.246 537.48 752.518 538.609 752.518 539.889ZM749.66 539.025C749.644 538.016 749.284 537.208 748.58 536.6C747.876 535.992 747.003 535.687 745.963 535.687C745.018 535.687 744.21 535.992 743.538 536.6C742.866 537.192 742.465 538 742.337 539.025H749.66ZM758.405 535.831V543.155C758.405 543.651 758.517 544.011 758.741 544.235C758.981 544.443 759.381 544.547 759.941 544.547H761.622V546.828H759.461C758.229 546.828 757.284 546.54 756.628 545.964C755.972 545.388 755.643 544.451 755.643 543.155V535.831H754.083V533.598H755.643V530.309H758.405V533.598H761.622V535.831H758.405ZM769.469 540.153C769.469 538.825 769.742 537.648 770.286 536.624C770.846 535.599 771.598 534.807 772.543 534.247C773.503 533.671 774.568 533.382 775.736 533.382C776.6 533.382 777.449 533.574 778.281 533.959C779.13 534.327 779.802 534.823 780.298 535.447V529.061H783.059V546.828H780.298V544.835C779.85 545.476 779.226 546.004 778.425 546.42C777.641 546.836 776.737 547.044 775.712 547.044C774.56 547.044 773.503 546.756 772.543 546.18C771.598 545.588 770.846 544.771 770.286 543.731C769.742 542.674 769.469 541.482 769.469 540.153ZM780.298 540.201C780.298 539.289 780.106 538.497 779.722 537.824C779.354 537.152 778.865 536.64 778.257 536.288C777.649 535.935 776.993 535.759 776.288 535.759C775.584 535.759 774.928 535.935 774.319 536.288C773.711 536.624 773.215 537.128 772.831 537.8C772.463 538.457 772.279 539.241 772.279 540.153C772.279 541.066 772.463 541.866 772.831 542.554C773.215 543.243 773.711 543.771 774.319 544.139C774.944 544.491 775.6 544.667 776.288 544.667C776.993 544.667 777.649 544.491 778.257 544.139C778.865 543.787 779.354 543.275 779.722 542.602C780.106 541.914 780.298 541.114 780.298 540.201ZM792.393 547.044C791.144 547.044 790.016 546.764 789.007 546.204C787.999 545.628 787.207 544.827 786.63 543.803C786.054 542.762 785.766 541.562 785.766 540.201C785.766 538.857 786.062 537.664 786.654 536.624C787.247 535.583 788.055 534.783 789.079 534.223C790.104 533.663 791.248 533.382 792.513 533.382C793.777 533.382 794.922 533.663 795.946 534.223C796.971 534.783 797.779 535.583 798.371 536.624C798.964 537.664 799.26 538.857 799.26 540.201C799.26 541.546 798.956 542.738 798.347 543.779C797.739 544.819 796.907 545.628 795.85 546.204C794.81 546.764 793.657 547.044 792.393 547.044ZM792.393 544.667C793.097 544.667 793.753 544.499 794.362 544.163C794.986 543.827 795.49 543.323 795.874 542.65C796.258 541.978 796.451 541.162 796.451 540.201C796.451 539.241 796.266 538.433 795.898 537.776C795.53 537.104 795.042 536.6 794.434 536.264C793.825 535.927 793.169 535.759 792.465 535.759C791.761 535.759 791.104 535.927 790.496 536.264C789.904 536.6 789.432 537.104 789.079 537.776C788.727 538.433 788.551 539.241 788.551 540.201C788.551 541.626 788.911 542.73 789.632 543.515C790.368 544.283 791.288 544.667 792.393 544.667ZM820.112 533.598L811.996 553.047H809.163L811.852 546.612L806.642 533.598H809.691L813.413 543.683L817.278 533.598H820.112ZM827.916 547.044C826.667 547.044 825.539 546.764 824.53 546.204C823.522 545.628 822.73 544.827 822.153 543.803C821.577 542.762 821.289 541.562 821.289 540.201C821.289 538.857 821.585 537.664 822.177 536.624C822.77 535.583 823.578 534.783 824.602 534.223C825.627 533.663 826.771 533.382 828.036 533.382C829.3 533.382 830.445 533.663 831.469 534.223C832.494 534.783 833.302 535.583 833.894 536.624C834.487 537.664 834.783 538.857 834.783 540.201C834.783 541.546 834.479 542.738 833.87 543.779C833.262 544.819 832.43 545.628 831.373 546.204C830.333 546.764 829.18 547.044 827.916 547.044ZM827.916 544.667C828.62 544.667 829.276 544.499 829.885 544.163C830.509 543.827 831.013 543.323 831.397 542.65C831.781 541.978 831.973 541.162 831.973 540.201C831.973 539.241 831.789 538.433 831.421 537.776C831.053 537.104 830.565 536.6 829.957 536.264C829.348 535.927 828.692 535.759 827.988 535.759C827.283 535.759 826.627 535.927 826.019 536.264C825.427 536.6 824.954 537.104 824.602 537.776C824.25 538.433 824.074 539.241 824.074 540.201C824.074 541.626 824.434 542.73 825.155 543.515C825.891 544.283 826.811 544.667 827.916 544.667ZM849.47 533.598V546.828H846.732V545.267C846.3 545.812 845.732 546.244 845.028 546.564C844.339 546.868 843.603 547.02 842.819 547.02C841.778 547.02 840.842 546.804 840.01 546.372C839.193 545.94 838.545 545.299 838.065 544.451C837.601 543.603 837.368 542.578 837.368 541.378V533.598H840.082V540.97C840.082 542.154 840.378 543.067 840.97 543.707C841.562 544.331 842.371 544.643 843.395 544.643C844.419 544.643 845.228 544.331 845.82 543.707C846.428 543.067 846.732 542.154 846.732 540.97V533.598H849.47ZM862.055 529.061V546.828H859.318V529.061H862.055ZM867.042 531.846C866.545 531.846 866.129 531.678 865.793 531.342C865.457 531.005 865.289 530.589 865.289 530.093C865.289 529.597 865.457 529.181 865.793 528.844C866.129 528.508 866.545 528.34 867.042 528.34C867.522 528.34 867.93 528.508 868.266 528.844C868.602 529.181 868.77 529.597 868.77 530.093C868.77 530.589 868.602 531.005 868.266 531.342C867.93 531.678 867.522 531.846 867.042 531.846ZM868.386 533.598V546.828H865.649V533.598H868.386ZM877.094 544.379L880.839 533.598H883.745L878.703 546.828H875.437L870.419 533.598H873.348L877.094 544.379ZM897.939 539.889C897.939 540.385 897.907 540.834 897.843 541.234H887.735C887.815 542.29 888.207 543.139 888.911 543.779C889.615 544.419 890.48 544.739 891.504 544.739C892.977 544.739 894.017 544.123 894.625 542.89H897.579C897.179 544.107 896.45 545.107 895.394 545.892C894.353 546.66 893.057 547.044 891.504 547.044C890.24 547.044 889.103 546.764 888.095 546.204C887.102 545.628 886.318 544.827 885.742 543.803C885.181 542.762 884.901 541.562 884.901 540.201C884.901 538.841 885.173 537.648 885.718 536.624C886.278 535.583 887.054 534.783 888.047 534.223C889.055 533.663 890.208 533.382 891.504 533.382C892.753 533.382 893.865 533.655 894.842 534.199C895.818 534.743 896.578 535.511 897.123 536.504C897.667 537.48 897.939 538.609 897.939 539.889ZM895.082 539.025C895.066 538.016 894.706 537.208 894.001 536.6C893.297 535.992 892.425 535.687 891.384 535.687C890.44 535.687 889.631 535.992 888.959 536.6C888.287 537.192 887.887 538 887.759 539.025H895.082ZM905.122 529.901C906.755 529.901 908.06 530.349 909.036 531.245C910.029 532.142 910.525 533.366 910.525 534.919C910.525 536.536 910.013 537.752 908.988 538.569C907.964 539.385 906.603 539.793 904.906 539.793L904.81 541.69H902.433L902.313 537.92H903.106C904.658 537.92 905.843 537.712 906.659 537.296C907.491 536.88 907.908 536.088 907.908 534.919C907.908 534.071 907.66 533.406 907.163 532.926C906.683 532.446 906.011 532.206 905.146 532.206C904.282 532.206 903.602 532.438 903.106 532.902C902.609 533.366 902.361 534.015 902.361 534.847H899.792C899.792 533.887 900.008 533.03 900.44 532.278C900.873 531.526 901.489 530.941 902.289 530.525C903.106 530.109 904.05 529.901 905.122 529.901ZM903.586 546.996C903.09 546.996 902.673 546.828 902.337 546.492C902.001 546.156 901.833 545.74 901.833 545.243C901.833 544.747 902.001 544.331 902.337 543.995C902.673 543.659 903.09 543.491 903.586 543.491C904.066 543.491 904.474 543.659 904.81 543.995C905.146 544.331 905.315 544.747 905.315 545.243C905.315 545.74 905.146 546.156 904.81 546.492C904.474 546.828 904.066 546.996 903.586 546.996Z"
          fill="illustrationHighlight010"
        />
        <Rect
          x="578.71"
          y="578.87"
          width="330.58"
          height="94.6005"
          rx="11.29"
          fill="interfaceBackground"
        />
        <Path
          d="M602.002 636.079V616.47H614.131V618.403H604.355V625.238H613.291V627.143H604.355V634.146H614.131V636.079H602.002Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M622.295 636.415C621.137 636.415 620.176 636.219 619.41 635.827C618.644 635.434 618.075 634.912 617.701 634.258C617.328 633.604 617.141 632.895 617.141 632.129C617.141 630.71 617.683 629.617 618.766 628.852C619.849 628.086 621.324 627.703 623.192 627.703H626.945V627.535C626.945 626.321 626.628 625.406 625.993 624.79C625.358 624.155 624.508 623.838 623.444 623.838C622.529 623.838 621.735 624.071 621.063 624.538C620.409 624.986 619.998 625.649 619.83 626.527H617.421C617.515 625.518 617.851 624.669 618.43 623.978C619.027 623.287 619.765 622.764 620.643 622.409C621.52 622.035 622.454 621.849 623.444 621.849C625.386 621.849 626.843 622.372 627.814 623.417C628.803 624.444 629.298 625.817 629.298 627.535V636.079H627.197L627.057 633.586C626.665 634.37 626.086 635.042 625.321 635.603C624.574 636.144 623.565 636.415 622.295 636.415ZM622.659 634.426C623.556 634.426 624.321 634.193 624.956 633.726C625.61 633.259 626.105 632.652 626.441 631.905C626.777 631.158 626.945 630.374 626.945 629.552V629.524H623.388C622.006 629.524 621.025 629.767 620.446 630.252C619.886 630.719 619.606 631.307 619.606 632.017C619.606 632.745 619.868 633.334 620.39 633.782C620.932 634.211 621.688 634.426 622.659 634.426Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M632.828 636.079V622.185H634.957L635.153 624.846C635.583 623.931 636.236 623.203 637.114 622.661C637.992 622.119 639.075 621.849 640.363 621.849V624.314H639.719C638.897 624.314 638.141 624.463 637.45 624.762C636.759 625.042 636.208 625.528 635.797 626.219C635.387 626.91 635.181 627.862 635.181 629.076V636.079H632.828Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M648.495 636.079C647.225 636.079 646.226 635.771 645.497 635.154C644.769 634.538 644.405 633.427 644.405 631.821V624.174H641.996V622.185H644.405L644.713 618.851H646.758V622.185H650.848V624.174H646.758V631.821C646.758 632.699 646.935 633.296 647.29 633.614C647.645 633.912 648.271 634.062 649.167 634.062H650.624V636.079H648.495Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M653.837 636.079V615.91H656.19V624.566C656.657 623.707 657.32 623.044 658.179 622.577C659.038 622.091 659.972 621.849 660.98 621.849C662.586 621.849 663.875 622.353 664.846 623.361C665.817 624.351 666.302 625.882 666.302 627.955V636.079H663.977V628.207C663.977 625.313 662.81 623.866 660.476 623.866C659.262 623.866 658.244 624.304 657.423 625.182C656.601 626.041 656.19 627.274 656.19 628.88V636.079H653.837Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M871.173 619.348L861.989 628.512L852.806 619.348L849.984 622.169L861.989 634.174L873.995 622.169L871.173 619.348Z"
          fill="illustrationHighlight010"
        />
        <Rect
          x="578.71"
          y="578.87"
          width="330.58"
          height="94.6005"
          rx="11.29"
          stroke="#C0C7CC"
          strokeWidth="1.41992"
        />
      </g>
      <defs>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Do3;
