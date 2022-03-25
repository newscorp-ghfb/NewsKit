import React from 'react';
import {TagProps, TagSize} from './types';
import {Flag} from '../flag';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {useTheme} from '../theme';
import {styled} from '../utils/style';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {getTransitionPreset} from '../utils/style/transition-preset';

const StyledFlag = styled(Flag)`
  ${({href, disabled}: TagProps) => href && !disabled && {cursor: 'pointer'}}
  ${({size}) => getTransitionPreset(`tag.${size}`, '')};
`;

const ThemelessTag = ({overrides = {}, disabled, href, ...props}: TagProps) => {
  const theme = useTheme();
  const {size = TagSize.Medium} = props;

  return (
    <StyledFlag
      data-testid="tag"
      disabled={disabled}
      href={disabled ? undefined : href}
      {...emotionAs(href && !disabled ? 'a' : 'div')}
      {...props}
      overrides={{
        ...theme.componentDefaults.tag[size],
        ...filterOutFalsyProperties(overrides),
      }}
    />
  );
};

export const Tag = withOwnTheme(ThemelessTag)({defaults, stylePresets});

Tag.stylePresets = stylePresets;
