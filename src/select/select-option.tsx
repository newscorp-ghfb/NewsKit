import React from 'react';
import {SelectOptionProps} from './types';

import {StyledOption} from './styled';

export const SelectOption = (props: SelectOptionProps) => {
  const {children} = props;

  return (
    <StyledOption {...props}>
      {typeof children === 'string' ? (
        <span>{children}</span>
      ) : (
        <div>{children}</div>
      )}
    </StyledOption>
  );
};
