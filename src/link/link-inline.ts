import {withDefaultProps} from '../utils/with-default-props';
import {InternalLink} from './internal-link';
import {linkWithTheme} from './utils';

export const LinkInline = linkWithTheme(
  withDefaultProps(InternalLink, {noCrop: true}, 'linkInline'),
);
LinkInline.displayName = 'LinkInline';
