import React from 'react';
import {styled, getTypePresetFromTheme} from '../utils/style';
import {BaseFlagProps} from './types';
import {Stack} from '../stack';
import {Flow, StackDistribution} from '../stack/types';

const StyledBaseFlag = styled.span<BaseFlagProps>`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* ${getTypePresetFromTheme(undefined, '$size')} */
`;

export const BaseFlag: React.FC<BaseFlagProps> = ({children, ...props}) => (
  <StyledBaseFlag {...props}>
    <Stack
      space="sizing010"
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
    >
      {children}
    </Stack>
  </StyledBaseFlag>
);
