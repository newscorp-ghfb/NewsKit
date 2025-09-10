import { withDefaultProps } from '../utils/with-default-props';
import { InternalLink } from './internal-link';
import { withLinkTheme } from './utils';
export var LinkStandalone = withLinkTheme(withDefaultProps(InternalLink, {}, 'linkStandalone'));
LinkStandalone.displayName = 'LinkStandalone';
//# sourceMappingURL=link-standalone.js.map