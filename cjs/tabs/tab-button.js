"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var filter_object_1 = require("../utils/filter-object");
var emotion_1 = require("../theme/emotion");
var styled_1 = require("./styled");
exports.TabButton = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, 
    /* istanbul ignore next */
    _b = _a.overrides, 
    /* istanbul ignore next */
    overrides = _b === void 0 ? {} : _b, 
    /* istanbul ignore next */
    _c = _a.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, ariaLabel = _a.ariaLabel, selected = _a.selected, id = _a.id, 
    /* istanbul ignore next */
    _d = _a.align, 
    /* istanbul ignore next */
    align = _d === void 0 ? 'center' : _d, _e = _a.dataTestId, dataTestId = _e === void 0 ? 'tab' : _e, props = tslib_1.__rest(_a, ["children", "overrides", "size", "ariaLabel", "selected", "id", "align", "dataTestId"]);
    var theme = (0, emotion_1.useTheme)();
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        typeof theme.componentDefaults.tab !== 'object') {
        // eslint-disable-next-line no-console
        console.error('<Tab /> component needs to be used as child of <Tabs />');
        return null;
    }
    var tabSettings = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.tab[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    return (react_1.default.createElement(styled_1.StyledTabButton, tslib_1.__assign({ "data-testid": dataTestId, role: "tab", "aria-label": ariaLabel, ref: ref, "aria-selected": Boolean(selected), "aria-controls": id, id: id, tabIndex: selected ? 0 : -1, selected: selected }, props, { overrides: tabSettings, align: align }), children));
});
exports.TabButton.displayName = 'TabButton';
//# sourceMappingURL=tab-button.js.map