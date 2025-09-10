import { withDefaultProps } from '../utils/with-default-props';
import { withOwnTheme } from '../utils/with-own-theme';
import { Card } from './card';
import defaults from './defaults';
import stylePresets from './style-presets';
export var CardInset = withOwnTheme(withDefaultProps(Card, {}, 'cardInset'))({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=card-inset.js.map