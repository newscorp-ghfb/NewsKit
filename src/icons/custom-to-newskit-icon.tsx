import {withDefaultProps} from '../utils/with-default-props';
import {toNewsKitIcon} from './to-newskit-icon';
import {NewsKitIconProps, SvgProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

export const customToNewsKitIcon = (
  displayName: string,
  CustomIcon: React.ComponentType<SvgProps>,
  overrides?: NewsKitIconProps['overrides'],
) => {
  // eslint-disable-next-line no-param-reassign
  CustomIcon.displayName = displayName;

  return withOwnTheme(
    withDefaultProps(toNewsKitIcon(CustomIcon), {
      overrides: overrides || {},
    }),
  )({defaults, stylePresets});
};
