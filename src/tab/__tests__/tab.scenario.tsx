import * as React from 'react';
import {Tab, TabSize} from '..';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {Pause, Email, CopyLink} from '../../icons';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {TabGroup, TabPane} from '../../tab-group';
import {getSSRId} from '../../utils/get-ssr-id';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;

const tabSizes: Array<{
  tabSize: TabSize;
}> = [
  {tabSize: TabSize.Small},
  {tabSize: TabSize.Medium},
  {tabSize: TabSize.Large},
];

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('xs')} {
    &::before {
      content: none;
    }
  }
`;

const myCustomTheme = createTheme({
  name: 'my-custom-tab-theme',
  overrides: {
    stylePresets: {
      tabCustom: {
        selected: {
          borderStyle: 'solid',
          borderColor: '#0a68c1',
        },
      },
    },
  },
});

const states = ['Default', 'Selected', 'Hover', 'Active', 'Disabled', 'Focus'];

export default {
  name: 'tab',
  children: [
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Size</StorybookHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="sizing070"
              spaceInline="sizing070"
              wrap="wrap"
              role="tablist"
            >
              <Tab size={TabSize.Small} ariaLabel="small tab">
                Small tab
              </Tab>
              <Tab size={TabSize.Medium} ariaLabel="medium tab">
                Medium tab
              </Tab>
              <Tab size={TabSize.Large} ariaLabel="large tab">
                Large tab
              </Tab>
            </Stack>
          </Container>
        </React.Fragment>
      ),
      name: 'tab-size',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab States</StorybookHeading>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h2>State</h2>
                {states.map(state => (
                  <Label key={getSSRId()}>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {
              <Cell xs={4} sm={3}>
                <Stack
                  spaceInline="sizing020"
                  stackDistribution={StackDistribution.SpaceEvenly}
                  role="tablist"
                >
                  <h2>Tab</h2>
                  <Block role="tablist" data-state="Default">
                    <Tab ariaLabel="tab label" overrides={{stylePreset: 'tab'}}>
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Selected" role="tablist">
                    <Tab
                      ariaLabel="tab label"
                      isSelected
                      overrides={{stylePreset: 'tab'}}
                    >
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Hover">
                    <Tab ariaLabel="tab label" overrides={{stylePreset: 'tab'}}>
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Active">
                    <Tab ariaLabel="tab label" overrides={{stylePreset: 'tab'}}>
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Disabled">
                    <Tab
                      disabled
                      ariaLabel="tab label"
                      overrides={{stylePreset: 'tab'}}
                    >
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Focus">
                    <Tab ariaLabel="tab label" overrides={{stylePreset: 'tab'}}>
                      Tab Label
                    </Tab>
                  </Block>
                </Stack>
              </Cell>
            }
          </Grid>
        </React.Fragment>
      ),
      name: 'tab-states',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab - Icon</StorybookHeading>
          <Container>
            {[Pause, Email, CopyLink].map(IconType => (
              <Spacer key={getSSRId()}>
                <Stack
                  flow="horizontal-center"
                  spaceInline="sizing060"
                  role="tablist"
                >
                  {tabSizes.map(tab => (
                    <Tab
                      key={getSSRId()}
                      size={tab.tabSize}
                      ariaLabel="icon tab"
                    >
                      <IconType />
                    </Tab>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
        </React.Fragment>
      ),
      name: 'tab-icon',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab - Icon and Label</StorybookHeading>
          <Container>
            {[Pause, Email, CopyLink].map(IconType => (
              <Spacer key={getSSRId()}>
                <Stack
                  flow="horizontal-center"
                  spaceInline="sizing060"
                  role="tablist"
                >
                  {tabSizes.map(tab => (
                    <Tab
                      key={getSSRId()}
                      size={tab.tabSize}
                      ariaLabel="tab label"
                    >
                      <IconType />
                      Tab Label
                    </Tab>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
        </React.Fragment>
      ),
      name: 'tab-icon & label',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab With Overrides</StorybookHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Stack
                flow="horizontal-center"
                spaceInline="sizing060"
                role="tablist"
              >
                <Tab
                  isSelected
                  ariaLabel="tab label"
                  overrides={{
                    stylePreset: 'tabCustom',
                    typographyPreset: 'label030',
                    spaceInline: 'sizing030',
                  }}
                >
                  <Email />
                  Tab Label
                  <Email size="iconSize040" />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
        </React.Fragment>
      ),
      name: 'tab-with-overrides',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Tab With default IconSize and inline overridden icon size
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Stack
                role="tablist"
                flow="horizontal-center"
                spaceInline="sizing060"
              >
                <Tab isSelected ariaLabel="tab label">
                  <Email />
                  Tab Label
                  <Email size="iconSize040" />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
          <StorybookSubHeading>
            Tab With overrides for IconSize and inline overridden icon size
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Stack
                role="tablist"
                flow="horizontal-center"
                spaceInline="sizing060"
              >
                <Tab
                  isSelected
                  ariaLabel="tab label"
                  overrides={{
                    iconSize: 'iconSize030',
                  }}
                >
                  <Email />
                  Tab Label
                  <Email size="iconSize040" />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
        </React.Fragment>
      ),
      name: 'tab-with-icon-size-overrides',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group without divider</StorybookHeading>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <TabGroup size={TabSize.Small}>
            <Tab tabKey={1}>Small tab</Tab>
            <Tab tabKey={2}>Small tab</Tab>
            <Tab tabKey={3}>Small tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <TabGroup size={TabSize.Medium}>
            <Tab tabKey={1}>Medium tab</Tab>
            <Tab tabKey={2}>Medium tab</Tab>
            <Tab tabKey={3}>Medium tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <TabGroup size={TabSize.Large}>
            <Tab tabKey={1}>Large tab</Tab>
            <Tab tabKey={2}>Large tab</Tab>
            <Tab tabKey={3}>Large tab</Tab>
          </TabGroup>
        </React.Fragment>
      ),
      name: 'tab-group-basic',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group with divider</StorybookHeading>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <TabGroup size={TabSize.Small} divider>
            <Tab tabKey={1}>Small tab</Tab>
            <Tab tabKey={2}>Small tab</Tab>
            <Tab tabKey={3}>Small tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} divider>
            <Tab tabKey={1}>Medium tab</Tab>
            <Tab tabKey={2}>Medium tab</Tab>
            <Tab tabKey={3}>Medium tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <TabGroup size={TabSize.Large} divider>
            <Tab tabKey={1}>Large tab</Tab>
            <Tab tabKey={2}>Large tab</Tab>
            <Tab tabKey={3}>Large tab</Tab>
          </TabGroup>
        </React.Fragment>
      ),
      name: 'tab-group-divider',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tab Group Variants</StorybookHeading>
          <StorybookSubHeading>Label Only</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} divider>
            <Tab tabKey={1}>Medium tab</Tab>
            <Tab tabKey={2}>Medium tab</Tab>
            <Tab tabKey={3}>Medium tab</Tab>
          </TabGroup>
          <StorybookSubHeading>Icon Only</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} divider>
            <Tab tabKey={1}>
              <Email />
            </Tab>
            <Tab tabKey={2}>
              <Email />
            </Tab>
            <Tab tabKey={3}>
              <Email />
            </Tab>
          </TabGroup>
          <StorybookSubHeading>Icon and Label</StorybookSubHeading>
          <TabGroup size={TabSize.Medium} divider>
            <Tab tabKey={1}>
              <Email />
              Medium tab
            </Tab>
            <Tab tabKey={2}>
              <Email />
              Medium tab
            </Tab>
            <Tab tabKey={3}>
              <Email />
              Medium tab
            </Tab>
          </TabGroup>
        </React.Fragment>
      ),
      name: 'tab-group-variants',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>Tab with content</StorybookSubHeading>
          <TabGroup
            size={TabSize.Medium}
            divider
            tabPanes={[
              <TabPane tabKey={1}>First tab content</TabPane>,
              <TabPane tabKey={2}>Second tab content</TabPane>,
              <TabPane tabKey={3}>Third tab content</TabPane>,
            ]}
          >
            <Tab tabKey={1}>Medium tab</Tab>
            <Tab tabKey={2}>Medium tab</Tab>
            <Tab tabKey={3}>Medium tab</Tab>
          </TabGroup>
        </React.Fragment>
      ),
      name: 'tab-group-content',
      type: 'story',
    },
  ],
};
