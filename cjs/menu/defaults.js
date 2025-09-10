"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var smallCommonDefaults = {
    spaceInline: 'space020',
    minHeight: 'sizing070',
    paddingBlock: 'space020',
    paddingInline: 'space040',
};
var mediumCommonDefaults = {
    spaceInline: 'space020',
    minHeight: 'sizing080',
    paddingBlock: 'space020',
    paddingInline: 'space040',
};
var largeCommonDefaults = {
    spaceInline: 'space020',
    minHeight: 'sizing090',
    paddingBlock: 'space030',
    paddingInline: 'space050',
};
exports.default = {
    menu: {
        spaceInline: 'space020',
    },
    menuGroup: {
        spaceInline: 'space050',
        title: {
            typographyPreset: 'utilityHeading030',
            stylePreset: 'inkSubtle',
            transitionPreset: 'backgroundColorChange',
            spaceInline: 'space050',
        },
    },
    menuItem: {
        horizontal: {
            small: tslib_1.__assign(tslib_1.__assign({}, smallCommonDefaults), { stylePreset: 'menuItemHorizontal', transitionPreset: 'backgroundColorChange' }),
            medium: tslib_1.__assign(tslib_1.__assign({}, mediumCommonDefaults), { stylePreset: 'menuItemHorizontal', transitionPreset: 'backgroundColorChange' }),
            large: tslib_1.__assign(tslib_1.__assign({}, largeCommonDefaults), { stylePreset: 'menuItemHorizontal', transitionPreset: 'backgroundColorChange' }),
        },
        vertical: {
            small: tslib_1.__assign(tslib_1.__assign({}, smallCommonDefaults), { stylePreset: 'menuItemVertical', transitionPreset: 'backgroundColorChange' }),
            medium: tslib_1.__assign(tslib_1.__assign({}, mediumCommonDefaults), { stylePreset: 'menuItemVertical', transitionPreset: 'backgroundColorChange' }),
            large: tslib_1.__assign(tslib_1.__assign({}, largeCommonDefaults), { stylePreset: 'menuItemVertical', transitionPreset: 'backgroundColorChange' }),
        },
    },
    menuSubItem: {
        horizontal: {
            small: tslib_1.__assign(tslib_1.__assign({}, smallCommonDefaults), { stylePreset: 'menuSubItemHorizontal', list: {
                    stylePreset: 'menuSub',
                } }),
            medium: tslib_1.__assign(tslib_1.__assign({}, mediumCommonDefaults), { stylePreset: 'menuSubItemHorizontal', list: {
                    stylePreset: 'menuSub',
                } }),
            large: tslib_1.__assign(tslib_1.__assign({}, largeCommonDefaults), { stylePreset: 'menuSubItemHorizontal', list: {
                    stylePreset: 'menuSub',
                } }),
        },
        vertical: {
            small: tslib_1.__assign(tslib_1.__assign({}, smallCommonDefaults), { stylePreset: 'menuSubItemVertical', list: {
                    stylePreset: 'menuSub',
                } }),
            medium: tslib_1.__assign(tslib_1.__assign({}, mediumCommonDefaults), { stylePreset: 'menuSubItemVertical', list: {
                    stylePreset: 'menuSub',
                } }),
            large: tslib_1.__assign(tslib_1.__assign({}, largeCommonDefaults), { stylePreset: 'menuSubItemVertical', list: {
                    stylePreset: 'menuSub',
                } }),
        },
    },
};
//# sourceMappingURL=defaults.js.map