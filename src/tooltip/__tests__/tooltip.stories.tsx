import * as React from 'react';
import {Button} from '../../button';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Tooltip} from '../tooltip';
import {IconFilledTwitter} from '../../icons';
import {IconButton} from '../../icon-button';
import {Stack} from '../../stack';
import {LinkInline, LinkStandalone} from '../../link';

export default {
  title: 'NewsKit Light/tooltip',
  component: () => 'None',
};

const StyledDiv = styled.div`
  margin-left: 200px;
  margin-top: 48px;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
`;

const myCustomTheme = createTheme({
  name: 'my-custom-modal-theme',
  overrides: {
    stylePresets: {
      tooltipPointerCustom: {
        base: {
          backgroundColor: '{{colors.red080}}',
        },
      },
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

export const StoryTooltip = () => (
  <Container>
    <StorybookSubHeading>Tooltip with icon button</StorybookSubHeading>
    <Tooltip
      content="Share"
      asLabel
      placement="right"
      trigger={['focus', 'hover']}
    >
      <IconButton
        size="small"
        overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
      >
        <IconFilledTwitter />
      </IconButton>
    </Tooltip>
    <StorybookSubHeading>Tooltip with disabled button</StorybookSubHeading>
    <Tooltip
      content="Action unavailable"
      placement="right"
      trigger={['focus', 'hover']}
    >
      <span>
        <Button
          size="small"
          disabled
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
        >
          Button
        </Button>
      </span>
    </Tooltip>
    <StorybookSubHeading>Tooltip with button</StorybookSubHeading>
    <Tooltip
      content="Lorem ipsum dolor sit amet"
      placement="right"
      trigger={['focus', 'hover']}
    >
      <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
        Button
      </Button>
    </Tooltip>
    <StorybookSubHeading>Tooltip with inline link</StorybookSubHeading>
    <Tooltip
      content="Lorem ipsum dolor sit amet"
      placement="right"
      trigger={['focus', 'hover']}
    >
      <LinkInline href="/">Inline link</LinkInline>
    </Tooltip>
    <StorybookSubHeading>Tooltip with standalone link</StorybookSubHeading>
    <Tooltip
      content="Lorem ipsum dolor sit amet"
      placement="right"
      trigger={['focus', 'hover']}
    >
      <LinkStandalone href="/">Standalone link</LinkStandalone>
    </Tooltip>
    <StorybookSubHeading>
      When content is empty, no tooltip is displayed
    </StorybookSubHeading>
    <Tooltip content="" placement="right" trigger={['focus', 'hover']}>
      <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
        Button
      </Button>
    </Tooltip>
    <StorybookSubHeading>When content is not a string</StorybookSubHeading>
    <Tooltip
      content={<div>Lorem ipsum dolor sit amet</div>}
      placement="right"
      trigger={['focus', 'hover']}
    >
      <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
        Button
      </Button>
    </Tooltip>
    <StorybookSubHeading>
      When content is long and without maxWidth
    </StorybookSubHeading>
    <StyledDiv>
      <Tooltip
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        trigger={['focus', 'hover']}
      >
        <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Button
        </Button>
      </Tooltip>
    </StyledDiv>
    <StorybookSubHeading>
      When content is long and with maxWidth
    </StorybookSubHeading>
    <StyledDiv>
      <Tooltip
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        trigger={['focus', 'hover']}
        overrides={{maxWidth: '100px'}}
      >
        <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Button
        </Button>
      </Tooltip>
    </StyledDiv>
  </Container>
);
StoryTooltip.storyName = 'tooltip';
StoryTooltip.parameters = {
  eyes: {include: false},
};

export const StoryTooltipPlacements = () => (
  <>
    <StorybookSubHeading>Tooltip Placements</StorybookSubHeading>
    <Container>
      <GridLayout
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
          <Stack spaceInline="space050">
            <Tooltip content="Tooltip content" placement="left-start">
              <Button
                size="small"
                overrides={{
                  stylePreset: 'buttonOutlinedPrimary',
                  height: '50px',
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
          <Stack spaceInline="space050">
            <Tooltip content="Tooltip content" placement="right-start">
              <Button
                size="small"
                overrides={{
                  stylePreset: 'buttonOutlinedPrimary',
                  height: '50px',
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
      </GridLayout>
    </Container>
  </>
);
StoryTooltipPlacements.storyName = 'tooltip-placements';
StoryTooltipPlacements.parameters = {
  eyes: {include: false},
};

export const StoryTooltipTriggers = () => (
  <>
    <StorybookSubHeading>Triggered by focus only</StorybookSubHeading>
    <Tooltip content="Tooltip content" placement="right" trigger="focus">
      <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
        Button
      </Button>
    </Tooltip>
    <StorybookSubHeading>Triggered by hover & focus</StorybookSubHeading>
    <Tooltip
      content="Tooltip content"
      placement="right"
      trigger={['focus', 'hover']}
    >
      <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
        Button
      </Button>
    </Tooltip>
  </>
);
StoryTooltipTriggers.storyName = 'tooltip-triggers';
StoryTooltipTriggers.parameters = {
  eyes: {include: false},
};

export const StoryTooltipControlled = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <StorybookSubHeading>Tooltip Controlled</StorybookSubHeading>
      <Tooltip content="Tooltip content" placement="right" open={open}>
        <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Button
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

export const StoryTooltipOverrides = () => (
  <>
    <StorybookSubHeading>Tooltip Overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <Tooltip
        content="Tooltip content"
        open
        placement="right"
        overrides={{
          minWidth: '50px',
          maxWidth: '150px',
          zIndex: 70,
          distance: 'space080',
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
          transitionPreset: {
            extend: 'fade',
            base: {
              transitionDelay: '{{motions.motionDuration050}}',
            },
          },
        }}
      >
        <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
          Button
        </Button>
      </Tooltip>
    </ThemeProvider>
  </>
);
StoryTooltipOverrides.storyName = 'tooltip-overrides';

export const StoryTooltipPlacementsVisualTest = () => (
  <>
    <StorybookSubHeading>Tooltip Visual</StorybookSubHeading>
    <Container>
      <GridLayout
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
          <Stack spaceInline="space050">
            <Tooltip content="Tooltip content" placement="left-start" open>
              <Button
                size="small"
                overrides={{
                  stylePreset: 'buttonOutlinedPrimary',
                  height: '50px',
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
          <Stack spaceInline="space050">
            <Tooltip content="Tooltip content" placement="right-start" open>
              <Button
                size="small"
                overrides={{
                  stylePreset: 'buttonOutlinedPrimary',
                  height: '50px',
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
      </GridLayout>
    </Container>
  </>
);
StoryTooltipPlacementsVisualTest.storyName = 'tooltip-placements-visual-test';

export const StoryTooltipNoPointer = () => (
  <>
    <StorybookSubHeading>Tooltip no pointer</StorybookSubHeading>
    <Tooltip content="Tooltip content" placement="right" hidePointer>
      <Button size="small" overrides={{stylePreset: 'buttonOutlinedPrimary'}}>
        Button
      </Button>
    </Tooltip>
  </>
);
StoryTooltipNoPointer.storyName = 'tooltip-no-pointer';
