import * as React from 'react';

import {TabSize, styled} from '../..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Tab, TabAlign, Tabs, TabsDistribution} from '..';
import {IconFilledEmail} from '../../icons';

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

const Spacer = styled.div`
  margin-bottom: 2em;
`;

const StyledLoremIpsum = styled.div`
  padding: 1em;
`;

const LoremIpsum: React.FC<{textNumber: number; text?: Array<string>}> = ({
  textNumber = 1,
  text = LoremIpsumText,
}) => <StyledLoremIpsum>{text[textNumber - 1]}</StyledLoremIpsum>;

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
  name: 'tabs',
  children: [
    {
      name: 'tabs-LeftStacked',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs 2 LeftStacked</StorybookHeading>

          <StorybookSubHeading>Horizontal</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            distribution={TabsDistribution.LeftStacked}
            divider
            initialSelectedIndex={10}
          >
            <Tab title="H tab 1, one, uno, un">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title={titleCanHaveIcons}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="H tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <Spacer />

          <Tabs size={TabSize.Medium} divider>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>

          <Spacer />

          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            vertical
            divider
            distribution={TabsDistribution.LeftStacked}
          >
            <Tab title="V tab 1, one, uno, un">
              <LoremIpsum textNumber={1} text={LoremIpsumText2} />
            </Tab>
            <Tab title="V tab 2">
              <LoremIpsum textNumber={2} />
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="V tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-FittedFlex',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs FittedFlex</StorybookHeading>

          <StorybookSubHeading>Horizontal</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            distribution={TabsDistribution.FittedFlex}
            divider
          >
            <Tab title="H tab 1, one, uno, un">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="H tab 2">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="H tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <Spacer />

          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            vertical
            divider
            distribution={TabsDistribution.FittedFlex}
          >
            <Tab title="V tab 1, one, uno, un">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="V tab 2">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="V tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-FittedEqual',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs FittedEqual</StorybookHeading>

          <StorybookSubHeading>Horizontal</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            divider
            distribution={TabsDistribution.FittedEqual}
          >
            <Tab title="H tab 1, one, uno, un">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="H tab 2">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="H tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <Spacer />

          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            vertical
            divider
            distribution={TabsDistribution.FittedEqual}
          >
            <Tab title="V tab 1, one, uno, un">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="V tab 2">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="V tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-horizontal',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Horizontal</StorybookHeading>
          <StorybookSubHeading>Small</StorybookSubHeading>

          <Tabs size={TabSize.Small}>
            <Tab title="Small tab">Content 1</Tab>
            <Tab title="Small tab">Content 2</Tab>
            <Tab title="Small tab">Content 3</Tab>
          </Tabs>

          <StorybookSubHeading>Medium</StorybookSubHeading>

          <Tabs size={TabSize.Medium}>
            <Tab title="Medium tab">Content 1</Tab>
            <Tab title="Medium tab">Content 2</Tab>
            <Tab title="Medium tab">Content 3</Tab>
          </Tabs>

          <StorybookSubHeading>Large</StorybookSubHeading>

          <Tabs size={TabSize.Large}>
            <Tab title="Large tab">Content 1</Tab>
            <Tab title="Large tab">Content 2</Tab>
            <Tab title="Large tab">Content 3</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-horizontal-icon-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Horizontal Label / Icon</StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider>
            <Tab title="Tab">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="Tab Two">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="Tab Three is Long">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider>
            <Tab aria-label="tab label" title={<IconFilledEmail />}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={<IconFilledEmail />}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={<IconFilledEmail />}>
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-vertical-icon-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Vertical Label / Icon</StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider vertical>
            <Tab aria-label="tab label" title="Medium tab">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title="Medium tab" disabled>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title="Medium tab">
              <LoremIpsum textNumber={3} />
            </Tab>
            <Tab aria-label="tab label" title="Medium tab">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider vertical>
            <Tab aria-label="tab label" title={<IconFilledEmail />}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={<IconFilledEmail />}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={<IconFilledEmail />} disabled>
              <LoremIpsum textNumber={3} />
            </Tab>
            <Tab aria-label="tab label" title={<IconFilledEmail />}>
              <LoremIpsum textNumber={4} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-horizontal-icon-and-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Horizontal Icon and Label</StorybookHeading>
          <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
          <Tabs size={TabSize.Small} divider>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <StorybookSubHeading>
            Leading and Trailing Icon and Label
          </StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-vertical-icon-and-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Vertical Icon and Label</StorybookHeading>
          <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider vertical>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <StorybookSubHeading>
            Leading and Trailing Icon and Label
          </StorybookSubHeading>
          <Tabs size={TabSize.Large} divider vertical>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-vertical',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Vertical</StorybookHeading>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <Tabs size={TabSize.Small} vertical>
            <Tab title="Small tab">Content 1</Tab>
            <Tab title="Small tab">Content 2</Tab>
            <Tab title="Small tab">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical>
            <Tab title="Medium tab">Content 1</Tab>
            <Tab title="Medium tab">Content 2</Tab>
            <Tab title="Medium tab">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <Tabs size={TabSize.Large} vertical>
            <Tab title="Large tab">Content 1</Tab>
            <Tab title="Large tab">Content 2</Tab>
            <Tab title="Large tab">Content 3</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-vertical-variants-label-or-icon',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs Vertical Variants (Label or Icon)
          </StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical divider>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical divider>
            <Tab ariaLabel="tab label" title={<IconFilledEmail />}>
              Content 1
            </Tab>
            <Tab ariaLabel="tab label" title={<IconFilledEmail />}>
              Content 2
            </Tab>
            <Tab ariaLabel="tab label" title={<IconFilledEmail />}>
              Content 3
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-vertical-variants-icon-placement',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs Vertical Variants (Icon Placement)
          </StorybookHeading>
          <StorybookSubHeading>Leading Icon and Label</StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical divider>
            <Tab title={titleAndRightIcon}>Content 1</Tab>
            <Tab title={titleAndRightIcon}>Content 2</Tab>
            <Tab title={titleAndRightIcon}>Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical divider>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              Content 1
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              Content 2
            </Tab>
            <Tab aria-label="tab label" title={titleAndLeftIcon}>
              Content 3
            </Tab>
          </Tabs>
          <StorybookSubHeading>
            Leading and Trailing Icon and Label
          </StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical divider>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              Content 1
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              Content 2
            </Tab>
            <Tab aria-label="tab label" title={titleBetweenIcons}>
              Content 3
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-content',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs Content</StorybookHeading>
          <StorybookSubHeading>Tab with content</StorybookSubHeading>
          <Tabs size={TabSize.Medium} divider>
            <Tab title="Tab">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="Tab Two">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="Tab Three is Long">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
          <StorybookSubHeading>Tab vertical with content</StorybookSubHeading>
          <Tabs size={TabSize.Medium} vertical divider>
            <Tab title="Tab">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="Tab Two">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="Tab Three is Long">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-disabled-tab',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs With Disabled Tab</StorybookHeading>
          <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
          <Tabs>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two" disabled>
              Content 3
            </Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
          <Tabs vertical>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two" disabled>
              Content 3
            </Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-fixed-tab-indicator-size',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs With Fixed Tab Indicator Size
          </StorybookHeading>
          <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
          <Tabs overrides={{tabBarIndicator: {length: 'sizing050'}}}>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
          <Tabs vertical overrides={{tabBarIndicator: {length: 'sizing030'}}}>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-fixed-tab-indicator-percentage-size',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs With Fixed Tab Indicator Percentage Size
          </StorybookHeading>
          <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
          <Tabs overrides={{tabBarIndicator: {length: '75%'}}}>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
          <Tabs vertical overrides={{tabBarIndicator: {length: '75%'}}}>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 1</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-custom-tab-bar-track-and-indicator-weight',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs With Custom Tab Bar Track And Indicator Weight
          </StorybookHeading>
          <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
          <Tabs
            overrides={{
              tabBarTrack: {
                weight: 'borderWidth030',
              },
              tabBarIndicator: {
                weight: 'borderWidth030',
              },
            }}
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
            <Tab title="Tab Four">Content 4</Tab>
          </Tabs>
          <div style={{height: '100px'}} />
          <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
          <Tabs
            vertical
            overrides={{
              tabBarTrack: {
                weight: 'borderWidth030',
              },
              tabBarIndicator: {
                weight: 'borderWidth030',
              },
            }}
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
            <Tab title="Tab Four">Content 4</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-custom-tab-bar-indicator-animation',
      parameters: {eyes: {include: false}},
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs With Custom Tab Bar Indicator Animation
          </StorybookHeading>
          <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
          <Tabs
            overrides={{
              tabBarIndicator: {
                motionDuration: 'motionDuration040',
                motionTiming: 'motionEaseIn',
              },
            }}
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
            <Tab title="Tab Four">Content 4</Tab>
          </Tabs>
          <div style={{height: '100px'}} />
          <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
          <Tabs
            vertical
            overrides={{
              tabBarIndicator: {
                motionDuration: 'motionDuration040',
                motionTiming: 'motionEaseIn',
              },
            }}
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
            <Tab title="Tab Four">Content 4</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-presets-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tabs with custom inset, style preset, tabs navigation bar height,
            spaceInline
          </StorybookHeading>
          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <Tabs
            size={TabSize.Small}
            overrides={{
              tabBar: {height: 'sizing120'},
              stylePreset: 'tagPrimary',
              spaceInset: 'spaceInset040',
              tabPane: {
                typographyPreset: 'utilityHeading010',
              },
              spaceInline: {
                xs: 'space020',
                md: 'space050',
                xl: 'space080',
              },
            }}
            vertical
            divider
            distribution={TabsDistribution.FittedFlex}
          >
            <Tab title="V tab 1, one, uno, un">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab title="V tab 2">
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab title="V tab 3, three">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
    {
      name: 'tabs-with-align',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tabs With Align</StorybookHeading>
          <StorybookSubHeading>Tabs Horizontal Align Left</StorybookSubHeading>
          <Tabs
            align={TabAlign.Start}
            distribution={TabsDistribution.FittedFlex}
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>

          <StorybookSubHeading>Tabs Horizontal Align Right</StorybookSubHeading>
          <Tabs align={TabAlign.End} distribution={TabsDistribution.FittedFlex}>
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>

          <StorybookSubHeading>Tabs Vertical Align Left</StorybookSubHeading>
          <Tabs
            align={TabAlign.Start}
            distribution={TabsDistribution.FittedFlex}
            vertical
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
          <StorybookSubHeading>Tabs Vertical Align Right</StorybookSubHeading>
          <Tabs
            align={TabAlign.End}
            distribution={TabsDistribution.FittedFlex}
            vertical
          >
            <Tab title="Tab">Content 1</Tab>
            <Tab title="Tab Two">Content 2</Tab>
            <Tab title="Tab Three is Long">Content 3</Tab>
          </Tabs>
        </React.Fragment>
      ),
    },
  ],
};
