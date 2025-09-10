"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_focus_visible_1 = require("../utils/default-focus-visible");
var inverse_focus_visible_1 = require("../utils/inverse-focus-visible");
exports.default = {
    linkStandalone: {
        base: {
            color: '{{colors.interactiveLink010}}',
            iconColor: '{{colors.interactiveLink010}}',
            textDecoration: 'none',
        },
        hover: {
            color: '{{colors.interactiveLink020}}',
            iconColor: '{{colors.interactiveLink020}}',
            textDecoration: 'underline',
        },
        active: {
            color: '{{colors.interactiveLink030}}',
            iconColor: '{{colors.interactiveLink030}}',
            textDecoration: 'underline',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    linkStandaloneInverse: {
        base: {
            color: '{{colors.interactiveInverse030}}',
            iconColor: '{{colors.interactiveInverse030}}',
            textDecoration: 'none',
        },
        hover: {
            color: '{{colors.interactiveInverse030}}',
            iconColor: '{{colors.interactiveInverse030}}',
            textDecoration: 'underline',
        },
        active: {
            color: '{{colors.interactiveInverse030}}',
            iconColor: '{{colors.interactiveInverse030}}',
            textDecoration: 'underline',
        },
        'focus-visible': inverse_focus_visible_1.inverseFocusVisible,
    },
    linkInline: {
        base: {
            color: '{{colors.interactiveLink010}}',
            iconColor: '{{colors.interactiveLink010}}',
            textDecoration: 'underline',
        },
        hover: {
            color: '{{colors.interactiveLink020}}',
            iconColor: '{{colors.interactiveLink020}}',
            textDecoration: 'underline',
        },
        active: {
            color: '{{colors.interactiveLink030}}',
            iconColor: '{{colors.interactiveLink030}}',
            textDecoration: 'underline',
        },
        visited: {
            color: '{{colors.interactiveVisited010}}',
            iconColor: '{{colors.interactiveVisited010}}',
            textDecoration: 'underline',
        },
        'visited:hover': {
            color: '{{colors.interactiveVisited010}}',
            iconColor: '{{colors.interactiveVisited010}}',
            textDecoration: 'underline',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    linkInlineInverse: {
        base: {
            color: '{{colors.interactiveInverse030}}',
            iconColor: '{{colors.interactiveInverse030}}',
            textDecoration: 'underline',
        },
        hover: {
            color: '{{colors.interactiveInverse030}}',
            iconColor: '{{colors.interactiveInverse030}}',
            textDecoration: 'underline',
        },
        active: {
            color: '{{colors.interactiveInverse030}}',
            iconColor: '{{colors.interactiveInverse030}}',
            textDecoration: 'underline',
        },
        visited: {
            color: '{{colors.interactiveInverse040}}',
            iconColor: '{{colors.interactiveInverse040}}',
            textDecoration: 'underline',
        },
        'visited:hover': {
            color: '{{colors.interactiveInverse040}}',
            iconColor: '{{colors.interactiveInverse040}}',
        },
        'focus-visible': inverse_focus_visible_1.inverseFocusVisible,
    },
};
//# sourceMappingURL=style-presets.js.map