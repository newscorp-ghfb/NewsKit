import {withDefaultProps} from '../utils/with-default-props';
import {InternalLink} from './internal-link';

export const LinkStandalone = withDefaultProps(
  InternalLink,
  {},
  'linkStandalone',
);
LinkStandalone.displayName = 'LinkStandalone';
