import {withDefaultProps} from '../utils/with-default-props';
import {InternalLink} from './internal-link';
import {withLinkTheme} from './utils';

export const LinkStandalone = withLinkTheme(
  withDefaultProps(InternalLink, {}, 'linkStandalone'),
);
LinkStandalone.displayName = 'LinkStandalone';
