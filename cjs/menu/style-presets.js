"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var default_focus_visible_1 = require("../utils/default-focus-visible");
var inverse_focus_visible_1 = require("../utils/inverse-focus-visible");
exports.default = {
    menuItemVertical: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.transparent}}',
            borderWidth: '{{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
            color: '{{colors.inkSubtle}}',
            iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
            backgroundColor: '{{colors.interactivePrimary010}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        active: {
            backgroundColor: '{{colors.interactivePrimary020}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        selected: {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        'selected:hover': {
            backgroundColor: '{{colors.transparent}}',
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        disabled: {
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { outlineOffset: '-{{outlines.outlineOffsetDefault}}' }),
    },
    menuItemHorizontal: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.transparent}}',
            borderWidth: '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
            color: '{{colors.inkSubtle}}',
            iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        active: {
            borderColor: '{{colors.interactivePrimary040}}',
            color: '{{colors.inkContrast}}',
            iconColor: '{{colors.inkContrast}}',
        },
        selected: {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        'selected:hover': {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        disabled: {
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { outlineOffset: '-{{outlines.outlineOffsetDefault}}' }),
    },
    menuItemHorizontalInverse: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.transparent}}',
            borderWidth: '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
        },
        hover: {
            borderColor: '{{colors.interactiveInverse030}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
        },
        'selected:hover': {
            borderColor: '{{colors.interactiveInverse030}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
        },
        active: {
            borderColor: '{{colors.interactiveInverse030}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
        },
        selected: {
            borderColor: '{{colors.interactiveInverse030}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
        },
        disabled: {
            color: '{{colors.interactiveInverse020}}',
            iconColor: '{{colors.interactiveInverse020}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, inverse_focus_visible_1.inverseFocusVisible), { outlineOffset: '-{{outlines.outlineOffsetDefault}}' }),
    },
    menuSubItemVertical: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.transparent}}',
            borderWidth: '{{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
            color: '{{colors.inkSubtle}}',
            iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
            backgroundColor: '{{colors.interactivePrimary010}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        active: {
            backgroundColor: '{{colors.interactivePrimary020}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        selected: {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        'selected:hover': {
            backgroundColor: '{{colors.transparent}}',
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        disabled: {
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { outlineOffset: '-{{outlines.outlineOffsetDefault}}' }),
    },
    menuSubItemHorizontal: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.transparent}}',
            borderWidth: '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
            color: '{{colors.inkSubtle}}',
            iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        active: {
            borderColor: '{{colors.interactivePrimary040}}',
            color: '{{colors.inkContrast}}',
            iconColor: '{{colors.inkContrast}}',
        },
        selected: {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        'selected:hover': {
            borderColor: '{{colors.interactivePrimary030}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        disabled: {
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { outlineOffset: '-{{outlines.outlineOffsetDefault}}' }),
    },
    menuSub: {
        base: {
            backgroundColor: '{{colors.interface020}}',
        },
    },
};
//# sourceMappingURL=style-presets.js.map