import {getSSRId} from 'newskit';
import React from 'react';
import {Path} from '../path';
import {Rect} from '../rect';
import {Svg} from '../svg';

export const VolumeControlIllustration: React.FC = () => {
  const mask0 = getSSRId();

  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <Rect
        x="286"
        y="380"
        width="773"
        height="16"
        rx="8"
        fill="interface040"
      />
      <Rect
        x="286"
        y="380"
        width="451"
        height="16"
        rx="8"
        fill="illustrationPalette060"
      />
      <Rect
        x="672"
        y="297"
        width="181"
        height="181"
        rx="90.5"
        fill="illustrationPalette050"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="710"
        y="335"
        width="106"
        height="106"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M771.833 358.364V349.266C789.544 353.285 802.749 369.096 802.749 388C802.749 406.903 789.544 422.715 771.833 426.734V417.636C784.597 413.837 793.916 402.001 793.916 388C793.916 373.999 784.597 362.162 771.833 358.364ZM723.25 374.749V401.249H740.917L763 423.332V352.665L740.917 374.749H723.25ZM782.874 388.001C782.874 380.183 778.369 373.47 771.833 370.202V405.756C778.369 402.532 782.874 395.818 782.874 388.001Z"
          fill="#0A0A0A"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Rect
          x="710"
          y="335"
          width="106"
          height="106"
          fill="illustrationPalette010"
        />
      </g>
    </Svg>
  );
};
export default VolumeControlIllustration;
