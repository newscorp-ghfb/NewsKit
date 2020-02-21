import React from 'react';
import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
} from '../utils/style';
import {getStylePresetFromTheme} from '../utils/style-preset';
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
  min-height: ${getSizingFromTheme(undefined, 'minHeight')};
  padding: ${getSizingFromTheme(undefined, 'padding')};
  ${getTypePresetFromTheme(undefined, '$typePreset')}

  svg {
    width: ${getSizingFromTheme(undefined, 'iconSize')};
    height: ${getSizingFromTheme(undefined, 'iconSize')};
  }

  ${({isDisabled, borderRadiusSize, ...props}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getStylePresetFromTheme(undefined, '$stylePreset' as any, {
      isDisabled,
      borderRadiusSize,
    })(props)}
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
