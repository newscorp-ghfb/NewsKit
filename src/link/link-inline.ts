import {withDefaultProps} from '../utils/with-default-props';
import {InternalLink} from './internal-link';

export const LinkInline = withDefaultProps(
  InternalLink,
  {noCrop: true},
  'linkInline',
);
LinkInline.displayName = 'LinkInline';
