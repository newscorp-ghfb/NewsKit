import React from 'react';
import {EmotionIconProps} from '@emotion-icons/emotion-icon';
import {withTheme} from '../theme';
import {NewsKitIconProps, NewsKitIcon, SvgProps} from './types';
import {getSizingCssFromTheme, getStylePreset, styled} from '../utils/style';
import {getTransitionPresetFromTheme} from '../utils/style/transition-preset';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {logicalProps} from '../utils/logical-properties';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderIconStylePreset = (overridesOnly: boolean) => (props: any) => {
  if (!overridesOnly || (props.overrides && props.overrides.stylePreset)) {
    const stylePreset = getStylePreset('icons', '', {
      isSvg: true,
    })(props);

    const transitionPreset = getTransitionPresetFromTheme('iconColorChange')(
      props,
    );

    return {
      ...stylePreset,
      ...transitionPreset,
    };
  }
  return {};
};

const StyledIcon = styled.svg<NewsKitIconProps>`
  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.
  ${renderIconStylePreset(false)}

  vertical-align: unset;
  display: inline-block;

  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity
  && {
    //we don't want the icon to have a default size hence using non defaulted functions
    ${props =>
      props.overrides?.size &&
      getSizingCssFromTheme('width', props.overrides.size)}
    ${props =>
      props.overrides?.size &&
      getSizingCssFromTheme('height', props.overrides.size)}

      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.
      ${renderIconStylePreset(true)}
  }

  ${logicalProps()}
`;

export const toNewsKitIcon = (
  PassedIcon:
    | React.ComponentType<EmotionIconProps>
    | React.ComponentType<SvgProps>,
): NewsKitIcon =>
  withOwnTheme(
    withTheme<NewsKitIconProps>(
      React.memo(props => {
        const emotionIconName = PassedIcon.displayName;
        if (props.theme.icons[`${emotionIconName}`]) {
          const Icon = props.theme.icons[`${emotionIconName}`];
          return <Icon title={props.title} {...props} />;
        }
        return <StyledIcon title={props.title} {...props} as={PassedIcon} />;
      }),
    ),
  )({defaults, stylePresets});
