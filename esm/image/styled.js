import { __makeTemplateObject, __rest } from "tslib";
import { getResponsiveSize, getStylePreset, styled } from '../utils/style';
import { getResponsiveAspectRatioFromProps } from './utils';
import { logicalProps } from '../utils/logical-properties';
export var StyledPicture = styled.picture(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  display: block;\n\n  ", "\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  display: block;\n\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var isLoading = _a.isLoading, props = __rest(_a, ["isLoading"]);
    return getResponsiveAspectRatioFromProps(props, function (_a) {
        var paddingTop = _a.paddingTop, width = _a.width, height = _a.height;
        if (!isLoading) {
            return { paddingTop: 0, height: 'auto', width: width };
        }
        return parseInt(height, 10)
            ? { width: width, height: height }
            : { paddingTop: paddingTop, height: 0, width: width };
    });
}, function (_a) {
    var isLoading = _a.isLoading, props = __rest(_a, ["isLoading"]);
    return getStylePreset('image', '', { isLoading: isLoading })(props);
}, logicalProps());
export var StyledImage = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: ", ";\n  display: block;\n  border-radius: inherit;\n\n  ", "\n  ", "  \n  ", "\n  \n  ", "\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"], ["\n  opacity: ", ";\n  display: block;\n  border-radius: inherit;\n\n  ", "\n  ", "  \n  ", "\n  \n  ", "\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])), function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? '0' : '1');
}, getResponsiveSize('maxWidth', 'image', 'maxWidth', ''), getResponsiveSize('maxHeight', 'image', 'maxHeight', ''), function (props) {
    return getResponsiveAspectRatioFromProps(props, function (_a) {
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
export var StyledLoadingContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: 0;\n  left: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n"], ["\n  top: 0;\n  left: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n"])));
export var StyledIconContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map