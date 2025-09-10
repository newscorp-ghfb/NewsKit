import { __assign } from "tslib";
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
export default {
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
            small: __assign(__assign({}, smallCommonDefaults), { stylePreset: 'menuItemHorizontal', transitionPreset: 'backgroundColorChange' }),
            medium: __assign(__assign({}, mediumCommonDefaults), { stylePreset: 'menuItemHorizontal', transitionPreset: 'backgroundColorChange' }),
            large: __assign(__assign({}, largeCommonDefaults), { stylePreset: 'menuItemHorizontal', transitionPreset: 'backgroundColorChange' }),
        },
        vertical: {
            small: __assign(__assign({}, smallCommonDefaults), { stylePreset: 'menuItemVertical', transitionPreset: 'backgroundColorChange' }),
            medium: __assign(__assign({}, mediumCommonDefaults), { stylePreset: 'menuItemVertical', transitionPreset: 'backgroundColorChange' }),
            large: __assign(__assign({}, largeCommonDefaults), { stylePreset: 'menuItemVertical', transitionPreset: 'backgroundColorChange' }),
        },
    },
    menuSubItem: {
        horizontal: {
            small: __assign(__assign({}, smallCommonDefaults), { stylePreset: 'menuSubItemHorizontal', list: {
                    stylePreset: 'menuSub',
                } }),
            medium: __assign(__assign({}, mediumCommonDefaults), { stylePreset: 'menuSubItemHorizontal', list: {
                    stylePreset: 'menuSub',
                } }),
            large: __assign(__assign({}, largeCommonDefaults), { stylePreset: 'menuSubItemHorizontal', list: {
                    stylePreset: 'menuSub',
                } }),
        },
        vertical: {
            small: __assign(__assign({}, smallCommonDefaults), { stylePreset: 'menuSubItemVertical', list: {
                    stylePreset: 'menuSub',
                } }),
            medium: __assign(__assign({}, mediumCommonDefaults), { stylePreset: 'menuSubItemVertical', list: {
                    stylePreset: 'menuSub',
                } }),
            large: __assign(__assign({}, largeCommonDefaults), { stylePreset: 'menuSubItemVertical', list: {
                    stylePreset: 'menuSub',
                } }),
        },
    },
};
//# sourceMappingURL=defaults.js.map