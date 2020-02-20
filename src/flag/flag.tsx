import React from 'react';
import {styled} from '../utils/style';
import {FlagProps} from './types';
import {FlagSize} from './utils';
import {SizingKeys} from '../themes';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../base-flag';

const flagSizeStyleTokens: Record<
  FlagSize,
  {
    minHeight: SizingKeys;
    borderRadiusSize: SizingKeys;
    padding: PaddingPresetKeys;
  }
> = {
  [FlagSize.Large]: {
    minHeight: 'sizing060',
    borderRadiusSize: 'sizing070',
    padding: 'spaceInset020Squish',
  },
  [FlagSize.Small]: {
    minHeight: 'sizing050',
    borderRadiusSize: 'sizing050',
    padding: 'spaceInset010Squish',
  },
};

const StyledFlag = styled(BaseFlag)<FlagProps>`
  ${({theme, $size: sizeProp, $spacing: spacingProp}) => {
    const size = sizeProp || FlagSize.Small;
    const sizeToken = flagSizeStyleTokens[size].minHeight;
    const paddingToken = flagSizeStyleTokens[size].padding;

    return {
      minHeight: theme.sizing[sizeToken],
      padding: spacingProp || theme.sizing[paddingToken],
    };
  }};

  ${({$size: sizeProp, ...props}) => {
    const size = sizeProp || FlagSize.Small;
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    return getStylePresetFromTheme('flag010', '$stylePreset' as any, {
      borderRadiusSize: flagSizeStyleTokens[size].borderRadiusSize,
    })(props);
  }}
`;

export const Flag: React.FC<FlagProps> = props => {
  const {$size = FlagSize.Small} = props;
  return (
    <StyledFlag
      data-testid="flag"
      $stylePreset="flag010"
      $size={$size}
      $typePreset={$size === FlagSize.Large ? 'flag020' : 'flag010'}
      {...props}
    />
  );
};
