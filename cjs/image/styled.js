"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIconContainer = exports.StyledLoadingContainer = exports.StyledImage = exports.StyledPicture = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var utils_1 = require("./utils");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledPicture = style_1.styled.picture(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  display: block;\n\n  ", "\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  display: block;\n\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var isLoading = _a.isLoading, props = tslib_1.__rest(_a, ["isLoading"]);
    return (0, utils_1.getResponsiveAspectRatioFromProps)(props, function (_a) {
        var paddingTop = _a.paddingTop, width = _a.width, height = _a.height;
        if (!isLoading) {
            return { paddingTop: 0, height: 'auto', width: width };
        }
        return parseInt(height, 10)
            ? { width: width, height: height }
            : { paddingTop: paddingTop, height: 0, width: width };
    });
}, function (_a) {
    var isLoading = _a.isLoading, props = tslib_1.__rest(_a, ["isLoading"]);
    return (0, style_1.getStylePreset)('image', '', { isLoading: isLoading })(props);
}, (0, logical_properties_1.logicalProps)());
exports.StyledImage = style_1.styled.img(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  opacity: ", ";\n  display: block;\n  border-radius: inherit;\n\n  ", "\n  ", "  \n  ", "\n  \n  ", "\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"], ["\n  opacity: ", ";\n  display: block;\n  border-radius: inherit;\n\n  ", "\n  ", "  \n  ", "\n  \n  ", "\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])), function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? '0' : '1');
}, (0, style_1.getResponsiveSize)('maxWidth', 'image', 'maxWidth', ''), (0, style_1.getResponsiveSize)('maxHeight', 'image', 'maxHeight', ''), function (props) {
    return (0, utils_1.getResponsiveAspectRatioFromProps)(props, function (_a) {
        var height = _a.height, width = _a.width;
        return ({
            height: height,
            width: width,
        });
    });
}, function (_a) {
    var objectFit = _a.fit, objectPosition = _a.position, isLoading = _a.isLoading;
    return ({
        objectFit: objectFit,
        objectPosition: objectPosition,
        top: isLoading ? 0 : undefined,
        left: isLoading ? 0 : undefined,
        position: isLoading ? 'absolute' : undefined,
        animation: !isLoading ? 'fadeIn 300ms' : undefined,
    });
});
exports.StyledLoadingContainer = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  top: 0;\n  left: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n"], ["\n  top: 0;\n  left: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n"])));
exports.StyledIconContainer = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map