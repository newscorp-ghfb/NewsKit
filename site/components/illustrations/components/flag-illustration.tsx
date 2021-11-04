import React from 'react';
import {Path} from '../path';
import {Rect} from '../rect';
import {Svg} from '../svg';

export const FlagIllustration: React.FC = () => (
  <Svg
    width="1344"
    height="759"
    viewBox="0 0 1344 759"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1344" height="759" fill="illustrationBackground020" />
    <Path
      d="M774 386C774 352.863 747.137 326 714 326H521C482.892 326 452 356.892 452 395V575C452 581.627 457.373 587 464 587H714C747.137 587 774 560.137 774 527V386Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M552 458H774V558.5L748.5 529H582C565.431 529 552 515.569 552 499V458Z"
      fill="illustrationPalette070"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M947.796 171C958.449 171 963.82 183.847 956.337 191.429L834.751 314.624C830.166 319.269 830.135 326.728 834.682 331.412L956.737 457.141C964.124 464.751 958.732 477.5 948.126 477.5H624.202C622.412 477.5 620.636 477.669 618.897 478H578.5C563.864 478 552 489.864 552 504.5V231C552 197.863 578.863 171 612 171H947.796ZM552.041 505.991L552 506V504.5C552 505 552.014 505.497 552.041 505.991Z"
      fill="illustrationPalette040"
    />
    <Rect
      x="541"
      y="529"
      width="233"
      height="58"
      rx="29"
      fill="illustrationPalette060"
    />
  </Svg>
);
export default FlagIllustration;
