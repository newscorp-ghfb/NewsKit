"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInkStylePresets = void 0;
var tslib_1 = require("tslib");
var generateInkStylePresets = function (theme) {
    return theme.colors &&
        Object.keys(theme.colors).reduce(function (acc, color) {
            if (color.startsWith('ink')) {
                acc[color] = {
                    base: {
                        color: "{{colors.".concat(color, "}}"),
                        iconColor: "{{colors.".concat(color, "}}"),
                    },
                };
                acc["uppercaseI".concat(color.slice(1))] = {
                    base: tslib_1.__assign(tslib_1.__assign({}, acc[color].base), { textTransform: 'uppercase' }),
                };
            }
            return acc;
        }, {});
};
exports.generateInkStylePresets = generateInkStylePresets;
//# sourceMappingURL=ink-style-preset-generator.js.map