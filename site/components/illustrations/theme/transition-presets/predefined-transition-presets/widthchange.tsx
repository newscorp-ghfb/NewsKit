import React from 'react';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const widthChange: React.FC = () => (
  <Svg
    width="1000"
    height="1000"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1000" height="1000" rx="22" fill="illustrationBackground020" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M822.209 629.153C817.222 626.021 810.765 629.639 810.765 635.566V659.555L138.5 660.099L138.5 672.465L810.765 672.465V697.434C810.765 703.36 817.22 706.978 822.207 703.848L871.468 672.925C876.176 669.97 876.178 663.056 871.47 660.099L822.209 629.153Z"
      fill="illustrationInterface090"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M740 311H260C194.278 311 141 364.278 141 430C141 495.722 194.278 549 260 549H740C805.722 549 859 495.722 859 430C859 364.278 805.722 311 740 311ZM260 295C185.442 295 125 355.442 125 430C125 504.558 185.442 565 260 565H740C814.558 565 875 504.558 875 430C875 355.442 814.558 295 740 295H260Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M759.891 425.8C764.771 426.84 768.691 429.28 771.651 433.12C774.611 436.88 776.091 441.2 776.091 446.08C776.091 453.12 773.611 458.72 768.651 462.88C763.771 466.96 756.931 469 748.131 469H708.891V384.76H746.811C755.371 384.76 762.051 386.72 766.851 390.64C771.731 394.56 774.171 399.88 774.171 406.6C774.171 411.56 772.851 415.68 770.211 418.96C767.651 422.24 764.211 424.52 759.891 425.8ZM729.411 418.84H742.851C746.211 418.84 748.771 418.12 750.531 416.68C752.371 415.16 753.291 412.96 753.291 410.08C753.291 407.2 752.371 405 750.531 403.48C748.771 401.96 746.211 401.2 742.851 401.2H729.411V418.84ZM744.531 452.44C747.971 452.44 750.611 451.68 752.451 450.16C754.371 448.56 755.331 446.28 755.331 443.32C755.331 440.36 754.331 438.04 752.331 436.36C750.411 434.68 747.731 433.84 744.291 433.84H729.411V452.44H744.531Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M395 430C395 504.558 334.558 565 260 565C185.442 565 125 504.558 125 430C125 355.442 185.442 295 260 295C334.558 295 395 355.442 395 430Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M278.14 457.12H246.7L241.66 472H220.18L250.66 387.76H274.42L304.9 472H283.18L278.14 457.12ZM272.86 441.28L262.42 410.44L252.1 441.28H272.86Z"
      fill="white"
    />
  </Svg>
);

export default widthChange;
