/* eslint-disable no-param-reassign */
import React, {useState} from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookSpan,
} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  IconFilledAddCircleOutline,
  IconFilledClose,
  IconFilledInfo,
} from '../../icons';
import {Menu, MenuItem, MenuSub, MenuGroup, MenuDivider} from '..';
import {styled, getColorCssFromTheme, useMediaQueryObject} from '../../utils';
import {getSSRId} from '../../utils/get-ssr-id';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {InlineMessage} from '../../inline-message';

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

const Flex = styled.div`
  display: flex;

  & > div {
    width: 500px;
    border: 1px dashed lightgrey;
  }
`;
export const StoryMenuItemsAlignment = () => (
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
    <StorybookHeading>MenuSub with logical props</StorybookHeading>
    <Menu
      size="medium"
      aria-label="overrides-on-menu-sub"
      overrides={{
        paddingInline: '30px',
        marginBlock: '30px',
      }}
    >
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuSub
        title="Menu item 3"
        expanded
        overrides={{
          paddingInlineStart: '16px',
        }}
      >
        <MenuItem href={href}>Menu item 3.1</MenuItem>
        <MenuItem href={href}>Menu item 3.2</MenuItem>
      </MenuSub>
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
StoryMenuItemsOutlineOverrides.storyName = 'menu items - outline overrides';

const HorizontalContainer = styled.div`
  min-height: 200px;
`;
export const StorySubMenuHorizontal = () => {
  const [guidesExpanded, setGuidesExpanded] = useState(false);
  const [codeExpanded, setDesignExpanded] = useState(false);

  return (
    <HorizontalContainer>
      <StorybookSubHeading>Sub menu - horizontal</StorybookSubHeading>
      <Menu aria-label="menu-horizontal">
        <MenuSub
          title="Guides"
          id="horizontal-guides"
          selected={guidesExpanded}
          expanded={guidesExpanded}
          onClick={() => {
            setGuidesExpanded(!guidesExpanded);
          }}
        >
          <MenuItem href={href} id="horizontal-getting-started">
            Getting started
          </MenuItem>
          <MenuItem href={href} id="horizontal-design-overview">
            Design Overview
          </MenuItem>
          <MenuSub
            title="Code"
            id="horizontal-code"
            expanded={codeExpanded}
            selected={codeExpanded}
            onClick={() => setDesignExpanded(!codeExpanded)}
          >
            <MenuItem href={href} id="horizontal-engineering-overview">
              Engineering Overview
            </MenuItem>
          </MenuSub>
        </MenuSub>
      </Menu>
    </HorizontalContainer>
  );
};
StorySubMenuHorizontal.storyName = 'sub-menu-horizontal';

const VerticalContainer = styled.div`
  width: 300px;
`;
export const StorySubMenuVertical = () => {
  const [guidesExpanded, setGuidesExpanded] = useState(false);
  const [codeExpanded, setCodeExpanded] = useState(false);
  const [themeExpanded, setThemeExpanded] = useState(false);
  const [foundationsExpanded, setFoundationsExpanded] = useState(false);

  return (
    <>
      <StorybookSubHeading>Sub menu - vertical</StorybookSubHeading>
      <VerticalContainer>
        <Menu aria-label="menu-vertical" vertical align="spaceBetween">
          <MenuSub
            title="Guides"
            id="vertical-guides"
            expanded={guidesExpanded}
            onClick={() => setGuidesExpanded(!guidesExpanded)}
          >
            <MenuItem href={href} id="vertical-getting-started">
              Getting started
            </MenuItem>
            <MenuItem href={href} id="vertical-design-overview">
              Design overview
            </MenuItem>
            <MenuSub
              title="Code"
              id="vertical-code"
              expanded={codeExpanded}
              onClick={() => setCodeExpanded(!codeExpanded)}
            >
              <MenuItem href={href} id="vertical-engineering-overview">
                Engineering overview
              </MenuItem>
            </MenuSub>
          </MenuSub>

          <MenuSub
            title="Theme"
            id="vertical-theme"
            expanded={themeExpanded}
            onClick={() => setThemeExpanded(!themeExpanded)}
          >
            <MenuItem href={href} id="vertical-overview">
              Overview
            </MenuItem>
            <MenuSub
              title="Foundations"
              id="vertical-foundations"
              expanded={foundationsExpanded}
              onClick={() => setFoundationsExpanded(!foundationsExpanded)}
            >
              <MenuItem href={href} id="vertical-borders">
                Borders
              </MenuItem>
              <MenuItem href={href} id="vertical-breakpoints">
                Breakpoints
              </MenuItem>
            </MenuSub>
          </MenuSub>
        </Menu>
      </VerticalContainer>
    </>
  );
};
StorySubMenuVertical.storyName = 'sub-menu-vertical';

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

    return <MenuItem href={href}>{title}</MenuItem>;
  });
const createMoreMenu = (items: MenuElement[]) =>
  items.map(({title, items: subItems}) => {
    if (subItems) {
      return (
        <MenuSub title={title} data-testid="more-sub-menu">
          {createMoreMenu(subItems)}
        </MenuSub>
      );
    }

    return <MenuItem href="/">{title}</MenuItem>;
  });

const MenuMore = ({children}: {children: React.ReactNode}) => (
  <MenuSub title="More">{children}</MenuSub>
);

const items: MenuElement[] = [
  {title: 'About'},
  {
    title: 'Guides',
  },
  {
    title: 'Theme',
  },
  {
    title: 'Components',
    items: [
      {title: 'Overview'},
      {
        title: 'Actions & Inputs',
        items: [{title: 'Button'}, {title: 'Checkbox'}, {title: 'Form'}],
      },
    ],
  },
];

export const StoryMenuMultipleAuto = () => {
  const splitNumber = useMediaQueryObject({
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 5,
  });

  const {visible, invisible} = splitMenuItems(items, splitNumber || 1000);

  return (
    <HorizontalContainer>
      <InlineMessage
        icon={
          <IconFilledInfo
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{marginBlockEnd: 'space050'}}
      >
        Resize the browser window to see the menu items overflow.
      </InlineMessage>
      <Menu aria-label="menu-multiple-auto">
        {createMenu(visible)}
        {invisible.length > 0 && (
          <MenuMore>{createMoreMenu(invisible)}</MenuMore>
        )}
      </Menu>
    </HorizontalContainer>
  );
};
StoryMenuMultipleAuto.storyName = 'sub-menu-auto';

export const StoryMenuSubOverrides = () => {
  const [expanded, setExpanded] = useState(false);
  const menuItemOverrides = {
    stylePreset: 'menuItemCustom',
  };
  return (
    <HorizontalContainer>
      <StorybookHeading>Menu sub with overrides</StorybookHeading>
      <Menu size="medium" aria-label="menu-sub-overrides">
        <MenuItem
          href={href}
          overrides={{...menuItemOverrides, minHeight: '56px'}}
        >
          Menu item 1
        </MenuItem>
        <MenuItem
          href={href}
          overrides={{...menuItemOverrides, minHeight: '56px'}}
        >
          Menu item 2
        </MenuItem>
        <MenuSub
          title="Menu item 3"
          expanded={expanded}
          onClick={() => {
            setExpanded(!expanded);
          }}
          overrides={{
            ...menuItemOverrides,
          }}
        >
          <MenuItem href={href}>Menu item 3.1</MenuItem>
          <MenuItem href={href}>Menu item 3.2</MenuItem>
        </MenuSub>
      </Menu>
    </HorizontalContainer>
  );
};
StoryMenuSubOverrides.storyName = 'sub-menu-overrides';

const routes = [
  {
    title: 'About',
    id: '/about',
    subNav: [
      {
        title: 'Why use NewsKit',
        id: '/about/why-use-newskit',
      },
      {
        title: 'Release notes',
        id: '/about/release-notes',
      },
      {
        title: 'Roadmap',
        id: '/about/roadmap',
      },
      {
        title: 'Contribute',
        id: '/about/contribute',
      },
      {
        title: 'Contact us',
        id: '/about/contact-us',
      },
    ],
  },
  {
    title: 'Guides',
    id: '/getting-started',
    subNav: [
      {
        title: 'Getting started',
        id: '/getting-started/overview',
      },
      {
        title: 'Design',
        id: '/getting-started/design',
      },
      {
        title: 'Code',
        id: '/getting-started/code',
        subNav: [
          {
            title: 'Overview',
            id: '/getting-started/code/engineering-overview',
          },
          {
            title: 'Quickstart',
            id: '/getting-started/code/engineering-quickstart',
          },
          {
            title: 'Form step-by-step',
            id: '/getting-started/code/form-step-by-step',
          },
        ],
      },
    ],
  },
  {
    title: 'Theme',
    id: '/theme',
    subNav: [
      {
        title: 'Overview',
        id: '/theme/overview',
      },
      {
        title: 'Foundations',
        id: '/theme/foundation',
        subNav: [
          {
            title: 'Borders',
            id: '/theme/foundation/borders',
          },
          {
            title: 'Breakpoints',
            id: '/theme/foundation/breakpoints',
          },
          {
            title: 'Colours',
            id: '/theme/foundation/colours',
          },
          {
            title: 'Design tokens',
            id: '/theme/foundation/design-tokens',
          },
          {
            title: 'Fonts',
            id: '/theme/foundation/fonts',
          },
        ],
      },
      {
        title: 'Presets',
        id: '/theme/presets',
        subNav: [
          {
            title: 'Style Presets',
            id: '/theme/presets/style-presets',
          },
          {
            title: 'Transition Presets',
            id: '/theme/presets/transition-presets',
          },
          {
            title: 'Typography Presets',
            id: '/theme/presets/typography-presets',
          },
        ],
      },
      {
        title: 'Creating and using themes',
        id: '/theme/theming',
        subNav: [
          {
            title: 'Overview',
            id: '/theme/theming/overview',
          },
          {
            title: 'Creating a theme in code',
            id: '/theme/theming/creating-a-theme',
          },
          {
            title: 'Using a theme in code',
            id: '/theme/theming/using-a-theme',
          },
          {
            title: 'Component defaults',
            id: '/theme/theming/component-defaults',
          },
        ],
      },
    ],
  },
];

type MenuNestedElement = {
  id: string;
  title: string;
  subNav?: MenuNestedElement[];
  expanded?: boolean;
  selected?: boolean;
  parent?: MenuNestedElement;
};

const createNestedMenu = (
  menuItems: MenuNestedElement[],
  fn: (id: string) => void,
) =>
  menuItems.map(({subNav, title, expanded, id, selected}) => {
    if (subNav) {
      return (
        <MenuSub
          key={id}
          expanded={expanded}
          selected={selected}
          onClick={() => fn(id)}
          title={title}
        >
          {createNestedMenu(subNav, fn)}
        </MenuSub>
      );
    }
    return (
      <MenuItem key={id} href={href}>
        {title}
      </MenuItem>
    );
  });
const expandMyParent = (menuItem: MenuNestedElement) => {
  if (menuItem) {
    menuItem.expanded = true;
    menuItem.selected = menuItem.expanded;
    if (menuItem.parent) expandMyParent(menuItem.parent);
  }
};

const makeExpanded = (expandedId: string, menuItems: MenuNestedElement[]) =>
  menuItems.map(menuItem => {
    menuItem.expanded = expandedId === menuItem.id;
    menuItem.selected = menuItem.expanded;
    menuItem.subNav = menuItem.subNav
      ? makeExpanded(expandedId, menuItem.subNav)
      : undefined;

    if (menuItem.expanded && menuItem.parent) {
      expandMyParent(menuItem.parent);
    }

    return menuItem;
  });

const makeTree = (
  menuItems: MenuNestedElement[],
  parent: MenuNestedElement | null,
) => {
  menuItems.forEach(menuItem => {
    // @ts-ignore
    menuItem.parent = parent;
    if (menuItem.subNav) {
      makeTree(menuItem.subNav, menuItem);
    }
  });
  return menuItems;
};

const treeMenu = makeTree(routes, null);

export const StoryMenuFullDemo = () => {
  const [expandedId, setExpandedId] = React.useState('');
  const expandedRoutes = makeExpanded(expandedId, treeMenu);

  const setExpanded = React.useCallback(
    (id: string) => {
      if (expandedId === id) {
        setExpandedId('');
      } else {
        setExpandedId(id);
      }
    },
    [expandedId, setExpandedId],
  );

  return (
    <HorizontalContainer>
      <Menu>{createNestedMenu(expandedRoutes, setExpanded)}</Menu>
    </HorizontalContainer>
  );
};
StoryMenuFullDemo.storyName = 'sub-menu-full-demo';

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
