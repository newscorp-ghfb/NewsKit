import {withDefaultProps} from '../utils/with-default-props';
import {toNewsKitIcon} from './to-newskit-icon';
import {SvgProps} from './types';

export const customToNewsKitIcon = (
  displayName: string,
  CustomIcon: React.ComponentType<SvgProps>,
  overrides?: SvgProps['overrides'],
) => {
  // eslint-disable-next-line no-param-reassign
  CustomIcon.displayName = displayName;

  return withDefaultProps(toNewsKitIcon(CustomIcon), {
    overrides: overrides || {},
  });
};
