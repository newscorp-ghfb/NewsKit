/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import {styled} from '../utils/style';
import {as} from '../utils/component';
import {TagProps} from './types';
import {TagSize} from './utils';
import {SizingKeys} from '../themes';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../baseFlag';

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

const StyledTag = styled(BaseFlag)<TagProps>`
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

  ${({disabled, $size: sizeProp, ...props}) => {
    const size = sizeProp || TagSize.Medium;
    return getStylePresetFromTheme('interactive070', '$stylePreset' as any, {
      isDisabled: disabled,
      borderRadiusSize: tagBorderRadiusToken[size],
    })(props);
  }}
`;

export const Tag: React.FC<TagProps> = props => {
  const {href, children, disabled, ...rest} = props;
  const newProps: TagProps = {...rest};
  let renderAs: 'span' | 'a' = 'span';

  if (href) {
    renderAs = 'a';
    newProps.href = href;
    if (disabled) {
      newProps.disabled = disabled;
    }
  }
  return (
    <StyledTag data-testid="tag" {...as(renderAs)} {...newProps}>
      {children}
    </StyledTag>
  );
};
