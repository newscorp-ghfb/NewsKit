/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import {styled} from '../utils/style';
import {as} from '../utils/component';
import {TagProps} from './types';
import {TagSize} from './utils';
import {SizingKeys, TypePresetKeys} from '../themes';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../base-flag';

const tagSizeStyleTokens: Record<
  TagSize,
  {
    minHeight: SizingKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    padding: PaddingPresetKeys;
  }
> = {
  [TagSize.Large]: {
    minHeight: 'sizing070',
    borderRadiusSize: 'sizing070',
    typePreset: 'flag020',
    padding: 'spaceInset020Squish',
  },
  [TagSize.Medium]: {
    minHeight: 'sizing060',
    borderRadiusSize: 'sizing060',
    typePreset: 'flag010',
    padding: 'spaceInset020Squish',
  },
  [TagSize.Small]: {
    minHeight: 'sizing050',
    borderRadiusSize: 'sizing050',
    typePreset: 'flag010',
    padding: 'spaceInset010Squish',
  },
};

const StyledTag = styled(BaseFlag)<TagProps>`
  ${({theme, $size: sizeProp}) => {
    const size = sizeProp || TagSize.Medium;
    const sizeToken = tagSizeStyleTokens[size].minHeight;
    const paddingToken = tagSizeStyleTokens[size].padding;

    return {
      minHeight: theme.sizing[sizeToken],
      padding: theme.sizing[paddingToken],
    };
  }};

  ${({disabled, $size: sizeProp, ...props}) => {
    const size = sizeProp || TagSize.Medium;
    return getStylePresetFromTheme('interactive070', '$stylePreset' as any, {
      isDisabled: disabled,
      borderRadiusSize: tagSizeStyleTokens[size].borderRadiusSize,
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
