import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const ProgressIndicatorIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Rect
      x="358"
      y="360"
      width="773"
      height="118"
      rx="59"
      fill="illustrationShadow010"
    />
    <Path
      d="M683.116 370L417 370C389.938 370 368 391.938 368 419C368 446.062 389.938 468 417 468H696.536C701.412 436.162 697.557 402.621 683.565 371.006C683.416 370.67 683.266 370.335 683.116 370Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M759.081 370H432.204C442.523 389.555 457.514 406.683 477.488 418.01C504.131 433.119 518.937 450.81 528.644 468H743.882C759.16 443.281 766.447 411.197 759.081 370Z"
      fill="illustrationPalette050"
    />
    <Path
      d="M643.335 468C641.425 457.277 637.837 443.485 628.048 426C615.861 404.231 602.897 392.277 592.702 382.875C587.69 378.254 583.348 374.25 580.095 370H807.589C809.209 381.7 807.73 389.153 807.467 390.477C807.448 390.577 807.435 390.641 807.431 390.671C807.384 390.999 807.337 391.329 807.29 391.66C803.979 414.889 799.705 444.879 780.259 468H643.335Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M727.519 370H817C844.062 370 866 391.938 866 419C866 446.062 844.062 468 817 468H773.283C774.324 459.434 774.455 448.182 770.444 433.311C764.708 412.039 750.973 396.707 738.744 383.057C734.727 378.574 730.873 374.272 727.519 370Z"
      fill="illustrationPalette030"
    />
  </Svg>
);

export default ProgressIndicatorIllustration;
