import * as React from 'react';

import {TabSize, styled, Scroll, TextBlock, getColorCssFromTheme} from '../..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Tab, TabAlign, Tabs, TabsDistribution, TabsIndicatorPosition} from '..';
import {IconFilledEmail} from '../../icons';
import {Block} from '../../block';
import {createTheme, ThemeProvider} from '../../theme';

const LoremIpsumText = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda
ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae di
rem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora in
cidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercit
ationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu
re reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugi
at quo voluptas nulla pariatur?`,
  `But I must explain to you how all this mistaken idea of denouncing plea
sure and praising pain was born and I will give you a complete account of the system, and expound the actu
al teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects
 nally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial exa
 mple, which of us ever undertakes laborious physical exercise, except to obtain some advantage from
  it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoy
  ing consequences, or one who avoids a pain that produces no resultant pleasure?`,
];

const LoremIpsumText2 = [
  `First Content`,
  `Other Content`,
  `Again different Content`,
];

const myCustomTheme = createTheme({
  name: 'my-custom-tabs-theme',
  overrides: {
    stylePresets: {
      tabsBarTrackCustomPreset: {
        base: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      tabsBarIndicatorCustomPreset: {
        base: {
          backgroundColor: '{{colors.green060}}',
        },
      },
      dividerCustomPreset: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.red060}}',
          borderWidth: '{{borders.borderWidth030}}',
        },
      },
      scrollArrowsCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          color: '{{colors.purple050}}',
          iconColor: '{{colors.purple050}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
        },
        active: {
          backgroundColor: '{{colors.amber060}}',
        },
        disabled: {
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
      },
    },
  },
});

const Spacer = styled.div`
  margin-bottom: 2em;
`;

const MainContainer = styled.div`
  max-height: 768px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Container = styled(Block)<{width?: string; height?: string}>`
  ${getColorCssFromTheme('backgroundColor', 'neutral020')};
  width: ${({width}) => width || '300px'};
  height: ${({height}) => height || '250px'};
  overflow: none;
`;

const LoremIpsum: React.FC<{textNumber: number; text?: Array<string>}> = ({
  textNumber = 1,
  text = LoremIpsumText,
}) => (
  <Block spaceInset="spaceInset040">
    <TextBlock typographyPreset="utilityBody020">
      {text[textNumber - 1]}
    </TextBlock>
  </Block>
);

const StyledBlock = styled(Block)`
  height: 150px;
`;

const ScrollBox: React.FC = ({children}) => (
  <StyledBlock>
    <Scroll>{children}</Scroll>
  </StyledBlock>
);

const titleCanHaveIcons = (
  <>
    can have Icons <IconFilledEmail />
  </>
);

const titleAndRightIcon = (
  <>
    <IconFilledEmail /> Tab
  </>
);

const titleAndLeftIcon = (
  <>
    Tab <IconFilledEmail />
  </>
);

const titleBetweenIcons = (
  <>
    <IconFilledEmail />
    tab
    <IconFilledEmail />
  </>
);

export default {
  title: 'NewsKit Light/tabs',
  component: () => 'None',
};

export const StoryTabsDistributionStart = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Distribution Start</StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs
      size={TabSize.Small}
      distribution={TabsDistribution.Start}
      divider
      initialSelectedIndex={10}
    >
      <Tab label="H tab 1" key="tab-1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <Tabs size={TabSize.Medium} divider>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>

    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs
      size={TabSize.Small}
      vertical
      divider
      distribution={TabsDistribution.Start}
    >
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} text={LoremIpsumText2} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsDistributionStart.storyName = 'tabs-distribution-start';

export const StoryTabsDistributionGrow = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Distribution - Grow</StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size={TabSize.Small} distribution={TabsDistribution.Grow} divider>
      <Tab label="H tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="H tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs
      size={TabSize.Small}
      vertical
      divider
      distribution={TabsDistribution.Grow}
    >
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsDistributionGrow.storyName = 'tabs-distribution-grow';

export const StoryTabsDistributionEqual = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Distribution - Equal</StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size={TabSize.Small} divider distribution={TabsDistribution.Equal}>
      <Tab label="H tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="H tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs
      size={TabSize.Small}
      vertical
      divider
      distribution={TabsDistribution.Equal}
    >
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsDistributionEqual.storyName = 'tabs-distribution-equal';

export const StoryTabsWithScroll = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs with fixed height in container and scroll
    </StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size={TabSize.Small} divider distribution={TabsDistribution.Equal}>
      <Tab label="H tab 1">
        <ScrollBox>
          <LoremIpsum textNumber={1} />
        </ScrollBox>
      </Tab>
      <Tab label="H tab 2">
        <ScrollBox>
          <LoremIpsum textNumber={2} />
        </ScrollBox>
      </Tab>
      <Tab label="H tab 3, three">
        <ScrollBox>
          <LoremIpsum textNumber={3} />
        </ScrollBox>
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs
      size={TabSize.Small}
      vertical
      divider
      distribution={TabsDistribution.Equal}
    >
      <Tab label="V tab 1">
        <ScrollBox>
          <LoremIpsum textNumber={1} />
        </ScrollBox>
      </Tab>
      <Tab label="V tab 2">
        <ScrollBox>
          <LoremIpsum textNumber={2} />
        </ScrollBox>
      </Tab>
      <Tab label="V tab 3, three">
        <ScrollBox>
          <LoremIpsum textNumber={3} />
        </ScrollBox>
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithScroll.storyName = 'tabs-with-scroll';

export const StoryTabsHorizontal = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Horizontal</StorybookHeading>
    <StorybookSubHeading>Small</StorybookSubHeading>

    <Tabs size={TabSize.Small}>
      <Tab label="Small tab">Content 1</Tab>
      <Tab label="Small tab">Content 2</Tab>
      <Tab label="Small tab">Content 3</Tab>
    </Tabs>

    <StorybookSubHeading>Medium</StorybookSubHeading>

    <Tabs size={TabSize.Medium}>
      <Tab label="Medium tab">Content 1</Tab>
      <Tab label="Medium tab">Content 2</Tab>
      <Tab label="Medium tab">Content 3</Tab>
    </Tabs>

    <StorybookSubHeading>Large</StorybookSubHeading>

    <Tabs size={TabSize.Large}>
      <Tab label="Large tab">Content 1</Tab>
      <Tab label="Large tab">Content 2</Tab>
      <Tab label="Large tab">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsHorizontal.storyName = 'tabs-horizontal';

export const StoryTabsHorizontalIconLabel = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Horizontal Label / Icon</StorybookHeading>
    <StorybookSubHeading>Label Only</StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Icon Only</StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsHorizontalIconLabel.storyName = 'tabs-horizontal-icon-label';

export const StoryTabsVerticalIconLabel = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Vertical Label / Icon</StorybookHeading>
    <StorybookSubHeading>Label Only</StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider vertical>
      <Tab ariaLabel="tab label" label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label="Medium tab" disabled>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label="Medium tab">
        <LoremIpsum textNumber={3} />
      </Tab>
      <Tab ariaLabel="tab label" label="Medium tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Icon Only</StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider vertical>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />} disabled>
        <LoremIpsum textNumber={3} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={4} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsVerticalIconLabel.storyName = 'tabs-vertical-icon-label';

export const StoryTabsHorizontalIconAndLabel = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Horizontal Icon and Label</StorybookHeading>
    <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
    <Tabs size={TabSize.Small} divider>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>
      Leading and Trailing Icon and Label
    </StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsHorizontalIconAndLabel.storyName = 'tabs-horizontal-icon-and-label';

export const StoryTabsVerticalIconAndLabel = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Vertical Icon and Label</StorybookHeading>
    <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider vertical>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>
      Leading and Trailing Icon and Label
    </StorybookSubHeading>
    <Tabs size={TabSize.Large} divider vertical>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsVerticalIconAndLabel.storyName = 'tabs-vertical-icon-and-label';

export const StoryTabsVertical = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Vertical</StorybookHeading>
    <StorybookSubHeading>Small</StorybookSubHeading>
    <Tabs size={TabSize.Small} vertical>
      <Tab label="Small tab">Content 1</Tab>
      <Tab label="Small tab">Content 2</Tab>
      <Tab label="Small tab">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Medium</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical>
      <Tab label="Medium tab">Content 1</Tab>
      <Tab label="Medium tab">Content 2</Tab>
      <Tab label="Medium tab">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Large</StorybookSubHeading>
    <Tabs size={TabSize.Large} vertical>
      <Tab label="Large tab">Content 1</Tab>
      <Tab label="Large tab">Content 2</Tab>
      <Tab label="Large tab">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsVertical.storyName = 'tabs-vertical';

export const StoryTabsVerticalVariantsLabelOrIcon = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Vertical Variants (Label or Icon)</StorybookHeading>
    <StorybookSubHeading>Label Only</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical divider>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Icon Only</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical divider>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        Content 1
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        Content 2
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        Content 3
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsVerticalVariantsLabelOrIcon.storyName =
  'tabs-vertical-variants-label-or-icon';

export const StoryTabsVerticalVariantsIconPlacement = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Vertical Variants (Icon Placement)</StorybookHeading>
    <StorybookSubHeading>Leading Icon and Label</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical divider>
      <Tab label={titleAndRightIcon}>Content 1</Tab>
      <Tab label={titleAndRightIcon}>Content 2</Tab>
      <Tab label={titleAndRightIcon}>Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical divider>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        Content 1
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        Content 2
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        Content 3
      </Tab>
    </Tabs>
    <StorybookSubHeading>
      Leading and Trailing Icon and Label
    </StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical divider>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        Content 1
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        Content 2
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        Content 3
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsVerticalVariantsIconPlacement.storyName =
  'tabs-vertical-variants-icon-placement';

export const StoryTabsHorizontalIndicatorPositionVariants = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs Horizontal Indicator Position Variants
    </StorybookHeading>
    <StorybookSubHeading>Indicator position Start</StorybookSubHeading>
    <Tabs size={TabSize.Medium} indicatorPosition={TabsIndicatorPosition.Start}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position End (default)</StorybookSubHeading>
    <Tabs size={TabSize.Medium}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position None</StorybookSubHeading>
    <Tabs size={TabSize.Medium} indicatorPosition={TabsIndicatorPosition.None}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsHorizontalIndicatorPositionVariants.storyName =
  'tabs-horizontal-indicator-position-variants';

export const StoryTabsVerticalIndicatorPositionVariants = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs Vertical Indicator Position Variants
    </StorybookHeading>
    <StorybookSubHeading>Indicator position Start</StorybookSubHeading>
    <Tabs
      size={TabSize.Medium}
      vertical
      indicatorPosition={TabsIndicatorPosition.Start}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position End (default)</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position None</StorybookSubHeading>
    <Tabs
      size={TabSize.Medium}
      vertical
      indicatorPosition={TabsIndicatorPosition.None}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsVerticalIndicatorPositionVariants.storyName =
  'tabs-vertical-indicator-position-variants';

export const StoryTabsContent = () => (
  <React.Fragment>
    <StorybookHeading>Tabs Content</StorybookHeading>
    <StorybookSubHeading>Tab with content</StorybookSubHeading>
    <Tabs size={TabSize.Medium} divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tab vertical with content</StorybookSubHeading>
    <Tabs size={TabSize.Medium} vertical divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsContent.storyName = 'tabs-content';

export const StoryTabsWithDisabledTab = () => (
  <React.Fragment>
    <StorybookHeading>Tabs With Disabled Tab</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two" disabled>
        Content 3
      </Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs vertical>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two" disabled>
        Content 3
      </Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithDisabledTab.storyName = 'tabs-with-disabled-tab';

export const StoryTabsWithFixedTabIndicatorSize = () => (
  <React.Fragment>
    <StorybookHeading>Tabs With Fixed Tab Indicator Size</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs overrides={{selectionIndicator: {indicator: {size: 'sizing050'}}}}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{selectionIndicator: {indicator: {size: 'sizing030'}}}}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithFixedTabIndicatorSize.storyName =
  'tabs-with-fixed-tab-indicator-size';

export const StoryTabsWithFixedTabIndicatorPercentageSize = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs With Fixed Tab Indicator Percentage Size
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs overrides={{selectionIndicator: {indicator: {size: '75%'}}}}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs vertical overrides={{selectionIndicator: {indicator: {size: '75%'}}}}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 1</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithFixedTabIndicatorPercentageSize.storyName =
  'tabs-with-fixed-tab-indicator-percentage-size';

export const StoryTabsWithFixedTabIndicatorPixelSize = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs With Fixed Tab Indicator Pixel Size
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs overrides={{selectionIndicator: {indicator: {size: '30px'}}}}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{selectionIndicator: {indicator: {size: '30px'}}}}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 1</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithFixedTabIndicatorPixelSize.storyName =
  'tabs-with-fixed-tab-indicator-pixel-size';

export const StoryTabsWithCustomTabBarTrackAndIndicatorWeight = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs With Custom Tab Bar Track And Indicator Weight
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs
      overrides={{
        selectionIndicator: {
          track: {
            weight: 'borderWidth030',
          },
          indicator: {
            weight: 'borderWidth030',
          },
        },
      }}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
      <Tab label="Tab Four">Content 4</Tab>
    </Tabs>
    <div style={{height: '100px'}} />
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{
        selectionIndicator: {
          track: {
            weight: 'borderWidth030',
          },
          indicator: {
            weight: 'borderWidth030',
          },
        },
      }}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
      <Tab label="Tab Four">Content 4</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithCustomTabBarTrackAndIndicatorWeight.storyName =
  'tabs-with-custom-tab-bar-track-and-indicator-weight';

export const StoryTabsWithCustomTabBarIndicatorAnimation = () => (
  <React.Fragment>
    <StorybookHeading>
      Tabs With Custom Tab Bar Indicator Animation
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs
      overrides={{
        selectionIndicator: {
          indicator: {
            motionDuration: 'motionDuration040',
            motionTiming: 'motionEaseIn',
          },
        },
      }}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
      <Tab label="Tab Four">Content 4</Tab>
    </Tabs>
    <br />
    <br />
    <Spacer />
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{
        selectionIndicator: {
          indicator: {
            motionDuration: 'motionDuration040',
            motionTiming: 'motionEaseIn',
          },
        },
      }}
    >
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
      <Tab label="Tab Four">Content 4</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithCustomTabBarIndicatorAnimation.storyName =
  'tabs-with-custom-tab-bar-indicator-animation';
StoryTabsWithCustomTabBarIndicatorAnimation.parameters = {
  eyes: {include: false},
};

export const StoryTabsWithPresetsOverrides = () => (
  <React.Fragment>
    <StorybookHeading>Tabs with presets overides</StorybookHeading>
    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <Tabs
        size={TabSize.Small}
        overrides={{
          spaceInline: {
            xs: 'space010',
            lg: 'space080',
          },
          tab: {
            spaceInline: 'space020',
          },
          selectionIndicator: {
            track: {
              stylePreset: 'tabsBarTrackCustomPreset',
              weight: 'borderWidth030',
            },
            indicator: {
              stylePreset: 'tabsBarIndicatorCustomPreset',
              weight: 'borderWidth030',
            },
          },
          divider: {
            stylePreset: 'dividerCustomPreset',
          },
        }}
        vertical
        divider
        distribution={TabsDistribution.Grow}
      >
        <Tab label="V tab 1">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="V tab 2">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="V tab 3, three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </ThemeProvider>
  </React.Fragment>
);
StoryTabsWithPresetsOverrides.storyName = 'tabs-with-presets-overrides';

export const StoryTabsWithAlign = () => (
  <React.Fragment>
    <StorybookHeading>Tabs With Align</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal Align Left</StorybookSubHeading>
    <Tabs align={TabAlign.Start} distribution={TabsDistribution.Grow}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>

    <StorybookSubHeading>Tabs Horizontal Align Right</StorybookSubHeading>
    <Tabs align={TabAlign.End} distribution={TabsDistribution.Grow}>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>

    <StorybookSubHeading>Tabs Vertical Align Left</StorybookSubHeading>
    <Tabs align={TabAlign.Start} distribution={TabsDistribution.Grow} vertical>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical Align Right</StorybookSubHeading>
    <Tabs align={TabAlign.End} distribution={TabsDistribution.Grow} vertical>
      <Tab label="Tab">Content 1</Tab>
      <Tab label="Tab Two">Content 2</Tab>
      <Tab label="Tab Three is Long">Content 3</Tab>
    </Tabs>
  </React.Fragment>
);
StoryTabsWithAlign.storyName = 'tabs-with-align';

export const StoryTabsWithOverflowAndScroll = () => (
  <MainContainer>
    <StorybookHeading>Tabs With Overflow and Scroll</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs>
      {Array.from(Array(15)).map((_, i) => (
        <Tab label={`Tab text here ${i}`}>Content {i}</Tab>
      ))}
    </Tabs>

    <hr />

    <Container>
      <Tabs>
        {Array.from(Array(15)).map((_, i) => (
          <Tab label={`Tab text here  ${i}`}>Content {i}</Tab>
        ))}
      </Tabs>
    </Container>

    <hr />
    <hr />

    <Container>
      <Tabs vertical>
        {Array.from(Array(15)).map((_, i) => (
          <Tab label={`Tab text here ${i}`}>Content {i}</Tab>
        ))}
      </Tabs>
    </Container>
  </MainContainer>
);
StoryTabsWithOverflowAndScroll.storyName = 'tabs-with-overflow-and-scroll';
StoryTabsWithOverflowAndScroll.parameters = {eyes: {include: false}};

export const StoryTabsWithScrollOverrides = () => {
  const CustomScroll = styled.div`
    max-width: 100%;
    overflow: auto;
    border: 5px solid red;
  `;

  return (
    <ThemeProvider theme={myCustomTheme}>
      <MainContainer>
        <StorybookHeading>Tabs With Scroll Overrides</StorybookHeading>
        <StorybookSubHeading>
          Tabs Horizontal With Scroll Overridies via Component
        </StorybookSubHeading>
        <Tabs
          overrides={{
            scroll: ({children, vertical}) => (
              <Scroll controls="hover" snapAlign="center" vertical={vertical}>
                {children}
              </Scroll>
            ),
          }}
        >
          {Array.from(Array(15)).map((_, i) => (
            <Tab label={`Tab text here ${i}`}>Content {i}</Tab>
          ))}
        </Tabs>
        <hr />
        <Tabs
          overrides={{
            scroll: ({children}) => <CustomScroll>{children}</CustomScroll>,
          }}
        >
          {Array.from(Array(15)).map((_, i) => (
            <Tab label={`Tab text here  ${i}`}>Content {i}</Tab>
          ))}
        </Tabs>

        <StorybookSubHeading>
          Tabs Horizontal With Scroll Overridies via Props
        </StorybookSubHeading>
        <Tabs
          overrides={{
            scroll: {
              props: {
                scrollBar: true,
                controls: 'hover',
                overrides: {
                  controls: {
                    button: {
                      stylePreset: 'scrollArrowsCustom',
                    },
                    offset: '0px',
                  },
                },
              },
            },
          }}
        >
          {Array.from(Array(15)).map((_, i) => (
            <Tab label={`Tab text here ${i}`}>Content {i}</Tab>
          ))}
        </Tabs>
      </MainContainer>
    </ThemeProvider>
  );
};
StoryTabsWithScrollOverrides.storyName = 'tabs-with-scroll-overrides';
