import React from 'react';
import {styled, getTypePresetFromTheme} from '../utils/style';
import {FlagProps} from './types';
import {FlagSize} from './utils';
import {SizingKeys, TypePresetKeys} from '../themes';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../base-flag';

const flagSizeStyleTokens: Record<
  FlagSize,
  {
    minHeight: SizingKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    padding: PaddingPresetKeys;
  }
> = {
  [FlagSize.Large]: {
    minHeight: 'sizing060',
    borderRadiusSize: 'sizing070',
    typePreset: 'flag020',
    padding: 'spaceInset020Squish',
  },
  [FlagSize.Small]: {
    minHeight: 'sizing050',
    borderRadiusSize: 'sizing050',
    typePreset: 'flag010',
    padding: 'spaceInset010Squish',
  },
};

const StyledFlag = styled(BaseFlag)<FlagProps>`
  ${({theme, $size: sizeProp, $spacing: spacingProp}) => {
    const size = sizeProp || FlagSize.Small;
    const sizeToken = flagSizeStyleTokens[size].minHeight;
    const paddingToken = flagSizeStyleTokens[size].padding;
    const borderWidth = theme.borders.borderWidth020;
    const height = theme.sizing[sizeToken];

    return {
      minHeight: theme.sizing[sizeToken],
      padding: spacingProp || theme.sizing[paddingToken],
      lineHeight: `calc(${height} - ${borderWidth} * 2)`,
    };
  }};

  ${({$size: sizeProp, ...props}) => {
    const size = sizeProp || FlagSize.Small;
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    return getStylePresetFromTheme('flag010', '$stylePreset' as any, {
      borderRadiusSize: flagSizeStyleTokens[size].borderRadiusSize,
    })(props);
  }}

  ${({$size: sizeProp, ...props}) => {
    const size = sizeProp || FlagSize.Small;
    return getTypePresetFromTheme(flagSizeStyleTokens[size].typePreset)(props);
  }}
`;

export const Flag: React.FC<FlagProps> = props => {
  const {children} = props;
  return (
    <StyledFlag data-testid="flag" {...props}>
      {children}
    </StyledFlag>
  );
};
