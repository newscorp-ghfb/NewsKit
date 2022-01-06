import {withDefaultProps} from '../utils/with-default-props';
import {InternalLink} from './internal-link';
import {linkWithTheme} from './utils';

export const LinkStandalone = linkWithTheme(
  withDefaultProps(InternalLink, {}, 'linkStandalone'),
);
LinkStandalone.displayName = 'LinkStandalone';
