import React from 'react';
import {EmotionIconProps} from '@emotion-icons/emotion-icon';
import {withTheme} from '../theme';
import {NewsKitIconProps, SvgProps} from './types';
import {getStylePreset, styled} from '../utils/style';

export const toNewsKitIcon = (
  PassedIcon:
    | React.ComponentType<EmotionIconProps>
    | React.ComponentType<SvgProps>,
) =>
  withTheme<NewsKitIconProps>(props => {
    const emotionIconName = PassedIcon.displayName;
    const size =
      props.overrides && props.overrides.size
        ? props.theme.sizing[props.overrides.size]
        : null;

    const StyledIcon = styled(PassedIcon)`
      ${getStylePreset('icons', '', {isSvg: true})};
      vertical-align: unset;
      display: inline-block;
      ${size &&
      `
      // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity
      && {
        width: ${size};
        height: ${size};
      }
      `}
    `;

    const Icon = props.theme.icons[`${emotionIconName}`] || StyledIcon;

    return <Icon title={props.title} {...props} />;
  });
