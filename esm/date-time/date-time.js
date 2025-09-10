import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import format from 'date-fns/format';
import { styled } from '../utils/style';
import { TextBlock } from '../text-block';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { extractLogicalPropsFromOverrides, logicalProps, } from '../utils/logical-properties';
var StyledDateText = styled(TextBlock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: pre;\n  &:before,\n  &:after {\n    white-space: normal;\n  }\n"], ["\n  white-space: pre;\n  &:before,\n  &:after {\n    white-space: normal;\n  }\n"])));
var StyledWrapper = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), logicalProps('dateTime'));
var StyledPrefix = StyledDateText;
var StyledSuffix = StyledDateText;
var defaultDateFormat = "MMMM d yyyy, h:mmaaaaa'm'";
var defaultDateFormatAttr = 'yyyy-MM-dd hh:mm:ssx';
var ThemelessDateTime = React.forwardRef(function (_a, ref) {
    var children = _a.children, dateProp = _a.date, _b = _a.dateFormat, dateFormat = _b === void 0 ? defaultDateFormat : _b, prefix = _a.prefix, suffix = _a.suffix, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, rest = __rest(_a, ["children", "date", "dateFormat", "prefix", "suffix", "overrides"]);
    var theme = useTheme();
    var getPresets = function (path) { return ({
        typographyPreset: getToken({ theme: theme, overrides: overrides }, "dateTime.".concat(path), "".concat(path), 'typographyPreset'),
        stylePreset: getToken({ theme: theme, overrides: overrides }, "dateTime.".concat(path), "".concat(path), 'stylePreset'),
    }); };
    var prefixPresets = getPresets('prefix');
    var datePresets = getPresets('');
    var suffixPresets = getPresets('suffix');
    var logicalPropsOverrides = extractLogicalPropsFromOverrides(overrides);
    var date = new Date(dateProp);
    var dateTimeAttr = format(date, defaultDateFormatAttr);
    return (React.createElement(StyledWrapper, __assign({}, logicalPropsOverrides, { ref: ref }, rest),
        prefix && (React.createElement(StyledPrefix, __assign({ as: "span" }, prefixPresets), "".concat(prefix, " "))),
        React.createElement(StyledDateText
        // @ts-ignore allow to render as time element only for this case
        , __assign({ 
            // @ts-ignore allow to render as time element only for this case
            as: "time", dateTime: dateTimeAttr }, datePresets),
            children || format(date, dateFormat),
            suffix ? ", " : " "),
        suffix && (React.createElement(StyledSuffix, __assign({ as: "span" }, suffixPresets), suffix))));
});
export var DateTime = withOwnTheme(ThemelessDateTime)({
    defaults: defaults,
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=date-time.js.map