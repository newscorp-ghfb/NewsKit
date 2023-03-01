const smallCommonDefaults = {
  spaceInline: 'space020',
  minHeight: 'sizing070',
  paddingBlock: 'space020',
  paddingInline: 'space040',
};

const mediumCommonDefaults = {
  spaceInline: 'space020',
  minHeight: 'sizing080',
  paddingBlock: 'space020',
  paddingInline: 'space040',
};

const largeCommonDefaults = {
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
      small: {
        ...smallCommonDefaults,
        stylePreset: 'menuItemHorizontal',
        transitionPreset: 'backgroundColorChange',
      },
      medium: {
        ...mediumCommonDefaults,
        stylePreset: 'menuItemHorizontal',
        transitionPreset: 'backgroundColorChange',
      },
      large: {
        ...largeCommonDefaults,
        stylePreset: 'menuItemHorizontal',
        transitionPreset: 'backgroundColorChange',
      },
    },
    vertical: {
      small: {
        ...smallCommonDefaults,
        stylePreset: 'menuItemVertical',
        transitionPreset: 'backgroundColorChange',
      },
      medium: {
        ...mediumCommonDefaults,
        stylePreset: 'menuItemVertical',
        transitionPreset: 'backgroundColorChange',
      },
      large: {
        ...largeCommonDefaults,
        stylePreset: 'menuItemVertical',
        transitionPreset: 'backgroundColorChange',
      },
    },
  },
  menuSubItem: {
    horizontal: {
      small: {
        ...smallCommonDefaults,
        stylePreset: 'menuSubItemHorizontal',
        list: {
          stylePreset: 'menuSub',
        },
      },
      medium: {
        ...mediumCommonDefaults,
        stylePreset: 'menuSubItemHorizontal',
        list: {
          stylePreset: 'menuSub',
        },
      },
      large: {
        ...largeCommonDefaults,
        stylePreset: 'menuSubItemHorizontal',
        list: {
          stylePreset: 'menuSub',
        },
      },
    },
    vertical: {
      small: {
        ...smallCommonDefaults,
        stylePreset: 'menuSubItemVertical',
        list: {
          stylePreset: 'menuSub',
        },
      },
      medium: {
        ...mediumCommonDefaults,
        stylePreset: 'menuSubItemVertical',
        list: {
          stylePreset: 'menuSub',
        },
      },
      large: {
        ...largeCommonDefaults,
        stylePreset: 'menuSubItemVertical',
        list: {
          stylePreset: 'menuSub',
        },
      },
    },
  },
};
