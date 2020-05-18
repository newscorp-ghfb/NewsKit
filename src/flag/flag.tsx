import React from 'react';

import {FlagProps, FlagSize, BaseFlagProps} from './types';
import {Stack} from '../stack';
import {Flow, StackDistribution} from '../stack/types';
import {
  StyledBaseFlag,
  StyledTextCropWrapper,
  IE11FixContainer,
} from './styled';

const flagSizeStyleTokens: Record<FlagSize, Partial<BaseFlagProps>> = {
  [FlagSize.Large]: {
    typePreset: 'flag020',
    minHeight: 'sizing060',
    padding: 'spaceInset020Squish',
  },
  [FlagSize.Small]: {
    typePreset: 'flag010',
    minHeight: 'sizing050',
    padding: 'spaceInset010Squish',
  },
};

const BaseFlag: React.FC<BaseFlagProps> = ({
  children,
  typePreset,
  space = 'sizing010',
  height,
  width,
  ...props
}) => (
  <IE11FixContainer $height={height} $width={width}>
    <StyledBaseFlag {...props} $height={height} $width={width}>
      <Stack
        space={space}
        flow={Flow.HorizontalCenter}
        stackDistribution={StackDistribution.Center}
      >
        {React.Children.map(children, child =>
          typeof child === 'string' ? (
            <StyledTextCropWrapper typePreset={typePreset}>
              {child}
            </StyledTextCropWrapper>
          ) : (
            child
          ),
        )}
      </Stack>
    </StyledBaseFlag>
  </IE11FixContainer>
);

export const Flag: React.FC<FlagProps> = props => {
  const {size = FlagSize.Small} = props;
  return (
    <BaseFlag
      data-testid="flag"
      stylePreset="flagDefault"
      iconSize="iconSize010"
      {...flagSizeStyleTokens[size]}
      {...props}
    />
  );
};
