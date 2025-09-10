import { withDefaultProps } from '../utils/with-default-props';
import { toNewsKitIcon } from './to-newskit-icon';
export var customToNewsKitIcon = function (displayName, CustomIcon, overrides) {
    // eslint-disable-next-line no-param-reassign
    CustomIcon.displayName = displayName;
    if (!overrides) {
        return toNewsKitIcon(CustomIcon);
    }
    return withDefaultProps(toNewsKitIcon(CustomIcon), {
        overrides: overrides,
    });
};
//# sourceMappingURL=custom-to-newskit-icon.js.map