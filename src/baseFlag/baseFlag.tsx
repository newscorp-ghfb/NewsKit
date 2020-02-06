import React from 'react';
import {styled, getTypePresetFromTheme} from '../utils/style';
import {BaseFlagProps} from './types';

const StyledBaseFlag = styled.span<BaseFlagProps>`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  ${getTypePresetFromTheme('caption010')}

  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BaseFlag: React.FC<BaseFlagProps> = props => {
  const {children} = props;
  return <StyledBaseFlag {...props}>{children}</StyledBaseFlag>;
};
