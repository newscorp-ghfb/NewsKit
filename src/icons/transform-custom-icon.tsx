import {withDefaultProps} from '../utils/with-default-props';
import {toNewsKitIcon} from './to-newskit-icon';
import {SvgProps} from './types';

export const transformCustomIcon = (
  displayName: string,
  overrides: SvgProps['overrides'],
  CustomIcon: React.ComponentType<SvgProps>,
) => {
  // eslint-disable-next-line no-param-reassign
  CustomIcon.displayName = displayName;

  return withDefaultProps(toNewsKitIcon(CustomIcon), {
    overrides,
  });
};
