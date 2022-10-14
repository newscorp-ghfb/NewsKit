import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookSpan,
} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {IconFilledAddCircleOutline, IconFilledClose} from '../../icons';
import {Menu, MenuItem, MenuSub, MenuGroup, MenuDivider} from '..';
import {styled, getColorCssFromTheme} from '../../utils';
import {getSSRId} from '../../utils/get-ssr-id';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {Popover} from '../../popover';
import {useMediaQueryObject} from '../../utils/hooks';

// eslint-disable-next-line no-script-url
const href = 'javascript:;';

const menuCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-menu-theme',
  overrides: {
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '400ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customFontColourChange: {
        base: {
          transitionProperty: 'color',
          transitionDuration: '400ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
    stylePresets: {
      menuItemCustom: {
        base: {
          backgroundColor: '#ffe66b',
          borderStyle: 'solid',
          borderColor: '#222222',
          borderWidth: '8px 0px 0px 0px',
          color: '#222222',
          iconColor: 'grey',
        },
      },
      dividerPrimary: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBrand010}}',
          iconColor: '{{colors.inkBrand010}}',
        },
      },
      menuGroupCustom: {
        base: {
          backgroundColor: '#2f1e9f',
          borderStyle: 'solid',
          borderColor: '#8074eb',
          borderWidth: '4px 4px 0px 4px',
          color: '#dfd3d3',
          iconColor: 'grey',
          borderRadius: '10px 10px 0 0',
        },
        hover: {
          backgroundColor: '#d8335c',
        },
      },
      menuItemTwoCustom: {
        base: {
          backgroundColor: 'transparent',
          color: 'inherit',
        },
      },
      menuItemClose: {
        base: {
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderColor: 'white',
          borderWidth: '1px',
          borderRadius: '50%',
        },
        focus: {
          backgroundColor: 'rgba(0,0,0,0.3)',
        },
        hover: {
          backgroundColor: 'rgba(0,0,0,0.3)',
          iconColor: 'white',
        },
      },
      menuItemCustomTransition: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
          borderColor: '{{colors.interactivePrimary030}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
        active: {
          borderColor: '{{colors.interactivePrimary040}}',
          color: '{{colors.inkContrast}}',
          iconColor: '{{colors.inkContrast}}',
        },
      },
      menuItemVerticalTransition: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
          color: '{{colors.inkBrand010}}',
          iconColor: '{{colors.inkBrand010}}',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

const MenuGroupTitle = () => (
  <>
    <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
    <StorybookSpan> Menu Group Title Custom Component </StorybookSpan>
    <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
  </>
);

export const StoryMenuItemsHorizontal = () => (
  <>
    <StorybookHeading>Menu items - horizontal</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsHorizontal.storyName = 'menu items - horizontal';

export const StoryMenuItemsVertical = () => (
  <>
    <StorybookHeading>Menu items - vertical</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsVertical.storyName = 'menu items - vertical';

export const StoryMenuItemsStates = () => (
  <>
    <StorybookHeading>Menu items - states</StorybookHeading>
    <StorybookSubHeading>Menu items horizontal</StorybookSubHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href} selected>
        Menu item 2
      </MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href} disabled>
        Menu item 4
      </MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
    </Menu>
    <br />
    <br />
    <StorybookSubHeading>Menu items vertical</StorybookSubHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href} selected>
        Menu item 2
      </MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href} disabled>
        Menu item 4
      </MenuItem>
    </Menu>
  </>
);
StoryMenuItemsStates.storyName = 'menu items - states';

export const StoryMenuItemsSizes = () => (
  <>
    <StorybookHeading>Menu items in different sizes</StorybookHeading>
    <StorybookSubHeading>Small menu items</StorybookSubHeading>
    <Menu size="small" aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 1
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline />
        Menu item 2
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 3
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 4
        <IconFilledAddCircleOutline />
      </MenuItem>
    </Menu>
    <br />
    <br />
    <StorybookSubHeading>Medium menu items</StorybookSubHeading>
    <Menu size="medium" aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 1
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline />
        Menu item 2
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 3
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 4
        <IconFilledAddCircleOutline />
      </MenuItem>
    </Menu>
    <br />
    <br />
    <StorybookSubHeading>Large menu items</StorybookSubHeading>
    <Menu size="large" aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 1
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline />
        Menu item 2
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 3
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 4
      </MenuItem>
    </Menu>
  </>
);
StoryMenuItemsSizes.storyName = 'menu items - sizes';

export const StoryMenuItemsAlignment = () => {
  const Flex = styled.div`
    display: flex;

    & > div {
      width: 500px;
      border: 1px dashed lightgrey;
    }
  `;
  return (
    <>
      <StorybookHeading>Menu items with different alignment</StorybookHeading>
      <Flex>
        <div>
          <StorybookSubHeading>Left</StorybookSubHeading>
          <Menu vertical align="start" aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 4</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 5</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 6</MenuItem>
          </Menu>
        </div>
        <div>
          <StorybookSubHeading>Center</StorybookSubHeading>
          <Menu vertical align="center" aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 4</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 5</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 6</MenuItem>
          </Menu>
        </div>
        <div>
          <StorybookSubHeading>Right</StorybookSubHeading>
          <Menu vertical align="end" aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 4</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 5</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 6</MenuItem>
          </Menu>
        </div>
      </Flex>
    </>
  );
};
StoryMenuItemsAlignment.storyName = 'menu items - alignment';

export const StoryMenuItemsHorizontalAlignment = () => {
  const Container = styled.div`
    & > div {
      width: 480px;
      border: 1px dashed lightgrey;
    }
  `;
  return (
    <>
      <StorybookHeading>Menu items with different alignment</StorybookHeading>
      <Container>
        <div>
          <StorybookSubHeading>Left</StorybookSubHeading>
          <Menu align="start" aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
          </Menu>
        </div>
        <div>
          <StorybookSubHeading>Center</StorybookSubHeading>
          <Menu align="center" aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
          </Menu>
        </div>
        <div>
          <StorybookSubHeading>Right</StorybookSubHeading>
          <Menu align="end" aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
            <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
          </Menu>
        </div>
      </Container>
    </>
  );
};
StoryMenuItemsHorizontalAlignment.storyName =
  'menu items - alignment (horizontal)';

export const StoryMenuItemsOverrides = () => {
  const menuItemOverrides = {
    stylePreset: 'menuItemCustom',
  };
  return (
    <>
      <StorybookHeading>Menu items with overrides</StorybookHeading>
      <Menu aria-label={`Menu ${getSSRId()}`}>
        <MenuItem href={href} overrides={menuItemOverrides}>
          Menu item 1
        </MenuItem>
        <MenuItem href={href} overrides={menuItemOverrides}>
          Menu item 2
        </MenuItem>
        <MenuItem href={href} overrides={menuItemOverrides}>
          Menu item 3
        </MenuItem>
        <MenuItem href={href} overrides={menuItemOverrides}>
          Menu item 4
        </MenuItem>
        <MenuItem href={href} overrides={menuItemOverrides}>
          Menu item 5
        </MenuItem>
        <MenuItem href={href} overrides={menuItemOverrides}>
          Menu item 6
        </MenuItem>
      </Menu>
    </>
  );
};
StoryMenuItemsOverrides.storyName = 'menu items - overrides';

export const StoryMenuTransitionHorizontalOverrides = () => {
  const Container = styled.div`
    & > div {
      width: 480px;
      border: 1px dashed lightgrey;
    }
  `;
  return (
    <Container>
      <StorybookHeading>Default Transition Preset horizontal</StorybookHeading>
      <Menu aria-label={`Menu ${getSSRId()}`}>
        <MenuItem href={href}>Menu item 1</MenuItem>
        <MenuItem href={href}>Menu item 2</MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu items with Transition Preset overrides
      </StorybookSubHeading>
      <Menu aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemCustomTransition',
            transitionPreset: 'customBackgroundColorChange',
          }}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemCustomTransition',
            transitionPreset: 'customBackgroundColorChange',
          }}
        >
          Menu item 2
        </MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu item with two Transition Preset Overrides
      </StorybookSubHeading>
      <Menu aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemCustomTransition',
            transitionPreset: [
              'customBackgroundColorChange',
              'customFontColourChange',
            ],
          }}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemCustomTransition',
            transitionPreset: [
              'customBackgroundColorChange',
              'customFontColourChange',
            ],
          }}
        >
          Menu item 2
        </MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu item with overrides using extend on transitionDuration
      </StorybookSubHeading>
      <Menu aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemCustomTransition',
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          }}
        >
          Menu item 1
        </MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu item with overrides on two presets using extend
      </StorybookSubHeading>
      <Menu aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemCustomTransition',
            transitionPreset: [
              {
                extend: 'backgroundColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration030}}',
                },
              },
              {
                extend: 'customFontColourChange',
                base: {
                  transitionDuration: '{{motions.motionDuration050}}',
                },
              },
            ],
          }}
        >
          Menu item 1
        </MenuItem>
      </Menu>
    </Container>
  );
};
StoryMenuTransitionHorizontalOverrides.storyName =
  'menu items - transitions - horizontal';

export const StoryMenuTransitionVerticalOverrides = () => {
  const Container = styled.div`
    & > div {
      width: 480px;
      border: 1px dashed lightgrey;
    }
  `;
  return (
    <Container>
      <StorybookHeading>Default Transition Preset vertical</StorybookHeading>
      <Menu vertical aria-label={`Menu ${getSSRId()}`}>
        <MenuItem href={href}>Menu item 1</MenuItem>
        <MenuItem href={href}>Menu item 2</MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu items with Transition Preset overrides
      </StorybookSubHeading>
      <Menu vertical aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: 'customBackgroundColorChange',
          }}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: 'customBackgroundColorChange',
          }}
        >
          Menu item 2
        </MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu item with two Transition Preset Overrides
      </StorybookSubHeading>
      <Menu vertical aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: [
              'customBackgroundColorChange',
              'customFontColourChange',
            ],
          }}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: [
              'customBackgroundColorChange',
              'customFontColourChange',
            ],
          }}
        >
          Menu item 2
        </MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu item with overrides using extend on transitionDuration
      </StorybookSubHeading>
      <Menu vertical aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          }}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          }}
        >
          Menu item 1
        </MenuItem>
      </Menu>
      <StorybookSubHeading>
        Menu item with overrides on two presets using extend
      </StorybookSubHeading>
      <Menu vertical aria-label={`Menu ${getSSRId()}`}>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: [
              {
                extend: 'backgroundColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration030}}',
                },
              },
              {
                extend: 'customFontColourChange',
                base: {
                  transitionDuration: '{{motions.motionDuration050}}',
                },
              },
            ],
          }}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{
            stylePreset: 'menuItemVerticalTransition',
            transitionPreset: [
              {
                extend: 'backgroundColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration030}}',
                },
              },
              {
                extend: 'customFontColourChange',
                base: {
                  transitionDuration: '{{motions.motionDuration050}}',
                },
              },
            ],
          }}
        >
          Menu item 2
        </MenuItem>
      </Menu>
    </Container>
  );
};
StoryMenuTransitionVerticalOverrides.storyName =
  'menu items - transitions - vertical';

export const StoryMenuItemsInverse = () => {
  const InverseContainer = styled.div`
    ${getColorCssFromTheme('background', 'inkBase')}
  `;

  const inverseOverrides = {
    stylePreset: 'menuItemHorizontalInverse',
  };

  return (
    <>
      <StorybookHeading>Menu items horizontal inverse</StorybookHeading>
      <InverseContainer>
        <Menu aria-label={`Menu ${getSSRId()}`}>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 1
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 2
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 3
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 4
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 5
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 6
          </MenuItem>
        </Menu>
      </InverseContainer>
    </>
  );
};
StoryMenuItemsInverse.storyName = 'menu items - inverse';

export const StoryMenuGroupsVertical = () => (
  <>
    <StorybookHeading>Menu groups - vertical</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuItem href={href}>Group 2-item 4</MenuItem>
      </MenuGroup>

      <MenuGroup
        title={() => <MenuGroupTitle />}
        aria-labelledby="custom-menu-title"
      >
        <MenuItem href={href}>Group 3-item 1</MenuItem>
        <MenuItem href={href}>Group 3-item 2</MenuItem>
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuGroupsVertical.storyName = 'menu groups - vertical';

export const StoryMenuGroupsHorizontal = () => (
  <>
    <StorybookHeading>Menu groups - horizontal</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuItem href={href}>Group 2-item 4</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 3">
        <MenuItem href={href}>Group 3-item 1</MenuItem>
        <MenuItem href={href}>Group 3-item 2</MenuItem>
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuGroupsHorizontal.storyName = 'menu groups - horizontal';

export const StoryMenuGroupsNested = () => (
  <>
    <StorybookHeading>Menu groups - nested</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>

        <MenuGroup title="Group 2 - Nested Group 1">
          <MenuItem href={href}>Group 3-item 1</MenuItem>
          <MenuItem href={href}>Group 3-item 2</MenuItem>
        </MenuGroup>

        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuItem href={href}>Group 2-item 4</MenuItem>
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuGroupsNested.storyName = 'menu groups - nested';

export const StoryMenuMenuItemsOnly = () => (
  <>
    <StorybookHeading>Menu - menu items only</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuMenuItemsOnly.storyName = 'menu - menu items only';

export const StoryMenuMenuItemsOnlyhorizontal = () => (
  <>
    <StorybookHeading>Menu - menu items only (horizontal)</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuMenuItemsOnlyhorizontal.storyName =
  'menu - menu items only (horizontal)';

export const StoryMenuMenuGroupsOnly = () => (
  <>
    <StorybookHeading>Menu - menu groups only</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuMenuGroupsOnly.storyName = 'menu - menu groups only';

export const StoryMenuMenuGroupsOnlyhorizontal = () => (
  <>
    <StorybookHeading>Menu - menu groups only (horizontal)</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuMenuGroupsOnlyhorizontal.storyName =
  'menu - menu groups only (horizontal)';

export const StoryMenuMenuGroupsOnlydividersWithinGroups = () => (
  <>
    <StorybookHeading>
      Menu - menu groups only (dividers within groups)
    </StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuMenuGroupsOnlydividersWithinGroups.storyName =
  'menu - menu groups only (dividers within groups)';

export const StoryMenuMenuGroupsOnlyhorizontaldividersWithinGroups = () => (
  <>
    <StorybookHeading>
      Menu - menu groups only (horizontal) (dividers within groups)
    </StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuMenuGroupsOnlyhorizontaldividersWithinGroups.storyName =
  'menu - menu groups only (horizontal) (dividers within groups)';

export const StoryMenuItemsAndGroups = () => (
  <>
    <StorybookHeading>Menu - items and groups</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 2</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 1" overrides={{spaceInline: 'space020'}}>
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        {/* <MenuDivider /> */}
      </MenuGroup>

      <MenuDivider
        overrides={{
          spaceInline: 'space020',
          stylePreset: 'dividerPrimary',
        }}
      />

      <MenuItem href={href}>item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 4</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 2" overrides={{spaceInline: 'space020'}}>
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>

      <MenuDivider
        overrides={{
          spaceInline: 'space020',
          stylePreset: 'dividerPrimary',
        }}
      />

      <MenuItem href={href}>item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuItemsAndGroups.storyName = 'menu - items and groups';

export const StoryMenuItemsAndGroupshorizontal = () => (
  <>
    <StorybookHeading>Menu - items and groups (horizontal)</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 2</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>

      {/* <MenuDivider /> */}

      <MenuItem href={href}>item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 4</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>

      <MenuDivider />

      <MenuItem href={href}>item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuItemsAndGroupshorizontal.storyName =
  'menu - items and groups (horizontal)';

export const StoryMenuItemsHorizontalNoSpace = () => (
  <>
    <StorybookHeading>Menu items - horizontal</StorybookHeading>
    <Menu
      aria-label={`Menu ${getSSRId()}`}
      overrides={{spaceInline: 'space000'}}
    >
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsHorizontalNoSpace.storyName = 'menu items - horizontal, no space';

export const StoryMenuItemsVerticalNoSpace = () => (
  <>
    <StorybookHeading>Menu items - vertical</StorybookHeading>
    <Menu
      vertical
      aria-label={`Menu ${getSSRId()}`}
      overrides={{spaceInline: 'space000'}}
    >
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsVerticalNoSpace.storyName = 'menu items - vertical, no space';

export const StoryMenuAlignedTitle = () => (
  <>
    <StorybookHeading>Menu - menu groups only</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1" overrides={{title: {spaceInset: 'space040'}}}>
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Group 2" overrides={{title: {spaceInset: 'space040'}}}>
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>
      <MenuGroup title="Group 3" overrides={{title: {spaceInset: 'space040'}}}>
        <MenuItem href={href}>Group 3-item 1</MenuItem>
      </MenuGroup>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuAlignedTitle.storyName = 'menu - aligned title';

export const StoryMenuWithCloseButtons = () => {
  const menuItemOverrides = {
    overrides: {
      stylePreset: 'menuItemTwoCustom',
    },
  };
  const menuItemCloseOverrides = {
    overrides: {
      stylePreset: 'menuItemClose',
      maxHeight: '24px',
      maxWidth: '24px',
      minHeight: '24px',
      minWidth: '24px',
      spaceInset: '12px',
    },
  };

  const CloseIcon = ({companyName}: {companyName: string}) => (
    <IconFilledClose
      title={`Remove ${companyName}`}
      overrides={{size: 'iconSize010'}}
    />
  );

  const MenuItemNoOutline = styled(MenuItem)`
    outline: none;
  `;
  const MenuItemNoOutlineIcon = styled(MenuItem)`
    outline: none;
    margin-top: 10px;
    margin-right: 16px;
  `;

  return (
    <>
      <StorybookHeading>Menu - menu with close buttons</StorybookHeading>
      <Menu
        aria-label={`Menu ${getSSRId()}`}
        overrides={{spaceInline: 'space000'}}
      >
        <MenuGroup
          aria-label="News Corp"
          overrides={{
            spaceInline: 'space000',
            stylePreset: 'menuGroupCustom',
          }}
        >
          <MenuItemNoOutline href={href} {...menuItemOverrides}>
            News Corp
          </MenuItemNoOutline>
          <MenuItemNoOutlineIcon
            aria-label="close button"
            href={href}
            {...menuItemCloseOverrides}
          >
            <CloseIcon companyName="News Corp" />
          </MenuItemNoOutlineIcon>
        </MenuGroup>
        <MenuGroup
          aria-label="GSK"
          overrides={{
            spaceInline: 'space000',
            stylePreset: 'menuGroupCustom',
          }}
        >
          <MenuItemNoOutline href={href} {...menuItemOverrides}>
            GSK
          </MenuItemNoOutline>
          <MenuItemNoOutlineIcon
            aria-label="close button"
            href={href}
            {...menuItemCloseOverrides}
          >
            <CloseIcon companyName="GSK" />
          </MenuItemNoOutlineIcon>
        </MenuGroup>
        <MenuGroup
          aria-label="Shell"
          overrides={{
            spaceInline: 'space000',
            stylePreset: 'menuGroupCustom',
          }}
        >
          <MenuItemNoOutline href={href} {...menuItemOverrides}>
            Shell
          </MenuItemNoOutline>
          <MenuItemNoOutlineIcon
            aria-label="close button"
            href={href}
            {...menuItemCloseOverrides}
          >
            <CloseIcon companyName="Shell" />
          </MenuItemNoOutlineIcon>
        </MenuGroup>
      </Menu>
    </>
  );
};
StoryMenuWithCloseButtons.storyName = 'menu - menu with close buttons';

export const StoryMenuLogicalProps = () => (
  <>
    <StorybookHeading>Menu with logical props</StorybookHeading>
    <Menu
      aria-label={`Menu ${getSSRId()}`}
      overrides={{
        paddingInline: '30px',
        marginBlock: '30px',
      }}
    >
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuLogicalProps.storyName = 'menu - logical props';

export const StoryMenuItemsOutlineOverrides = () => (
  <>
    <StorybookHeading>Menu items with overrides</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href} overrides={{stylePreset: 'customOutlineColor'}}>
        Custom Color
      </MenuItem>
      <MenuItem href={href} overrides={{stylePreset: 'customOutlineStyle'}}>
        Custom Style
      </MenuItem>
      <MenuItem href={href} overrides={{stylePreset: 'customOutlineWidth'}}>
        Custom Width
      </MenuItem>
      <MenuItem href={href} overrides={{stylePreset: 'customOutlineOffset'}}>
        Custom Offset
      </MenuItem>
    </Menu>
    <br />
    <br />
  </>
);
StoryMenuItemsOutlineOverrides.storyName = 'menu items outline overrides';

const MenuWrapper = styled.div`
  .menu {
    width: 240px;
  }

  /* .menu > ul > li > ul,
  .menu > ul > li > ul > li > ul {
    display: none;
  }

  .menu > ul > li:hover > ul,
  .menu > ul > li:hover > ul > li:hover > ul {
    display: block;
  }
  .menu-horizontal > ul > li:hover > ul,
  .menu-horizontal > ul > li:hover > ul > li:hover > ul {
    display: flex;
  }

  .menu-horizontal {
    display: relative;
    width: 800px;
  }

  .menu-horizontal h2 {
    cursor: pointer;
    min-height: 48px;
    padding: 12px 16px;
    box-sizing: border-box;
    display: grid;
    place-items: center;
  }

  .menu-horizontal > ul > li > ul,
  .menu-horizontal > ul > li > ul > li > ul {
    position: absolute;
    left: 0;
    width: 100%;
    border: 1px solid gray;
  } */
`;

export const StoryMenuMultiple = () => (
  <MenuWrapper>
    <Menu aria-label="Menu" vertical className="menu">
      <MenuItem href={href}>Item 1</MenuItem>
      <MenuItem href={href}>Item 2</MenuItem>
      <MenuItem href={href}>Item 3</MenuItem>
      <MenuSub title="Sub 1">
        <MenuItem href={href}>Item G1 1</MenuItem>
        <MenuItem href={href}>Item G1 2</MenuItem>
        <MenuItem href={href}>Item G1 3</MenuItem>

        <MenuSub title="Sub 1.1">
          <MenuItem href={href}>Item G1.1 1</MenuItem>
          <MenuItem href={href}>Item G1.1 2</MenuItem>
          <MenuItem href={href}>Item G1.1 3</MenuItem>
        </MenuSub>
      </MenuSub>
      <MenuSub title="Sub 2">
        <MenuItem href={href}>Item G2 1</MenuItem>
        <MenuItem href={href}>Item G2 2</MenuItem>
        <MenuItem href={href}>Item G2 3</MenuItem>
      </MenuSub>
    </Menu>

    <Menu aria-label="Menu" className="menu menu-horizontal">
      <MenuItem href={href}>Item 1</MenuItem>
      <MenuItem href={href}>Item 2</MenuItem>
      <MenuItem href={href}>Item 3</MenuItem>

      <MenuSub title="Sub 1">
        <MenuItem href={href}>Item G1 1</MenuItem>
        <MenuItem href={href}>Item G1 2</MenuItem>
        <MenuItem href={href}>Item G1 3</MenuItem>

        <MenuSub title="Sub 1.1">
          <MenuItem href={href}>Item G1.1 1</MenuItem>
          <MenuItem href={href}>Item G1.1 2</MenuItem>
          <MenuItem href={href}>Item G1.1 3</MenuItem>
        </MenuSub>
      </MenuSub>

      <MenuSub title="Sub 2">
        <MenuItem href={href}>Item G2 1</MenuItem>
        <MenuItem href={href}>Item G2 2</MenuItem>
        <MenuItem href={href}>Item G2 3</MenuItem>
      </MenuSub>
    </Menu>
  </MenuWrapper>
);

const splitMenuItems = (arr: MenuElement[], n: number) => {
  const visible = [...arr].splice(0, n);
  const invisible = [...arr].splice(n);
  return {visible, invisible};
};

type MenuElement = {
  title: string;
  items?: MenuElement[];
};

const createMenu = (items: MenuElement[]) =>
  items.map(({title, items: subItems}) => {
    if (subItems) {
      return <MenuSub title={title}>{createMenu(subItems)}</MenuSub>;
    }

    return <MenuItem href="/">{title}</MenuItem>;
  });

const createMoreMenu = (items: MenuElement[]) =>
  items.map(({title, items: subItems}) => {
    if (subItems) {
      return <MenuGroup title={title}>{createMoreMenu(subItems)}</MenuGroup>;
    }

    return <MenuItem href="/">{title}</MenuItem>;
  });

const items: MenuElement[] = [
  {title: 'Item 1'},
  {title: 'Item 2'},
  {title: 'Item 3'},
  {
    title: 'Item 4',
    items: [{title: 'Item 4.1'}, {title: 'Item 4.2'}, {title: 'Item 4.3'}],
  },
  {
    title: 'Item 5',
    items: [{title: 'Item 5.1'}, {title: 'Item 5.2'}, {title: 'Item 5.3'}],
  },
];

const MenuMore = ({children}: {children: React.ReactNode}) => (
  <MenuSub title="More">{children}</MenuSub>
);

export const StoryMenuMultipleAuto = () => {
  // mouse-over or click
  // click on icon

  const splitNumber = useMediaQueryObject({
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 5,
  });

  const {visible, invisible} = splitMenuItems(items, splitNumber || 1000);

  return (
    <MenuWrapper>
      <Menu aria-label="Menu">
        {createMenu(visible)}
        {invisible.length > 0 && (
          <MenuMore>{createMoreMenu(invisible)}</MenuMore>
        )}
      </Menu>

      <hr />
    </MenuWrapper>
  );
};

export const StoryMenuMultiplePopOver = () => {
  const popOverContent = (
    <ul>
      <MenuItem href={href}>Item G1.1 1</MenuItem>
      <MenuItem href={href}>Item G1.1 2</MenuItem>
      <MenuItem href={href}>Item G1.1 3</MenuItem>
    </ul>
  );

  return (
    <>
      <h2>Popover example</h2>
      <p>Semanticly not correct, also the content is hidden from the DOM</p>
      <Menu aria-label="Menu" className="menu menu-horizontal">
        <MenuItem href={href}>Item 1</MenuItem>
        <MenuItem href={href}>Item 2</MenuItem>
        <MenuItem href={href}>Item 3</MenuItem>
        <Popover content={popOverContent} closePosition="none">
          <MenuItem href="/">Item 4</MenuItem>
        </Popover>
      </Menu>
    </>
  );
};

export default {
  title: 'Components/menu',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          menuCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
