import * as React from 'react';

import {Tab, TabSize, styled} from '../..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {TabGroup, TabPane, TabsDistribution} from '..';
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

export default {
  name: 'tab-group',
  children: [
    {
      name: 'tab-group-LeftStacked',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group LeftStacked</StorybookHeading>

          <StorybookSubHeading>Horizontal</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            distribution={TabsDistribution.LeftStacked}
            divider
          >
            <Tab tabKey={0}>H tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>H tab 2</Tab>
            <Tab tabKey={2}>H tab 3, three</Tab>
          </TabGroup>
          <Spacer />

          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} text={LoremIpsumText2} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            vertical
            divider
            distribution={TabsDistribution.LeftStacked}
          >
            <Tab tabKey={0}>V tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>V tab 2</Tab>
            <Tab tabKey={2}>V tab 3, three</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-FittedFlex',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group FittedFlex</StorybookHeading>

          <StorybookSubHeading>Horizontal</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            distribution={TabsDistribution.FittedFlex}
            divider
          >
            <Tab tabKey={0}>H tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>H tab 2</Tab>
            <Tab tabKey={2}>H tab 3, three</Tab>
          </TabGroup>
          <Spacer />

          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            vertical
            divider
            distribution={TabsDistribution.FittedFlex}
          >
            <Tab tabKey={0}>V tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>V tab 2</Tab>
            <Tab tabKey={2}>V tab 3, three</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-FittedEqual',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group FittedEqual</StorybookHeading>

          <StorybookSubHeading>Horizontal</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
            distribution={TabsDistribution.FittedEqual}
          >
            <Tab tabKey={0}>H tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>H tab 2</Tab>
            <Tab tabKey={2}>H tab 3, three</Tab>
          </TabGroup>
          <Spacer />

          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            vertical
            divider
            distribution={TabsDistribution.FittedEqual}
          >
            <Tab tabKey={0}>V tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>V tab 2</Tab>
            <Tab tabKey={2}>V tab 3, three</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-horizontal',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Horizontal</StorybookHeading>
          <StorybookSubHeading>Small</StorybookSubHeading>

          <TabGroup size={TabSize.Small}>
            <Tab tabKey={0}>Small tab</Tab>
            <Tab tabKey={1}>Small tab</Tab>
            <Tab tabKey={2}>Small tab</Tab>
          </TabGroup>

          <StorybookSubHeading>Medium</StorybookSubHeading>

          <TabGroup size={TabSize.Medium}>
            <Tab tabKey={0}>Medium tab</Tab>
            <Tab tabKey={1}>Medium tab</Tab>
            <Tab tabKey={2}>Medium tab</Tab>
          </TabGroup>

          <StorybookSubHeading>Large</StorybookSubHeading>

          <TabGroup size={TabSize.Large}>
            <Tab tabKey={0}>Large tab</Tab>
            <Tab tabKey={1}>Large tab</Tab>
            <Tab tabKey={2}>Large tab</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-horizontal-icon-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Horizontal Label / Icon</StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
          >
            <Tab aria-label="tab label" tabKey={0}>
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              <IconFilledEmail />
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-vertical-icon-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Vertical Label / Icon</StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
              <TabPane tabKey={3}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
            vertical
          >
            <Tab aria-label="tab label" tabKey={0}>
              Medium tab
            </Tab>
            <Tab aria-label="tab label" tabKey={1} disabled>
              Medium tab
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              Medium tab
            </Tab>
            <Tab aria-label="tab label" tabKey={3}>
              Medium tab
            </Tab>
          </TabGroup>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
              <TabPane tabKey={3}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
            vertical
          >
            <Tab aria-label="tab label" tabKey={0}>
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2} disabled>
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={3}>
              <IconFilledEmail />
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-horizontal-icon-and-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group Horizontal Icon and Label
          </StorybookHeading>
          <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
          >
            <Tab aria-label="tab label" tabKey={0}>
              Small tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              Small tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              Small tab
              <IconFilledEmail />
            </Tab>
          </TabGroup>
          <StorybookSubHeading>
            Leading and Trailing Icon and Label
          </StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
          >
            <Tab aria-label="tab label" tabKey={0}>
              <IconFilledEmail />
              Medium tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              <IconFilledEmail />
              Medium tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              <IconFilledEmail />
              Medium tab
              <IconFilledEmail />
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-vertical-icon-and-label',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Vertical Icon and Label</StorybookHeading>
          <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
            vertical
          >
            <Tab aria-label="tab label" tabKey={0}>
              Medium tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              Medium tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              Medium tab
              <IconFilledEmail />
            </Tab>
          </TabGroup>
          <StorybookSubHeading>
            Leading and Trailing Icon and Label
          </StorybookSubHeading>
          <TabGroup
            size={TabSize.Large}
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            divider
            vertical
          >
            <Tab aria-label="tab label" tabKey={0}>
              <IconFilledEmail />
              Large tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              <IconFilledEmail />
              Large tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              <IconFilledEmail />
              Large tab
              <IconFilledEmail />
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-vertical',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Vertical</StorybookHeading>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <TabGroup size={TabSize.Small} vertical>
            <Tab tabKey={0}>Small tab</Tab>
            <Tab tabKey={1}>Small tab</Tab>
            <Tab tabKey={2}>Small tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} vertical>
            <Tab tabKey={0}>Medium tab</Tab>
            <Tab tabKey={1}>Medium tab</Tab>
            <Tab tabKey={2}>Medium tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <TabGroup size={TabSize.Large} vertical>
            <Tab tabKey={0}>Large tab</Tab>
            <Tab tabKey={1}>Large tab</Tab>
            <Tab tabKey={2}>Large tab</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-vertical-variants-label-or-icon',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group Vertical Variants (Label or Icon)
          </StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} vertical divider>
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} vertical divider>
            <Tab ariaLabel="tab label" tabKey={0}>
              <IconFilledEmail />
            </Tab>
            <Tab ariaLabel="tab label" tabKey={1}>
              <IconFilledEmail />
            </Tab>
            <Tab ariaLabel="tab label" tabKey={2}>
              <IconFilledEmail />
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-vertical-variants-icon-placement',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group Vertical Variants (Icon Placement)
          </StorybookHeading>
          <StorybookSubHeading>Leading Icon and Label</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} vertical divider>
            <Tab tabKey={0}>
              <IconFilledEmail />
              Tab
            </Tab>
            <Tab tabKey={1}>
              <IconFilledEmail />
              Tab Two
            </Tab>
            <Tab tabKey={2}>
              <IconFilledEmail />
              Tab Three is Long
            </Tab>
          </TabGroup>
          <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} vertical divider>
            <Tab aria-label="tab label" tabKey={0}>
              Tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              Tab Two
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              Tab Three is Long
              <IconFilledEmail />
            </Tab>
          </TabGroup>
          <StorybookSubHeading>
            Leading and Trailing Icon and Label
          </StorybookSubHeading>
          <TabGroup size={TabSize.Medium} vertical divider>
            <Tab aria-label="tab label" tabKey={0}>
              <IconFilledEmail />
              Tab
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={1}>
              <IconFilledEmail />
              Tab Two
              <IconFilledEmail />
            </Tab>
            <Tab aria-label="tab label" tabKey={2}>
              <IconFilledEmail />
              Tab Three is Long
              <IconFilledEmail />
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-content',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Content</StorybookHeading>
          <StorybookSubHeading>Tab with content</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            divider
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
          <StorybookSubHeading>Tab vertical with content</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            vertical
            divider
            tabPanes={[
              <TabPane tabKey={0}>
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-with-disabled-tab',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group With Disabled Tab</StorybookHeading>
          <StorybookSubHeading>Tab Group Horizontal</StorybookSubHeading>
          <TabGroup>
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1} disabled>
              Tab Two
            </Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
          <StorybookSubHeading>Tab Group Vertical</StorybookSubHeading>
          <TabGroup vertical>
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1} disabled>
              Tab Two
            </Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-with-fixed-tab-indicator-size',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group With Fixed Tab Indicator Size
          </StorybookHeading>
          <StorybookSubHeading>Tab Group Horizontal</StorybookSubHeading>
          <TabGroup overrides={{tabBarIndicator: {length: 'sizing050'}}}>
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
          <StorybookSubHeading>Tab Group Vertical</StorybookSubHeading>
          <TabGroup
            vertical
            overrides={{tabBarIndicator: {length: 'sizing030'}}}
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-with-fixed-tab-indicator-percentage-size',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group With Fixed Tab Indicator Percentage Size
          </StorybookHeading>
          <StorybookSubHeading>Tab Group Horizontal</StorybookSubHeading>
          <TabGroup overrides={{tabBarIndicator: {length: '75%'}}}>
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
          <StorybookSubHeading>Tab Group Vertical</StorybookSubHeading>
          <TabGroup vertical overrides={{tabBarIndicator: {length: '75%'}}}>
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-with-custom-tab-bar-track-and-indicator-weight',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group With Custom Tab Bar Track And Indicator Weight
          </StorybookHeading>
          <StorybookSubHeading>Tab Group Horizontal</StorybookSubHeading>
          <TabGroup
            overrides={{
              tabBarTrack: {
                weight: 'borderWidth030',
              },
              tabBarIndicator: {
                weight: 'borderWidth030',
              },
            }}
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
            <Tab tabKey={3}>Tab Four</Tab>
          </TabGroup>
          <div style={{height: '100px'}} />
          <StorybookSubHeading>Tab Group Vertical</StorybookSubHeading>
          <TabGroup
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
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
            <Tab tabKey={3}>Tab Four</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-with-custom-tab-bar-indicator-animation',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group With Custom Tab Bar Indicator Animation
          </StorybookHeading>
          <StorybookSubHeading>Tab Group Horizontal</StorybookSubHeading>
          <TabGroup
            overrides={{
              tabBarIndicator: {
                motionDuration: 'motionDuration040',
                motionTiming: 'motionEaseIn',
              },
            }}
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
            <Tab tabKey={3}>Tab Four</Tab>
          </TabGroup>
          <div style={{height: '100px'}} />
          <StorybookSubHeading>Tab Group Vertical</StorybookSubHeading>
          <TabGroup
            vertical
            overrides={{
              tabBarIndicator: {
                motionDuration: 'motionDuration040',
                motionTiming: 'motionEaseIn',
              },
            }}
          >
            <Tab tabKey={0}>Tab</Tab>
            <Tab tabKey={1}>Tab Two</Tab>
            <Tab tabKey={2}>Tab Three is Long</Tab>
            <Tab tabKey={3}>Tab Four</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
    {
      name: 'tab-group-with-presets-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Tab Group with custom inset, style preset, tabs navigation bar
            height, spaceInline
          </StorybookHeading>
          <StorybookSubHeading>Vertical</StorybookSubHeading>
          <TabGroup
            size={TabSize.Small}
            overrides={{
              tabBar: {height: 'sizing120'},
              stylePreset: 'tagPrimary',
              spaceInset: 'spaceInset040',
              spaceInline: {
                xs: 'space020',
                md: 'space050',
                xl: 'space080',
              },
            }}
            tabPanes={[
              <TabPane
                overrides={{
                  typographyPreset: 'utilityHeading010',
                }}
                tabKey={0}
              >
                <LoremIpsum textNumber={1} />
              </TabPane>,
              <TabPane tabKey={1}>
                <LoremIpsum textNumber={2} />
              </TabPane>,
              <TabPane tabKey={2}>
                <LoremIpsum textNumber={3} />
              </TabPane>,
            ]}
            vertical
            divider
            distribution={TabsDistribution.FittedFlex}
          >
            <Tab tabKey={0}>V tab 1, one, uno, un</Tab>
            <Tab tabKey={1}>V tab 2</Tab>
            <Tab tabKey={2}>V tab 3, three</Tab>
          </TabGroup>
        </React.Fragment>
      ),
    },
  ],
};
