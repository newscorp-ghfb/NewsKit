import React from 'react';
import {TagProps} from './types';
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

const ThemelessTag = React.forwardRef<HTMLDivElement, TagProps>(
  ({overrides = {}, disabled, href, ...props}, ref) => {
    const theme = useTheme();
    const {size = 'medium'} = props;

    return (
      <StyledFlag
        ref={ref}
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
  },
);

export const Tag = withOwnTheme(ThemelessTag)({defaults, stylePresets});
