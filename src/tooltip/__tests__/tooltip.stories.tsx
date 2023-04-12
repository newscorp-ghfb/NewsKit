import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {Button} from '../../button';
import {GridLayoutItem} from '../../grid-layout';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Tooltip} from '../tooltip';
import {IconFilledTwitter} from '../../icons';
import {IconButton} from '../../icon-button';
import {Stack} from '../../stack';
import {LinkInline, LinkStandalone} from '../../link';

const Spacer = styled.div`
  margin-bottom: 20px;
  min-height: 5px;
  min-width: 5px;
`;

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

export const StoryTooltipDefault = () => (
  <StorybookPage columnGap="space050" rowGap="space050">
    <StorybookCase>
      <Spacer />
      <Tooltip content="Tooltip content" asLabel trigger={['focus', 'hover']}>
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
  </StorybookPage>
);
StoryTooltipDefault.storyName = 'Default';
StoryTooltipDefault.parameters = {
  percy: {skip: true},
};

export const StoryTooltipPlacements = () => (
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
        <Tooltip content="Tooltip content" placement="left-start">
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

        <Tooltip content="Tooltip content" placement="left">
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

        <Tooltip content="Tooltip content" placement="left-end">
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
        <Tooltip content="Tooltip content" placement="right-start">
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
        <Tooltip content="Tooltip content" placement="right">
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
        <Tooltip content="Tooltip content" placement="right-end">
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
        <Tooltip content="Tooltip content" placement="top-start">
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
        <Tooltip content="Tooltip content" placement="top">
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
        <Tooltip content="Tooltip content" placement="top-end">
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
        <Tooltip content="Tooltip content" placement="bottom-start">
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
        <Tooltip content="Tooltip content" placement="bottom">
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
        <Tooltip content="Tooltip content" placement="bottom-end">
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
StoryTooltipPlacements.storyName = 'Placements';
StoryTooltipPlacements.parameters = {
  percy: {skip: true},
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

export const StoryTooltipTriggers = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(180px, 1fr))">
    <StorybookCase title="Triggered by focus">
      <Tooltip content="Tooltip content" placement="right" trigger="focus">
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
    <StorybookCase title="Triggered by hover & focus">
      <Tooltip
        content="Tooltip content"
        placement="right"
        trigger={['focus', 'hover']}
      >
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
  </StorybookPage>
);
StoryTooltipTriggers.storyName = 'Triggers';
StoryTooltipTriggers.parameters = {
  percy: {skip: true},
};

export const StoryTooltipVariations = () => (
  <>
    <StorybookPage
      columns="repeat(auto-fill, minmax(180px, 1fr))"
      rowGap="space050"
    >
      <StorybookCase title="Button">
        <Tooltip
          content="Tooltip content"
          placement="right"
          trigger={['focus', 'hover']}
        >
          <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
            Show tooltip
          </Button>
        </Tooltip>
      </StorybookCase>
      <StorybookCase title="Icon button">
        <Tooltip
          content="Tooltip content"
          asLabel
          placement="right"
          trigger={['focus', 'hover']}
        >
          <IconButton overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}>
            <IconFilledTwitter />
          </IconButton>
        </Tooltip>
      </StorybookCase>
      <StorybookCase title="Disabled button">
        <Tooltip
          content="Tooltip content"
          placement="right"
          trigger={['focus', 'hover']}
        >
          <span>
            <Button disabled overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
              Show tooltip
            </Button>
          </span>
        </Tooltip>
      </StorybookCase>
    </StorybookPage>
    <Spacer />
    <StorybookPage
      columns="repeat(auto-fill, minmax(180px, 1fr))"
      rowGap="space050"
    >
      <StorybookCase title="Inline link">
        <Tooltip
          content="Tooltip content"
          placement="right"
          trigger={['focus', 'hover']}
        >
          <LinkInline href="/">Show tooltip</LinkInline>
        </Tooltip>
      </StorybookCase>
      <StorybookCase title="Standalone link">
        <Tooltip
          content="Tooltip content"
          placement="right"
          trigger={['focus', 'hover']}
        >
          <LinkStandalone href="/">Show tooltip</LinkStandalone>
        </Tooltip>
      </StorybookCase>
    </StorybookPage>
    <Spacer />
    <StorybookPage
      columns="repeat(auto-fill, minmax(180px, 1fr))"
      rowGap="space050"
    >
      <StorybookCase title="Content is empty">
        <Tooltip content="" placement="right" trigger={['focus', 'hover']}>
          <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
            Show tooltip
          </Button>
        </Tooltip>
      </StorybookCase>
      <StorybookCase title="Content is not a string">
        <Tooltip
          content={<div>Lorem ipsum dolor sit amet</div>}
          placement="right"
          trigger={['focus', 'hover']}
        >
          <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
            Show tooltip
          </Button>
        </Tooltip>
      </StorybookCase>
      <StorybookCase title="Without maxWidth">
        <Tooltip
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          trigger={['focus', 'hover']}
        >
          <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
            Show tooltip
          </Button>
        </Tooltip>
      </StorybookCase>
      <StorybookCase title="With maxWidth">
        <Tooltip
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          trigger={['focus', 'hover']}
          overrides={{maxWidth: '100px'}}
        >
          <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
            Show tooltip
          </Button>
        </Tooltip>
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryTooltipVariations.storyName = 'Variations';
StoryTooltipVariations.parameters = {
  percy: {skip: true},
};

export const StoryTooltipNoPointer = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(180px, 1fr))">
    <StorybookCase title="No pointer (default)">
      <Tooltip content="Tooltip content" placement="right" hidePointer>
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
    <StorybookCase title="Offset increased">
      <Tooltip
        content="Tooltip content"
        placement="right"
        hidePointer
        overrides={{offset: 'space080'}}
      >
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
    <StorybookCase title="Offset zero">
      <Tooltip
        content="Tooltip content"
        placement="right"
        hidePointer
        overrides={{offset: 'space000'}}
      >
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
  </StorybookPage>
);
StoryTooltipNoPointer.storyName = 'No pointer';
StoryTooltipNoPointer.parameters = {
  percy: {enableJavaScript: true},
};

export const StoryTooltipControlled = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <StorybookPage columns="repeat(auto-fill, minmax(180px, 1fr))">
      <StorybookCase>
        <Button
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
          onClick={() => setOpen(!open)}
        >
          Click to toggle tooltip
        </Button>
      </StorybookCase>
      <StorybookCase>
        <Tooltip content="Tooltip content" placement="right" open={open}>
          <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
            Show tooltip
          </Button>
        </Tooltip>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryTooltipControlled.storyName = 'Controlled';
StoryTooltipControlled.parameters = {
  percy: {skip: true},
};

export const StoryTooltipStylingOverrides = () => (
  <StorybookPage>
    <StorybookCase>
      <Tooltip
        content="Tooltip content"
        placement="right"
        overrides={{
          minWidth: '50px',
          maxWidth: '150px',
          offset: 'space080',
          panel: {
            paddingBlock: 'space040',
            paddingInline: 'space080',
            stylePreset: 'tooltipPanelCustom',
            typographyPreset: 'utilityLabel020',
          },
          pointer: {
            stylePreset: 'tooltipPointerCustom',
            size: 'sizing030',
          },
        }}
      >
        <Button overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Show tooltip
        </Button>
      </Tooltip>
    </StorybookCase>
  </StorybookPage>
);
StoryTooltipStylingOverrides.storyName = 'Styling overrides';
StoryTooltipStylingOverrides.parameters = {
  percy: {enableJavaScript: true},
};

export default {
  title: 'Components/Tooltip',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Tooltip',
      url: 'https://newskit.co.uk/components/tooltip',
      description:
        'A tooltip is a feedback component that displays a short, informational message when a user hovers over or focuses on a UI element.',
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
