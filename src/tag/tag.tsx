import React from 'react';
import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getColorFromTheme,
  getBorderFromTheme,
} from '../utils/style';
import {as} from '../utils/component';
import {TagProps} from './types';
import {SizingKeys, BorderRadiusShape} from '../themes';
import {TagSize} from './utils';
import {tracking} from '../analytics';

const tagSizeToToken: Record<TagSize, SizingKeys> = {
  [TagSize.Large]: 'sizing070',
  [TagSize.Medium]: 'sizing060',
  [TagSize.Small]: 'sizing050',
};

const StyledTag = styled.a<TagProps>`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  ${getTypePresetFromTheme('caption010')}
  padding-left: ${getSizingFromTheme('sizing040')};
  padding-right: ${getSizingFromTheme('sizing040')};
  border-style: solid;
  border-width: ${getBorderFromTheme('tagBorderWidth')};
  border-color: ${getColorFromTheme('tagBorder')};
  background-color: ${getColorFromTheme('tagFill', '$backgroundColor')};
  color: ${getColorFromTheme('tagText')};
  ${({theme, $size: sizeProp, $shape: shapeProp}) => {
    const size = sizeProp || TagSize.Medium;
    const shape = shapeProp || BorderRadiusShape.Squared;
    const token = tagSizeToToken[size];
    const borderWidth = theme.borders.borderWidth020;
    const height = theme.sizing[token];
    return {
      height: theme.sizing[token],
      lineHeight: `calc(${height} - ${borderWidth} * 2)`,
      borderRadius: theme.borderRadius[shape][token],
    };
  }};
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({disabled, href, theme: {colors}}) => {
    if (disabled) {
      return {
        borderColor: colors.tagDisabledBorder,
        backgroundColor: colors.tagDisabledFill,
        color: colors.tagDisabledText,
        cursor: 'default',
      };
    }
    if (href) {
      return {
        ':hover, :active, :focus': {
          borderColor: colors.tagHoverBorder,
          backgroundColor: colors.tagHoverFill,
          color: colors.tagHoverText,
        },
      };
    }
    return {};
  }}
`;

export const Tag: React.FC<TagProps> = props => {
  const {href, children, disabled} = props;
  const renderAs = href && !disabled ? 'a' : 'span';
  return (
    <StyledTag
      {...as(renderAs)}
      {...props}
      onClick={() => tracking.trackInteraction(children)}
    >
      {children}
    </StyledTag>
  );
};
