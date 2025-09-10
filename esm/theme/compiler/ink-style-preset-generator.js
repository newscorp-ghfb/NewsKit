import { __assign } from "tslib";
export var generateInkStylePresets = function (theme) {
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
                    base: __assign(__assign({}, acc[color].base), { textTransform: 'uppercase' }),
                };
            }
            return acc;
        }, {});
};
//# sourceMappingURL=ink-style-preset-generator.js.map