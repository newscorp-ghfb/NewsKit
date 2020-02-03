/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  styled,
  getTypePresetFromTheme,
  getColorFromTheme,
  getBorderFromTheme,
} from '../utils/style';
import {as} from '../utils/component';
import {TagProps} from './types';
import {SizingKeys} from '../themes';
import {TagSize} from './utils';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {PaddingPresetKeys} from '../themes/mappers/spacing';

const tagSizeToToken: Record<TagSize, SizingKeys> = {
  [TagSize.Large]: 'sizing070',
  [TagSize.Medium]: 'sizing060',
  [TagSize.Small]: 'sizing050',
};

const tagPaddingToken: Record<TagSize, PaddingPresetKeys> = {
  [TagSize.Large]: 'spaceInset020Squish',
  [TagSize.Medium]: 'spaceInset020Squish',
  [TagSize.Small]: 'spaceInset010Squish',
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
    return getStylePresetFromTheme('interactive070', '$stylePreset' as any, {
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
