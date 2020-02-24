import React from 'react';
import {as} from '../utils/component';
import {TagProps, TagSize} from './types';
import {SizingKeys, TypePresetKeys, IconSizeKeys} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../base-flag';

const tagSizeStyleTokens: Record<
  TagSize,
  {
    $typePreset: TypePresetKeys;
    minHeight: SizingKeys;
    borderRadiusSize: SizingKeys;
    padding: PaddingPresetKeys;
    iconSize: IconSizeKeys;
  }
> = {
  [TagSize.Large]: {
    $typePreset: 'tag030',
    minHeight: 'sizing070',
    borderRadiusSize: 'sizing070',
    padding: 'spaceInset020Squish',
    iconSize: 'iconSize020',
  },
  [TagSize.Medium]: {
    $typePreset: 'tag020',
    minHeight: 'sizing060',
    borderRadiusSize: 'sizing060',
    padding: 'spaceInset020Squish',
    iconSize: 'iconSize010',
  },
  [TagSize.Small]: {
    $typePreset: 'tag010',
    minHeight: 'sizing050',
    borderRadiusSize: 'sizing050',
    padding: 'spaceInset010Squish',
    iconSize: 'iconSize010',
  },
};

const tagBorderRadiusToken: Record<TagSize, SizingKeys> = {
  [TagSize.Large]: 'sizing070',
  [TagSize.Medium]: 'sizing060',
  [TagSize.Small]: 'sizing050',
};

const StyledTag = styled.a<TagProps>`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  ${getTypePresetFromTheme('caption010')}

  border-style: solid;
  border-width: ${getBorderFromTheme('tagBorderWidth')};
  color: ${getColorFromTheme('tagText')};

  ${({theme, $size: sizeProp}) => {
    const size = sizeProp || TagSize.Medium;
    const sizeToken = tagSizeToToken[size];
    const paddingToken = tagPaddingToken[size];
    const borderWidth = theme.borders.borderWidth020;
    const height = theme.sizing[sizeToken];

    return {
      minHeight: theme.sizing[sizeToken],
      padding: theme.sizing[paddingToken],
      lineHeight: `calc(${height} - ${borderWidth} * 2)`,
    };
  }};
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({disabled, $size: sizeProp, ...props}) => {
    const size = sizeProp || TagSize.Medium;
    return getStylePresetFromTheme('tagPrimary', '$stylePreset' as any, {
      isDisabled: disabled,
      borderRadiusSize: tagBorderRadiusToken[size],
    })(props);
  }}
`;

export const Tag: React.FC<TagProps> = props => {
  const {href, children, disabled} = props;
  const renderAs = href && !disabled ? 'a' : 'span';
  return (
    <StyledTag {...as(renderAs)} {...props}>
      {children}
    </StyledTag>
  );
};
