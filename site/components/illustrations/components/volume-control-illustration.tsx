import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const VolumeControlIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Rect x="358" y="412" width="773" height="16" rx="8" fill="interface050" />
    <Rect
      x="358"
      y="412"
      width="451"
      height="16"
      rx="8"
      fill="illustrationPalette060"
    />
    <Rect
      x="744"
      y="329"
      width="181"
      height="181"
      rx="90.5"
      fill="illustrationPalette050"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M843.833 390.364V381.266C861.544 385.285 874.749 401.097 874.749 420C874.749 438.903 861.544 454.715 843.833 458.734V449.636C856.597 445.837 865.916 434.001 865.916 420C865.916 405.999 856.597 394.162 843.833 390.364ZM795.25 406.751V433.251H812.917L835 455.334V384.667L812.917 406.751H795.25ZM854.874 419.999C854.874 412.182 850.369 405.468 843.833 402.2V437.754C850.369 434.53 854.874 427.817 854.874 419.999Z"
      fill="white"
    />
  </Svg>
);

export default VolumeControlIllustration;
