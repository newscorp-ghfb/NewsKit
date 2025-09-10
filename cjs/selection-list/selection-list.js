"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionList = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var hooks_1 = require("../utils/hooks");
var utils_1 = require("./utils");
var styled_1 = require("./styled");
var screen_reader_only_1 = require("../screen-reader-only");
var ThemelessSelectionList = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, restProps = tslib_1.__rest(_a, ["children", "overrides"]);
    var listDescriptionId = (0, hooks_1.useReactKeys)(1)[0];
    var selectionListRef = (0, react_1.useRef)(null);
    (0, hooks_1.useKeypress)('ArrowDown', function () { return (0, utils_1.handleArrowDown)(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    (0, hooks_1.useKeypress)('ArrowUp', function () { return (0, utils_1.handleArrowUp)(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    (0, hooks_1.useKeypress)('Home', function () { return (0, utils_1.handleHome)(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    (0, hooks_1.useKeypress)('End', function () { return (0, utils_1.handleEnd)(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    var screenReaderOnlyMessage = (react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: listDescriptionId }, "Press down arrow key to navigate to the first item"));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        screenReaderOnlyMessage,
        react_1.default.createElement(styled_1.StyledSelectionList, tslib_1.__assign({ ref: (0, compose_react_refs_1.default)(selectionListRef, ref), role: "menu", "aria-describedby": listDescriptionId, overrides: overrides }, restProps), children)));
});
ThemelessSelectionList.displayName = 'SelectionList';
exports.SelectionList = (0, with_own_theme_1.withOwnTheme)(ThemelessSelectionList)({ defaults: defaults_1.default });
//# sourceMappingURL=selection-list.js.map