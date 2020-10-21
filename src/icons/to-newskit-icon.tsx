import React from 'react';
import {EmotionIconProps} from '@emotion-icons/emotion-icon';
import {withTheme} from '../theme';
import {SvgProps} from './types';
import {getStylePreset, styled} from '../utils/style';

export const toNewsKitIcon = (
  EmotionIcon: React.ComponentType<EmotionIconProps>,
) =>
  withTheme<SvgProps>(props => {
    const emotionIconName = EmotionIcon.displayName;
    const size =
      props.overrides && props.overrides.size
        ? props.theme.sizing[props.overrides.size]
        : null;

    const StyledIcon = styled(EmotionIcon)`
      ${getStylePreset('icons', '', {isSvg: true})};
      vertical-align: unset;
      ${size &&
        `
      // more info on why do we have two ampersands:
      // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity
      && {
        width: ${size};
        height: ${size};
      }
      `}
    `;

    const Icon = props.theme.icons[`${emotionIconName}`] || StyledIcon;

    return <Icon title={props.title} overrides={props.overrides} {...props} />;
  });
