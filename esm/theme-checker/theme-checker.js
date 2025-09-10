import { __awaiter, __generator } from "tslib";
/* istanbul ignore file */
import React, { useEffect, useState } from 'react';
import { Block } from '../block';
import { Stack } from '../stack';
import { TextBlock } from '../text-block';
import { toKebabCase } from '../utils/to-kebab-case';
import { scenarios } from './scenarios';
import { StyledWrapper } from './styled';
var stylePresetVariations = ['Banner', 'Inline Message', 'Toast'];
var StylePresetsLoader = function (_a) {
    var name = _a.name, children = _a.children;
    var _b = useState([]), stylePresets = _b[0], setStylePresets = _b[1];
    useEffect(function () {
        var dynamicallyImport = function () { return __awaiter(void 0, void 0, void 0, function () {
            var kebabComponentName, stylePreset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        kebabComponentName = toKebabCase(name);
                        return [4 /*yield*/, import("../".concat(kebabComponentName, "/style-presets"))];
                    case 1:
                        stylePreset = (_a.sent()).default;
                        setStylePresets(Object.keys(stylePreset));
                        return [2 /*return*/];
                }
            });
        }); };
        dynamicallyImport();
    }, [name]);
    return (React.createElement(Stack, { spaceInline: "space100", spaceStack: "space050", wrap: "wrap", flow: "horizontal-top" }, stylePresets.map(function (stylePreset) { return children({ stylePreset: stylePreset }); })));
};
var ThemeCheckerScenario = function (_a) {
    var children = _a.children, name = _a.name;
    return (React.createElement(React.Fragment, null,
        React.createElement(Block, { spaceStack: "space030" },
            React.createElement(TextBlock, { typographyPreset: "utilityHeading010", stylePreset: "inkContrast" }, name)),
        stylePresetVariations.includes(name) ? (React.createElement(StylePresetsLoader, { key: "name", name: name }, children)) : (children({}))));
};
export var ThemeChecker = function () { return (React.createElement(React.Fragment, null, scenarios.map(function (_a) {
    var name = _a.name, component = _a.component;
    return (React.createElement(StyledWrapper, { key: "".concat(name, "-wrapper") },
        React.createElement(ThemeCheckerScenario, { key: name, name: name }, component)));
}))); };
//# sourceMappingURL=theme-checker.js.map