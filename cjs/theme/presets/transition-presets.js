"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitionPresets = void 0;
exports.transitionPresets = {};
exports.transitionPresets.fontColorChange = {
    base: {
        transitionProperty: 'color',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
};
exports.transitionPresets.iconColorChange = {
    base: {
        transitionProperty: 'fill',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
};
exports.transitionPresets.backgroundColorChange = {
    base: {
        transitionProperty: 'background-color',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
};
exports.transitionPresets.borderColorChange = {
    base: {
        transitionProperty: 'border-color',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
};
exports.transitionPresets.opacityChange = {
    base: {
        transitionProperty: 'opacity',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
};
exports.transitionPresets.maxHeightChange = {
    base: {
        transitionProperty: 'max-height',
    },
    enter: {
        maxHeight: '0',
    },
    enterActive: {
        maxHeight: 'unset',
        transitionProperty: 'max-height',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    enterDone: {
        maxHeight: 'unset',
    },
    exit: {
        maxHeight: 'unset',
    },
    exitActive: {
        maxHeight: '0',
        transitionProperty: 'max-height',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    exitDone: {
        maxHeight: '0',
    },
};
exports.transitionPresets.fade = {
    base: {
        opacity: '{{overlays.opacity000}}',
    },
    enter: {
        opacity: '{{overlays.opacity000}}',
    },
    enterActive: {
        opacity: '{{overlays.opacity100}}',
        transitionProperty: 'opacity',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    enterDone: {
        opacity: '{{overlays.opacity100}}',
    },
    exit: {
        opacity: '{{overlays.opacity100}}',
    },
    exitActive: {
        opacity: '{{overlays.opacity000}}',
        transitionProperty: 'opacity',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    exitDone: {
        opacity: '{{overlays.opacity000}}',
    },
};
exports.transitionPresets.slideLeft = {
    base: {
        transform: 'translateX(-100%)',
    },
    appear: {},
    appearActive: {},
    appearDone: {},
    enter: {
        transform: 'translateX(-100%)',
    },
    enterActive: {
        transform: 'translateX(0)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
    },
    enterDone: {
        transform: 'translateX(0)',
    },
    exit: {
        transform: 'translateX(0)',
    },
    exitActive: {
        transform: 'translateX(-100%)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
    exitDone: {
        transform: 'translateX(-100%)',
    },
};
exports.transitionPresets.widthChange = {
    base: {
        transitionProperty: 'width',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
    enter: {
        transitionProperty: 'width',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    enterActive: {
        transitionProperty: 'width',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    enterDone: {},
    exit: {},
    exitActive: {
        transitionProperty: 'width',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    exitDone: {},
};
exports.transitionPresets.slideRight = {
    base: {
        transform: 'translateX(100%)',
    },
    appear: {},
    appearActive: {},
    appearDone: {},
    enter: {
        transform: 'translateX(100%)',
    },
    enterActive: {
        transform: 'translateX(0)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
    },
    enterDone: {
        transform: 'translateX(0)',
    },
    exit: {
        transform: 'translateX(0)',
    },
    exitActive: {
        transform: 'translateX(100%)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
    exitDone: {
        transform: 'translateX(100%)',
    },
};
exports.transitionPresets.slideTop = {
    base: {
        transform: 'translateY(-100%)',
    },
    appear: {},
    appearActive: {},
    appearDone: {},
    enter: {
        transform: 'translateY(-100%)',
    },
    enterActive: {
        transform: 'translateY(0)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
    },
    enterDone: {
        transform: 'translateY(0)',
    },
    exit: {
        transform: 'translateY(0)',
    },
    exitActive: {
        transform: 'translateY(-100%)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingLinear}}',
    },
    exitDone: {
        transform: 'translateY(-100%)',
    },
};
exports.transitionPresets.slideBottom = {
    base: {
        transform: 'translateY(100%)',
    },
    appear: {},
    appearActive: {},
    appearDone: {},
    enter: {
        transform: 'translateY(100%)',
    },
    enterActive: {
        transform: 'translateY(0)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
    },
    enterDone: {
        transform: 'translateY(0)',
    },
    exit: {
        transform: 'translateY(0)',
    },
    exitActive: {
        transform: 'translateY(100%)',
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
    exitDone: {
        transform: 'translateY(100%)',
    },
};
exports.transitionPresets.moveUp = {
    base: {},
    appear: {},
    appearActive: {},
    appearDone: {},
    enter: {
        transform: "translate(0, 20px)",
    },
    enterActive: {
        transform: "translate(0, 0)",
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
    },
    enterDone: {
        transform: "translate(0, 0)",
    },
    exit: {
        transform: "translate(0, 0)",
    },
    exitActive: {
        transform: "translate(0, 20px)",
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
    },
    exitDone: {
        transform: "translate(0, 20px)",
    },
};
exports.transitionPresets.grow = {
    base: {},
    enter: {
        transform: "scale(0.5)",
    },
    enterActive: {
        transform: "scale(1)",
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    enterDone: {
        transform: "scale(1)",
    },
    exit: {
        transform: "scale(1)",
    },
    exitActive: {
        transform: "scale(0.5)",
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
    },
    exitDone: {
        transform: "scale(0.5)",
    },
};
exports.transitionPresets.growOnClick = {
    base: {
        transform: "scale(1.7)",
        transitionProperty: 'transform',
        transitionDuration: '{{motions.motionDuration020}}',
    },
};
exports.transitionPresets.shiftAbsolute = {
    base: {
        transitionProperty: 'inset',
        transitionDuration: '{{motions.motionDuration020}}',
        transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
    },
};
//# sourceMappingURL=transition-presets.js.map