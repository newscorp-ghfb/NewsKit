export const fileSvgMock = `import React from 'react';
      import {getSSRId} from 'newskit';
      import {Svg} from '../../svg';
      import {Path} from '../../path';
      import {Rect} from '../../rect';
      import {Circle} from '../../circle';
      

        export const CardNoCrop: React.FC = () => {
        const mask0 = getSSRId();
const mask1 = getSSRId();
const mask2 = getSSRId();
const clip0 = getSSRId();
const filter0 = getSSRId();
const filter1 = getSSRId();

        return (
          <Svg width="1490" height="839" viewBox="0 0 1490 839" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath={\`url(#\${clip0})\`}>
<Path d="M0 0.5H1490V838.5H0V0.5Z" fill="illustrationBackground020"/>
<Rect width="131" height="59" transform="matrix(-1 0 0 1 775 139.5)" fill="illustrationPalette040"/>
<Path d="M671.954 176.922H678.888V179.634H668.59V159.149H671.954V176.922Z" fill="inkInverse"/>
<Path d="M680.58 171.44C680.58 169.809 680.914 168.365 681.583 167.107C682.272 165.85 683.196 164.877 684.357 164.189C685.537 163.482 686.835 163.128 688.252 163.128C689.53 163.128 690.642 163.384 691.586 163.895C692.55 164.386 693.317 165.005 693.888 165.752V163.394H697.281V179.634H693.888V177.217C693.317 177.983 692.54 178.622 691.557 179.133C690.573 179.643 689.452 179.899 688.193 179.899C686.796 179.899 685.517 179.545 684.357 178.838C683.196 178.111 682.272 177.109 681.583 175.832C680.914 174.535 680.58 173.071 680.58 171.44ZM693.888 171.499C693.888 170.379 693.652 169.406 693.18 168.581C692.727 167.756 692.127 167.127 691.38 166.695C690.632 166.262 689.826 166.046 688.96 166.046C688.094 166.046 687.288 166.262 686.54 166.695C685.793 167.107 685.183 167.726 684.711 168.552C684.258 169.357 684.032 170.32 684.032 171.44C684.032 172.56 684.258 173.542 684.711 174.387C685.183 175.232 685.793 175.881 686.54 176.333C687.308 176.765 688.114 176.981 688.96 176.981C689.826 176.981 690.632 176.765 691.38 176.333C692.127 175.9 692.727 175.272 693.18 174.446C693.652 173.601 693.888 172.619 693.888 171.499Z" fill="inkInverse"/>
<Path d="M705.624 166.135V175.124C705.624 175.733 705.762 176.175 706.037 176.45C706.332 176.706 706.824 176.834 707.512 176.834H709.578V179.634H706.922C705.408 179.634 704.247 179.28 703.44 178.573C702.634 177.865 702.231 176.716 702.231 175.124V166.135H700.313V163.394H702.231V159.356H705.624V163.394H709.578V166.135H705.624Z" fill="inkInverse"/>
<Path d="M727.58 171.116C727.58 171.725 727.54 172.275 727.462 172.766H715.039C715.137 174.063 715.619 175.104 716.485 175.89C717.35 176.676 718.413 177.069 719.672 177.069C721.481 177.069 722.76 176.313 723.508 174.8H727.137C726.645 176.293 725.75 177.521 724.452 178.484C723.173 179.427 721.58 179.899 719.672 179.899C718.118 179.899 716.721 179.555 715.482 178.867C714.262 178.16 713.298 177.177 712.59 175.92C711.901 174.643 711.557 173.169 711.557 171.499C711.557 169.829 711.891 168.365 712.56 167.107C713.249 165.83 714.203 164.848 715.423 164.16C716.662 163.472 718.078 163.128 719.672 163.128C721.206 163.128 722.573 163.462 723.773 164.13C724.973 164.799 725.908 165.742 726.576 166.96C727.245 168.159 727.58 169.544 727.58 171.116ZM724.068 170.055C724.049 168.817 723.606 167.825 722.74 167.078C721.875 166.331 720.803 165.958 719.524 165.958C718.363 165.958 717.37 166.331 716.544 167.078C715.718 167.805 715.226 168.797 715.068 170.055H724.068Z" fill="inkInverse"/>
<Path d="M736.792 179.899C735.513 179.899 734.362 179.673 733.339 179.221C732.336 178.749 731.539 178.121 730.949 177.335C730.359 176.529 730.044 175.635 730.005 174.653H733.487C733.546 175.34 733.87 175.92 734.46 176.392C735.07 176.843 735.828 177.069 736.733 177.069C737.677 177.069 738.405 176.893 738.916 176.539C739.447 176.166 739.713 175.694 739.713 175.124C739.713 174.515 739.418 174.063 738.828 173.768C738.257 173.474 737.342 173.149 736.083 172.796C734.864 172.462 733.87 172.137 733.103 171.823C732.336 171.509 731.667 171.027 731.097 170.379C730.546 169.73 730.27 168.876 730.27 167.815C730.27 166.95 730.526 166.164 731.038 165.457C731.549 164.73 732.277 164.16 733.221 163.747C734.185 163.335 735.287 163.128 736.526 163.128C738.375 163.128 739.86 163.6 740.982 164.543C742.123 165.467 742.732 166.734 742.811 168.345H739.447C739.388 167.618 739.093 167.039 738.562 166.606C738.031 166.174 737.313 165.958 736.408 165.958C735.523 165.958 734.844 166.125 734.372 166.459C733.9 166.793 733.664 167.235 733.664 167.785C733.664 168.217 733.821 168.581 734.136 168.876C734.451 169.17 734.834 169.406 735.287 169.583C735.739 169.74 736.408 169.947 737.293 170.202C738.474 170.516 739.437 170.841 740.185 171.175C740.952 171.489 741.611 171.961 742.162 172.589C742.713 173.218 742.998 174.053 743.018 175.095C743.018 176.018 742.762 176.843 742.25 177.57C741.739 178.297 741.011 178.867 740.067 179.28C739.142 179.693 738.051 179.899 736.792 179.899Z" fill="inkInverse"/>
<Path d="M750.577 166.135V175.124C750.577 175.733 750.715 176.175 750.99 176.45C751.285 176.706 751.777 176.834 752.465 176.834H754.531V179.634H751.875C750.361 179.634 749.2 179.28 748.393 178.573C747.587 177.865 747.184 176.716 747.184 175.124V166.135H745.266V163.394H747.184V159.356H750.577V163.394H754.531V166.135H750.577Z" fill="inkInverse"/>
<g opacity="0.5" filter={\`url(#\${filter0})\`}>
<Path d="M382 699.5H1490V838.5H382V699.5Z" fill="illustrationPalette010"/>
</g>
<g opacity="0.5" filter={\`url(#\${filter1})\`}>
<Path d="M382 198.5H1490V227.5H382V198.5Z" fill="illustrationPalette010"/>
</g>
<mask id={mask0} mask-type="alpha" maskUnits="userSpaceOnUse" x="85" y="108" width="193" height="193">
<Circle cx="181.872" cy="204.345" r="95.9634" fill="illustrationPalette040"/>
</mask>
<g mask={\`url(#\${mask0})\`}>
<Circle opacity="0.5" cx="181.872" cy="140.368" r="95.9634" fill="illustrationPalette010"/>
</g>
<mask id={mask1} mask-type="alpha" maskUnits="userSpaceOnUse" x="85" y="498" width="193" height="192">
<Circle cx="181.872" cy="593.963" r="95.9634" fill="illustrationPalette040"/>
</mask>
<g mask={\`url(#\${mask1})\`}>
<Circle opacity="0.5" cx="181.872" cy="529.986" r="95.9634" fill="illustrationPalette010"/>
</g>
<mask id={mask2} mask-type="alpha" maskUnits="userSpaceOnUse" x="792" y="531" width="193" height="193">
<Circle cx="888.608" cy="627.294" r="95.9634" fill="illustrationPalette040"/>
</mask>
<g mask={\`url(#\${mask2})\`}>
<Circle opacity="0.5" cx="888.608" cy="563.317" r="95.9634" fill="illustrationPalette010"/>
</g>
</g>
<defs>
<filter id={filter0} x="370" y="687.5" width="1132" height="175" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.476494 0 0 0 0 0.392157 0 0 0 0 0.937255 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_304_63"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_304_63" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect2_foregroundBlur_304_63"/>
</filter>
<filter id={filter1} x="370" y="186.5" width="1132" height="65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.476494 0 0 0 0 0.392157 0 0 0 0 0.937255 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_304_63"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_304_63" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect2_foregroundBlur_304_63"/>
</filter>
<clipPath id={clip0}>
<Rect width="1490" height="838" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</Svg>
        );
      };

      export default CardNoCrop;`;
