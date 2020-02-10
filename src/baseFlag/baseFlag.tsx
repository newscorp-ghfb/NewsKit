import React from 'react';
import {styled, getTypePresetFromTheme} from '../utils/style';
import {BaseFlagProps} from './types';
import {Stack} from '../stack';

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

export const BaseFlag: React.FC<BaseFlagProps> = ({children, ...props}) => (
  <Stack
    flow="horizontal-top"
    stackDistribution="flex-start"
    space="sizing010"
    wrap="nowrap"
  >
    <StyledBaseFlag {...props}>{children}</StyledBaseFlag>
  </Stack>
);
