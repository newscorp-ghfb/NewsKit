import {withDefaultProps} from '../utils/with-default-props';
import {InternalLink} from './internal-link';
import {withLinkTheme} from './utils';

export const LinkInline = withLinkTheme(
  withDefaultProps(InternalLink, {noCrop: true}, 'linkInline'),
);
LinkInline.displayName = 'LinkInline';
