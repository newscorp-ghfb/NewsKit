"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_focus_visible_1 = require("../utils/default-focus-visible");
exports.default = {
    headlineHeadingInteractive: {
        base: {
            color: '{{colors.inkContrast}}',
        },
        hover: {
            color: '{{colors.interactivePrimary040}}',
            textDecoration: 'underline',
        },
        active: {
            color: '{{colors.interactivePrimary050}}',
            textDecoration: 'underline',
        },
        visited: {
            color: '{{colors.interactiveVisited010}}',
        },
    },
    headlineKickerInteractive: {
        base: {
            color: '{{colors.interactivePrimary030}}',
        },
        hover: {
            color: '{{colors.interactivePrimary040}}',
            textDecoration: 'underline',
        },
        active: {
            color: '{{colors.interactivePrimary050}}',
            textDecoration: 'underline',
        },
        visited: {
            color: '{{colors.interactiveVisited010}}',
        },
    },
    headlineHeadingLink: {
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
};
//# sourceMappingURL=style-presets.js.map