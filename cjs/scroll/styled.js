"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledScrollSnapAlignment = exports.StyledScrollButtonContainer = exports.StyledScrollContainer = exports.StyledScrollNav = void 0;
var tslib_1 = require("tslib");
var responsive_helpers_1 = require("../utils/responsive-helpers");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var getPseudoStyles = function (props) {
    var vertical = props.vertical;
    var defaultsPath = "scroll.".concat(vertical ? 'vertical' : 'horizontal', ".overlays");
    return (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    z-index: 1;\n    transition: all linear 0.3s;\n    ", "\n    ", "\n    ", "\n  "], ["\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    z-index: 1;\n    transition: all linear 0.3s;\n    ", "\n    ", "\n    ", "\n  "])), (0, style_1.getStylePreset)(defaultsPath, "overlays")(props), (0, style_1.getResponsiveSize)(vertical ? 'height' : 'width', defaultsPath, "overlays", 'size')(props), vertical ? "width: 100%;" : "height: 100%;");
};
exports.StyledScrollNav = style_1.styled.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n\n  ", "\n\n  ", "\n\n  ", "\n\n   ", "\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n\n  ", "\n\n  ", "\n\n  ", "\n\n   ", "\n"])), (0, logical_properties_1.logicalProps)(), function (_a) {
    var controlsVariant = _a.controlsVariant;
    return controlsVariant === 'hover' && (0, style_1.css)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      @keyframes fade-in {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n\n      @keyframes fade-out {\n        from {\n          opacity: 1;\n        }\n        to {\n          opacity: 0;\n        }\n      }\n\n      .nk-scroll-controls {\n        display: none;\n      }\n\n      :hover {\n        .nk-scroll-controls {\n          display: inline-flex;\n          animation: fade-in 1s;\n        }\n      }\n\n      :not(:hover) {\n        .nk-scroll-controls {\n          animation: fade-out 1s;\n        }\n      }\n    "], ["\n      @keyframes fade-in {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n\n      @keyframes fade-out {\n        from {\n          opacity: 1;\n        }\n        to {\n          opacity: 0;\n        }\n      }\n\n      .nk-scroll-controls {\n        display: none;\n      }\n\n      :hover {\n        .nk-scroll-controls {\n          display: inline-flex;\n          animation: fade-in 1s;\n        }\n      }\n\n      :not(:hover) {\n        .nk-scroll-controls {\n          animation: fade-out 1s;\n        }\n      }\n    "])));
}, function (_a) {
    var showStartShadow = _a.showStartShadow, vertical = _a.vertical, rest = tslib_1.__rest(_a, ["showStartShadow", "vertical"]);
    if (!showStartShadow)
        return null;
    return (0, style_1.css)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n      ::before {\n        ", ";\n        top: 0;\n        left: 0;\n      }\n    "], ["\n      ::before {\n        ", ";\n        top: 0;\n        left: 0;\n      }\n    "])), getPseudoStyles(tslib_1.__assign({ vertical: vertical }, rest)));
}, function (_a) {
    var showEndShadow = _a.showEndShadow, vertical = _a.vertical, rest = tslib_1.__rest(_a, ["showEndShadow", "vertical"]);
    if (!showEndShadow)
        return null;
    return (0, style_1.css)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n      ::after {\n        ", ";\n        right: 0;\n        bottom: 0;\n        transform: rotate(180deg);\n      }\n    "], ["\n      ::after {\n        ", ";\n        right: 0;\n        bottom: 0;\n        transform: rotate(180deg);\n      }\n    "])), getPseudoStyles(tslib_1.__assign({ vertical: vertical }, rest)));
});
exports.StyledScrollContainer = style_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  height: 100%;\n\n  overflow-x: auto;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n\n  ", ";\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  height: 100%;\n\n  overflow-x: auto;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n\n  ", ";\n\n  ", "\n"])), function (_a) {
    var vertical = _a.vertical, snapAlign = _a.snapAlign;
    return snapAlign && "scroll-snap-type: ".concat(vertical ? 'y' : 'x', " mandatory;");
}, function (_a) {
    var scrollBar = _a.scrollBar;
    return !scrollBar &&
        "/* Hide scrollbar for Chrome, Safari and Opera */\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  /* Hide scrollbar for IE, Edge and Firefox */\n  & {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }";
});
exports.StyledScrollButtonContainer = style_1.styled.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  display: none;\n\n  ", " {\n    display: inline-flex;\n  }\n\n  position: absolute;\n  z-index: 2;\n\n  ", "}\n"], ["\n  display: none;\n\n  ", " {\n    display: inline-flex;\n  }\n\n  position: absolute;\n  z-index: 2;\n\n  ", "}\n"])), (0, responsive_helpers_1.getMediaQueryFromTheme)('md'), function (_a) {
    var vertical = _a.vertical, position = _a.position, props = tslib_1.__rest(_a, ["vertical", "position"]);
    var cssPosition = '';
    if (vertical && position === 'start') {
        cssPosition = 'top';
    }
    else if (vertical && position === 'end') {
        cssPosition = 'bottom';
    }
    else if (!vertical && position === 'start') {
        cssPosition = 'left';
    }
    else {
        cssPosition = 'right';
    }
    return (0, style_1.css)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n      /* adjusting position ( top/right/left/bottom) based on offset */\n      ", "\n\n      ", "\n    "], ["\n      /* adjusting position ( top/right/left/bottom) based on offset */\n      ", "\n\n      ", "\n    "])), (0, style_1.getResponsiveSpace)(cssPosition, "scroll.".concat(vertical ? 'vertical' : 'horizontal', ".controls"), "controls", 'offset')(props), vertical
        ? "\n        left: 50%;\n        transform: translateX(-50%);\n        svg{\n          transform: rotate(90deg);\n        }\n        "
        : "\n        top: 50%;\n        transform: translateY(-50%);\n        ");
});
exports.StyledScrollSnapAlignment = style_1.styled.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  scroll-snap-align: ", ";\n"], ["\n  scroll-snap-align: ", ";\n"])), function (_a) {
    var snapAlign = _a.snapAlign;
    return snapAlign;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styled.js.map