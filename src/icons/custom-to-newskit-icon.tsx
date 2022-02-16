import {withDefaultProps} from '../utils/with-default-props';
import {toNewsKitIcon} from './to-newskit-icon';
import {NewsKitIconProps, SvgProps} from './types';

export const customToNewsKitIcon = (
  displayName: string,
  CustomIcon: React.ComponentType<SvgProps>,
  overrides?: NewsKitIconProps['overrides'],
) => {
  // eslint-disable-next-line no-param-reassign
  CustomIcon.displayName = displayName;

  if (!overrides) {
    return toNewsKitIcon(CustomIcon);
  }

  return withDefaultProps(toNewsKitIcon(CustomIcon), {
    overrides,
  });
};
