import React from 'react';
import {EmotionIconProps} from '@emotion-icons/emotion-icon';
import {withTheme} from '../theme';
import {NewsKitIconProps, NewsKitIcon, SvgProps} from './types';
import {getSizingCssFromTheme, getStylePreset, styled} from '../utils/style';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderIconStylePreset = (overridesOnly: boolean) => (props: any) => {
  if (!overridesOnly || (props.overrides && props.overrides.stylePreset)) {
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
): NewsKitIcon =>
  withOwnTheme(
    withTheme<NewsKitIconProps>(
      React.memo(props => {
        const emotionIconName = PassedIcon.displayName;
        const toStyledIcon = (
          Icon: React.ComponentType<EmotionIconProps>,
        ) => styled(Icon)`
          // If not overridden, render SP CSS here, this allows parent SP to override Icon default.
          ${renderIconStylePreset(false)}

          vertical-align: unset;
          display: inline-block;
          // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity
          && {
            //we don't want the icon to have a default size hence using non defaulted functions
            ${props.overrides?.size &&
            getSizingCssFromTheme('width', props.overrides.size)}
            ${props.overrides?.size &&
            getSizingCssFromTheme('height', props.overrides.size)}
        // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.
        ${renderIconStylePreset(true)}
          }
        `;
        const Icon =
          props.theme.icons[`${emotionIconName}`] ||
          toStyledIcon(PassedIcon as React.ComponentType<EmotionIconProps>);
        return <Icon title={props.title} {...props} />;
      }),
    ),
  )({defaults, stylePresets});
