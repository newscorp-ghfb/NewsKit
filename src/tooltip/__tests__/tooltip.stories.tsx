import * as React from 'react';
import {Button, ButtonSize} from '../../button';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Tooltip} from '../tooltip';
import {IconFilledTwitter} from '../../icons';
import {IconButton} from '../../icon-button';

export default {
  title: 'NewsKit Light/tooltip',
  component: () => 'None',
};

const Box = styled.div`
  justify-content: center;
  padding: 24px;
  margin: 24px;
`;

const myCustomTheme = createTheme({
  name: 'my-custom-modal-theme',
  overrides: {
    stylePresets: {
      tooltipPanelCustom: {
        base: {
          backgroundColor: '{{colors.red080}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
        },
      },
    },
  },
});

export const StoryTooltipPlacements = () => (
  <>
    <StorybookSubHeading>Tooltip</StorybookSubHeading>
    <Box>
      <GridLayout
        columns="repeat(3, 1fr)"
        rows="repeat(3, 1fr)"
        columnGap="10px"
        rowGap="20px"
      >
        <GridLayoutItem
          column="1"
          row="2/3"
          justifySelf="flex-start"
          alignSelf="center"
        >
          <Tooltip title="Add" placement="left-start">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              left-start
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              left
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              left-end
            </Button>
          </Tooltip>
        </GridLayoutItem>
        <GridLayoutItem
          column="3"
          row="2/3"
          justifySelf="flex-end"
          alignSelf="center"
        >
          <Tooltip title="Add" placement="right-start">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              right-start
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="right">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              right
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="right-end">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              right-end
            </Button>
          </Tooltip>
          <br />
        </GridLayoutItem>
        <GridLayoutItem
          column="2"
          row="1"
          justifySelf="center"
          alignSelf="flex-start"
        >
          <Tooltip title="Add" placement="top-start">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              top-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              top
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              top-end
            </Button>
          </Tooltip>
        </GridLayoutItem>
        <GridLayoutItem
          column="2/3"
          row="3"
          justifySelf="center"
          alignSelf="flex-end"
        >
          <Tooltip title="Add" placement="bottom-start">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              bottom-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              bottom
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              bottom-end
            </Button>
          </Tooltip>
        </GridLayoutItem>
      </GridLayout>
    </Box>
  </>
);
StoryTooltipPlacements.storyName = 'tooltip-placements';
StoryTooltipPlacements.parameters = {
  eyes: {include: false},
};

export const StoryTooltipTriggers = () => (
  <>
    <StorybookSubHeading>Triggered by focus</StorybookSubHeading>
    <Tooltip title="Add" placement="right" trigger="focus">
      <Button
        size={ButtonSize.Small}
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        right
      </Button>
    </Tooltip>
    <StorybookSubHeading>Triggered by hover & focus</StorybookSubHeading>
    <Tooltip title="Add" placement="right" trigger={['focus', 'hover']}>
      <Button
        size={ButtonSize.Small}
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        right
      </Button>
    </Tooltip>
  </>
);
StoryTooltipTriggers.storyName = 'tooltip-triggers';
StoryTooltipTriggers.parameters = {
  eyes: {include: false},
};

export const StoryTooltipDefaultOpen = () => (
  <>
    <StorybookSubHeading>Tooltip default open</StorybookSubHeading>
    <Tooltip title="Add" placement="bottom-end" defaultOpen>
      <Button
        size={ButtonSize.Small}
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        bottom-end
      </Button>
    </Tooltip>
  </>
);
StoryTooltipDefaultOpen.storyName = 'tooltip-default-open';

export const StoryTooltipControlled = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <StorybookSubHeading>Tooltip Controlled</StorybookSubHeading>
      <Tooltip title="Add" placement="right" defaultOpen open={open}>
        <Button
          size={ButtonSize.Small}
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
        >
          right
        </Button>
      </Tooltip>
      <p>
        External state control - click the button below to show/hide the
        tooltip.
      </p>
      <Button onClick={() => setOpen(!open)}>External control</Button>
    </>
  );
};
StoryTooltipControlled.storyName = 'tooltip-controlled';
StoryTooltipControlled.parameters = {
  eyes: {include: false},
};

export const StoryTooltipAccessibility = () => (
  <>
    <StorybookSubHeading>
      When title is empty, no tooltip is displayed
    </StorybookSubHeading>
    <Tooltip title="" placement="right">
      <Button
        size={ButtonSize.Small}
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        right
      </Button>
    </Tooltip>
    <StorybookSubHeading>Title is not a string</StorybookSubHeading>
    <Tooltip title={<div>Hello</div>} placement="right">
      <Button
        size={ButtonSize.Small}
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        right
      </Button>
    </Tooltip>
    <StorybookSubHeading>Tooltip as a label</StorybookSubHeading>
    <Tooltip title="Share" placement="right" labelTooltip>
      <IconButton
        size={ButtonSize.Small}
        overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
        aria-label="share on twitter"
      >
        <IconFilledTwitter />
      </IconButton>
    </Tooltip>
  </>
);
StoryTooltipAccessibility.storyName = 'tooltip-accessibility';
StoryTooltipAccessibility.parameters = {
  eyes: {include: false},
};

export const StoryTooltipOverrides = () => (
  <>
    <StorybookSubHeading>Tooltip Overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <Tooltip
        title="Add"
        open
        placement="right"
        overrides={{
          minWidth: '50px',
          maxWidth: '80px',
          zIndex: 80,
          panel: {
            paddingBlock: 'space040',
            paddingInline: 'space020',
            stylePreset: 'tooltipPanelCustom',
            typographyPreset: 'utilityLabel020',
          },
        }}
      >
        <Button
          size={ButtonSize.Small}
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
        >
          right
        </Button>
      </Tooltip>
    </ThemeProvider>
  </>
);
StoryTooltipOverrides.storyName = 'tooltip-overrides';

export const StoryTooltipPlacementsVisualTest = () => (
  <>
    <StorybookSubHeading>Tooltip</StorybookSubHeading>
    <Box>
      <GridLayout
        columns="repeat(3, 1fr)"
        rows="repeat(3, 1fr)"
        columnGap="10px"
        rowGap="20px"
      >
        <GridLayoutItem
          column="1"
          row="2/3"
          justifySelf="flex-start"
          alignSelf="center"
        >
          <Tooltip title="Add" placement="left-start" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              left-start
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              left
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              left-end
            </Button>
          </Tooltip>
        </GridLayoutItem>
        <GridLayoutItem
          column="3"
          row="2/3"
          justifySelf="flex-end"
          alignSelf="center"
        >
          <Tooltip title="Add" placement="right-start" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              right-start
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="right" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              right
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="right-end" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary', height: '50px'}}
            >
              right-end
            </Button>
          </Tooltip>
          <br />
        </GridLayoutItem>
        <GridLayoutItem
          column="2"
          row="1"
          justifySelf="center"
          alignSelf="flex-start"
        >
          <Tooltip title="Add" placement="top-start" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              top-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="top" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              top
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              top-end
            </Button>
          </Tooltip>
        </GridLayoutItem>
        <GridLayoutItem
          column="2/3"
          row="3"
          justifySelf="center"
          alignSelf="flex-end"
        >
          <Tooltip title="Add" placement="bottom-start" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              bottom-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              bottom
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end" open>
            <Button
              size={ButtonSize.Small}
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              bottom-end
            </Button>
          </Tooltip>
        </GridLayoutItem>
      </GridLayout>
    </Box>
  </>
);
StoryTooltipPlacementsVisualTest.storyName = 'tooltip-placements-visual-test';
