import * as React from 'react';
import {styled} from '../utils/style';

const ScreenReader = styled.div`
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
}

export const ScreenReaderOnly: React.FC<Props> = ({children, id}) => (
  <ScreenReader id={id}>{children}</ScreenReader>
);
