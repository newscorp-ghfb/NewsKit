import React, {useContext} from 'react';
import {ScrollProps} from './types';
import {ScrollSnapAlignmentContext} from './context';
import {StyledScrollSnapAlignment} from './styled';

export const ScrollSnapAlignment: React.FC<
  Pick<ScrollProps, 'snapAlign' | 'children'>
> = ({children, snapAlign}) => {
  const snapAlignContextValue = useContext(ScrollSnapAlignmentContext);

  return (
    <StyledScrollSnapAlignment snapAlign={snapAlign || snapAlignContextValue}>
      {children}
    </StyledScrollSnapAlignment>
  );
};
