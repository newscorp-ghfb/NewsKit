import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {Button} from '../../button';
import {GridLayoutItem} from '../../grid-layout';
import {StorybookPage} from '../../test/storybook-comps';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {Tooltip} from '../tooltip';
import {Stack} from '../../stack';

const tooltipCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-tooltip-theme',
  overrides: {
    stylePresets: {
      tooltipPointerCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
        },
      },
      tooltipPanelCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBrand010}}',
        },
      },
    },
  },
};

export const StoryTooltipPlacementsTestHidden = () => (
  <StorybookPage
    columns="repeat(3, 1fr)"
    rows="repeat(4, 1fr)"
    columnGap="10px"
  >
    <GridLayoutItem
      column="1"
      row="2/4"
      justifySelf="center"
      alignSelf="center"
    >
      <Stack paddingInlineStart="space100" spaceInline="space050">
        <Tooltip content="Tooltip content" placement="left-start" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              height: '50px',
              maxWidth: '75px',
            }}
          >
            left-start
          </Button>
        </Tooltip>

        <Tooltip content="Tooltip content" placement="left" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              height: '50px',
              minWidth: '75px',
            }}
          >
            left
          </Button>
        </Tooltip>

        <Tooltip content="Tooltip content" placement="left-end" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              height: '50px',
              maxWidth: '75px',
            }}
          >
            left-end
          </Button>
        </Tooltip>
      </Stack>
    </GridLayoutItem>
    <GridLayoutItem
      column="3"
      row="2/4"
      justifySelf="center"
      alignSelf="center"
    >
      <Stack spaceInline="space050" paddingInlineEnd="space100">
        <Tooltip content="Tooltip content" placement="right-start" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              height: '50px',
              maxWidth: '75px',
            }}
          >
            right-start
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="right" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              height: '50px',
              minWidth: '75px',
            }}
          >
            right
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="right-end" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              height: '50px',
              maxWidth: '75px',
            }}
          >
            right-end
          </Button>
        </Tooltip>
      </Stack>
    </GridLayoutItem>
    <GridLayoutItem
      column="2"
      row="1/2"
      justifySelf="center"
      alignSelf="center"
    >
      <Stack spaceInline="space050" flow="horizontal-top">
        <Tooltip content="Tooltip content" placement="top-start" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: '150px',
            }}
          >
            top-start
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="top" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: '150px',
            }}
          >
            top
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="top-end" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: '150px',
            }}
          >
            top-end
          </Button>
        </Tooltip>
      </Stack>
    </GridLayoutItem>
    <GridLayoutItem
      column="2/3"
      row="4/5"
      justifySelf="center"
      alignSelf="center"
    >
      <Stack spaceInline="space050" flow="horizontal-top">
        <Tooltip content="Tooltip content" placement="bottom-start" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: '150px',
            }}
          >
            bottom-start
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="bottom" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: '150px',
            }}
          >
            bottom
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="bottom-end" open>
          <Button
            size="small"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: '150px',
            }}
          >
            bottom-end
          </Button>
        </Tooltip>
      </Stack>
    </GridLayoutItem>
  </StorybookPage>
);
StoryTooltipPlacementsTestHidden.storyName = 'Placements visual test';
StoryTooltipPlacementsTestHidden.parameters = {
  percy: {enableJavaScript: true},
};

export default {
  title: 'Components/Tooltip e2e',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Tooltip e2e',
      url: 'https://newskit.co.uk/components/tooltip',
      description: 'Additional stories for end-to-end testing.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          tooltipCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
