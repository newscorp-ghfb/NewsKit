import {TransitionPreset} from './types';

export const transitionPresets: Record<string, TransitionPreset> = {};

transitionPresets.fontColorChange = {
  base: {
    transitionProperty: 'color',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};

transitionPresets.iconColorChange = {
  base: {
    transitionProperty: 'fill',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};

transitionPresets.backgroundColorChange = {
  base: {
    transitionProperty: 'background-color',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};

transitionPresets.borderColorChange = {
  base: {
    transitionProperty: 'border-color',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};

transitionPresets.opacityChange = {
  base: {
    transitionProperty: 'opacity',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};

transitionPresets.fade = {
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

transitionPresets.slideLeft = {
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
transitionPresets.widthChange = {
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

transitionPresets.slideRight = {
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

transitionPresets.slideTop = {
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

transitionPresets.slideBottom = {
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

transitionPresets.moveUp = {
  base: {},
  appear: {},
  appearActive: {},
  appearDone: {},
  enter: {
    transform: `translate(0, 20px)`,
  },
  enterActive: {
    transform: `translate(0, 0)`,
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
  },
  enterDone: {
    transform: `translate(0, 0)`,
  },
  exit: {
    transform: `translate(0, 0)`,
  },
  exitActive: {
    transform: `translate(0, 20px)`,
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
  exitDone: {
    transform: `translate(0, 20px)`,
  },
};

transitionPresets.grow = {
  base: {},
  enter: {
    transform: `scale(0.5)`,
  },
  enterActive: {
    transform: `scale(1)`,
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
  },
  enterDone: {
    transform: `scale(1)`,
  },
  exit: {
    transform: `scale(1)`,
  },
  exitActive: {
    transform: `scale(0.5)`,
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
  },
  exitDone: {
    transform: `scale(0.5)`,
  },
};

transitionPresets.growOnClick = {
  base: {
    transform: `scale(1.7)`,
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
  },
};

transitionPresets.shiftAbsolute = {
  base: {
    transitionProperty: 'inset',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
  },
};
