"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeChecker = void 0;
var tslib_1 = require("tslib");
/* istanbul ignore file */
var react_1 = tslib_1.__importStar(require("react"));
var block_1 = require("../block");
var stack_1 = require("../stack");
var text_block_1 = require("../text-block");
var to_kebab_case_1 = require("../utils/to-kebab-case");
var scenarios_1 = require("./scenarios");
var styled_1 = require("./styled");
var stylePresetVariations = ['Banner', 'Inline Message', 'Toast'];
var StylePresetsLoader = function (_a) {
    var name = _a.name, children = _a.children;
    var _b = (0, react_1.useState)([]), stylePresets = _b[0], setStylePresets = _b[1];
    (0, react_1.useEffect)(function () {
        var dynamicallyImport = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var kebabComponentName, stylePreset;
            return tslib_1.__generator(this, function (_a) {
                var _b;
                switch (_a.label) {
                    case 0:
                        kebabComponentName = (0, to_kebab_case_1.toKebabCase)(name);
                        return [4 /*yield*/, (_b = "../".concat(kebabComponentName, "/style-presets"), Promise.resolve().then(function () { return tslib_1.__importStar(require(_b)); }))];
                    case 1:
                        stylePreset = (_a.sent()).default;
                        setStylePresets(Object.keys(stylePreset));
                        return [2 /*return*/];
                }
            });
        }); };
        dynamicallyImport();
    }, [name]);
    return (react_1.default.createElement(stack_1.Stack, { spaceInline: "space100", spaceStack: "space050", wrap: "wrap", flow: "horizontal-top" }, stylePresets.map(function (stylePreset) { return children({ stylePreset: stylePreset }); })));
};
var ThemeCheckerScenario = function (_a) {
    var children = _a.children, name = _a.name;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(block_1.Block, { spaceStack: "space030" },
            react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: "utilityHeading010", stylePreset: "inkContrast" }, name)),
        stylePresetVariations.includes(name) ? (react_1.default.createElement(StylePresetsLoader, { key: "name", name: name }, children)) : (children({}))));
};
var ThemeChecker = function () { return (react_1.default.createElement(react_1.default.Fragment, null, scenarios_1.scenarios.map(function (_a) {
    var name = _a.name, component = _a.component;
    return (react_1.default.createElement(styled_1.StyledWrapper, { key: "".concat(name, "-wrapper") },
        react_1.default.createElement(ThemeCheckerScenario, { key: name, name: name }, component)));
}))); };
exports.ThemeChecker = ThemeChecker;
//# sourceMappingURL=theme-checker.js.map