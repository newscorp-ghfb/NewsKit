import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const AnatomyIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Rect
      x="234.332"
      y="400.054"
      width="38.5134"
      height="38.5134"
      rx="19.2567"
      fill="illustrationPalette040"
    />
    <Path
      d="M250 413.722V411H255.086V426.385H252.047V413.722H250Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M273 418H400V420H273V418Z"
      fill="illustrationPalette040"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M400 418.811C400 415.819 402.425 413.394 405.417 413.394H412.838V415.228H405.417C403.438 415.228 401.834 416.832 401.834 418.811C401.834 420.789 403.438 422.394 405.417 422.394H412.838V424.228H405.417C402.425 424.228 400 421.802 400 418.811Z"
      fill="illustrationPalette040"
    />
    <Path d="M450 414H1256V424H450V414Z" fill="illustrationPalette040" />
  </Svg>
);

export default AnatomyIllustration;
