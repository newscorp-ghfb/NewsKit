import * as React from 'react';
import {styled} from '../utils/style';

// ScreenReader component shouldn't be a div element if we would like to
// nest it inside paragraph (<div> cannot appear as a descendant of <p>).
// workaround: Make the element span, but keep the display: block; in order
// to function as a div.
const ScreenReader = styled.span`
  display: block;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export interface Props {
  id?: string;
  children: React.ReactNode;
}
export const ScreenReaderOnly: React.FC<Props> = props => (
  <ScreenReader {...props} />
);
