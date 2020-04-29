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

const StyledBaseFlag = styled.div<BaseFlagProps>`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  min-height: ${getSizingFromTheme(undefined, 'minHeight')};
  padding: ${getSizingFromTheme(undefined, 'padding')};
  cursor: ${({isDisabled}) => (isDisabled ? 'not-allowed' : 'default')};

  svg {
    width: ${getSizingFromTheme(undefined, 'iconSize')};
    height: ${getSizingFromTheme(undefined, 'iconSize')};
  }

  ${({isDisabled, ...props}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getStylePresetFromTheme(undefined, 'stylePreset' as any, {
      isDisabled,
    })(props)}
`;

const StyledTextCropWrapper = styled.span<Pick<BaseFlagProps, 'typePreset'>>`
  ${getTypePresetFromTheme(undefined, 'typePreset')}
`;

export const BaseFlag: React.FC<BaseFlagProps> = ({
  children,
  typePreset,
  ...props
}) => (
  <StyledBaseFlag {...props}>
    <Stack
      space="sizing010"
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
    >
      {React.Children.map(children, child => {
        if (typeof child === 'string') {
          return (
            <StyledTextCropWrapper typePreset={typePreset}>
              {child}
            </StyledTextCropWrapper>
          );
        }
        return child;
      })}
    </Stack>
  </StyledBaseFlag>
);
