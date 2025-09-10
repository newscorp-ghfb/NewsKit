"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_focus_visible_1 = require("../utils/default-focus-visible");
exports.default = {
    breadcrumbItem: {
        base: {
            color: '{{colors.interactiveLink010}}',
        },
        hover: {
            color: '{{colors.interactiveLink020}}',
            textDecoration: 'underline',
        },
        selected: {
            color: '{{colors.inkBase}}',
            textDecoration: 'none',
        },
        'selected:hover': {
            color: '{{colors.inkBase}}',
            textDecoration: 'none',
        },
        active: {
            color: '{{colors.interactiveLink030}}',
            textDecoration: 'underline',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    breadcrumbSeparator: {
        base: { color: '{{colors.inkSubtle}}' },
    },
};
//# sourceMappingURL=style-presets.js.map