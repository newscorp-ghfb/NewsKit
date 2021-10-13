import {TransitionPreset} from './types';

export const transitionPresets: Record<string, TransitionPreset> = {};

// Uncomment lines in PPDSC-1810
// transitionPresets.fontColorChange = {
//   base: {
//     transitionProperty: 'color',
//     transitionDuration: '{{motions.motionDuration020}}',
//     transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
//   },
// };

// transitionPresets.backgroundColorChange = {
//   base: {
//     transitionProperty: 'background-color',
//     transitionDuration: '{{motions.motionDuration020}}',
//     transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
//   },
// };

transitionPresets.fade = {
  base: {
    opacity: '0',
  },
  enter: {
    opacity: '0',
  },
  enterActive: {
    opacity: '1',
    transitionProperty: 'opacity',
    transitionDuration: '{{motions.motionDuration020}}',
  },
  enterDone: {
    opacity: '1',
  },
  exit: {
    opacity: '1',
  },
  exitActive: {
    opacity: '0',
    transitionProperty: 'opacity',
    transitionDuration: '{{motions.motionDuration020}}',
  },
  exitDone: {
    opacity: '0',
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
    transform: `translate(-50%, 20px)`,
  },
  enterActive: {
    transform: `translate(-50%, 0)`,
    opacity: '1',
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
  },
  enterDone: {
    transform: `translate(-50%, 0)`,
  },
  exit: {
    transform: `translate(-50%, 0)`,
  },
  exitActive: {
    transform: `translate(-50%, 20px)`,
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
  exitDone: {
    transform: `translate(-50%, 20px)`,
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
