"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var format_1 = tslib_1.__importDefault(require("date-fns/format"));
var style_1 = require("../utils/style");
var text_block_1 = require("../text-block");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var StyledDateText = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  white-space: pre;\n  &:before,\n  &:after {\n    white-space: normal;\n  }\n"], ["\n  white-space: pre;\n  &:before,\n  &:after {\n    white-space: normal;\n  }\n"])));
var StyledWrapper = style_1.styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), (0, logical_properties_1.logicalProps)('dateTime'));
var StyledPrefix = StyledDateText;
var StyledSuffix = StyledDateText;
var defaultDateFormat = "MMMM d yyyy, h:mmaaaaa'm'";
var defaultDateFormatAttr = 'yyyy-MM-dd hh:mm:ssx';
var ThemelessDateTime = React.forwardRef(function (_a, ref) {
    var children = _a.children, dateProp = _a.date, _b = _a.dateFormat, dateFormat = _b === void 0 ? defaultDateFormat : _b, prefix = _a.prefix, suffix = _a.suffix, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, rest = tslib_1.__rest(_a, ["children", "date", "dateFormat", "prefix", "suffix", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    var getPresets = function (path) { return ({
        typographyPreset: (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "dateTime.".concat(path), "".concat(path), 'typographyPreset'),
        stylePreset: (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "dateTime.".concat(path), "".concat(path), 'stylePreset'),
    }); };
    var prefixPresets = getPresets('prefix');
    var datePresets = getPresets('');
    var suffixPresets = getPresets('suffix');
    var logicalPropsOverrides = (0, logical_properties_1.extractLogicalPropsFromOverrides)(overrides);
    var date = new Date(dateProp);
    var dateTimeAttr = (0, format_1.default)(date, defaultDateFormatAttr);
    return (React.createElement(StyledWrapper, tslib_1.__assign({}, logicalPropsOverrides, { ref: ref }, rest),
        prefix && (React.createElement(StyledPrefix, tslib_1.__assign({ as: "span" }, prefixPresets), "".concat(prefix, " "))),
        React.createElement(StyledDateText
        // @ts-ignore allow to render as time element only for this case
        , tslib_1.__assign({ 
            // @ts-ignore allow to render as time element only for this case
            as: "time", dateTime: dateTimeAttr }, datePresets),
            children || (0, format_1.default)(date, dateFormat),
            suffix ? ", " : " "),
        suffix && (React.createElement(StyledSuffix, tslib_1.__assign({ as: "span" }, suffixPresets), suffix))));
});
exports.DateTime = (0, with_own_theme_1.withOwnTheme)(ThemelessDateTime)({
    defaults: defaults_1.default,
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=date-time.js.map