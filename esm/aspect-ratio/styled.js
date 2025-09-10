import { __makeTemplateObject } from "tslib";
import { styled } from '../utils/style';
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  ", "\n"])), function (_a) {
    var maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, paddingTop = _a.paddingTop;
    return ({ maxHeight: maxHeight, maxWidth: maxWidth, paddingTop: paddingTop });
});
export var StyledDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  ", "\n"])), function (_a) {
    var _b = _a.$width, width = _b === void 0 ? '100%' : _b, _c = _a.$height, height = _c === void 0 ? 'auto' : _c;
    return ({
        width: width,
        height: height,
    });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map