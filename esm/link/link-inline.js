import { withDefaultProps } from '../utils/with-default-props';
import { InternalLink } from './internal-link';
import { withLinkTheme } from './utils';
export var LinkInline = withLinkTheme(withDefaultProps(InternalLink, { noCrop: true }, 'link'));
LinkInline.displayName = 'LinkInline';
//# sourceMappingURL=link-inline.js.map