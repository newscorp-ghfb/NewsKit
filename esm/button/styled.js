import { __makeTemplateObject } from "tslib";
import { BaseFlag } from '../flag/flag';
import { styled } from '../utils/style';
import { getTransitionPreset } from '../utils/style/transition-preset';
export var StyledFlag = styled(BaseFlag)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return getTransitionPreset("button.".concat(size), '');
}, function (_a) {
    var loading = _a.loading, disabled = _a.disabled;
    if (disabled) {
        return null;
    }
    var cursor = loading ? 'progress' : 'pointer';
    return { cursor: cursor };
});
var templateObject_1;
//# sourceMappingURL=styled.js.map