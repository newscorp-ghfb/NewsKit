import React from 'react';
import {EmotionIconProps} from '@emotion-icons/emotion-icon';
import {withTheme} from '../theme';
import {NewsKitIconProps, SvgProps} from './types';
import {getStylePreset, styled} from '../utils/style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderIconStylePreset = (overridesOnly: boolean) => (props: any) => {
  if (!overridesOnly || props?.overrides?.stylePreset) {
    return getStylePreset('icons', '', {
      isSvg: true,
    })(props);
  }
  return {};
};

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
      // If not overridden, render SP CSS here, this allows parent SP to override Icon default.
      ${renderIconStylePreset(false)}

      vertical-align: unset;
      display: inline-block;
      // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity
      && {
        width: ${size};
        height: ${size};
        // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.
        ${renderIconStylePreset(true)}
      }
    `;

    const Icon = props.theme.icons[`${emotionIconName}`] || StyledIcon;

    return <Icon title={props.title} {...props} />;
  });
