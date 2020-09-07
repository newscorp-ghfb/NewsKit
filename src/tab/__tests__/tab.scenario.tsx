import * as React from 'react';
import {Tab, TabSize} from '..';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconSizeKeys, createTheme, ThemeProvider} from '../../theme';
import {Pause, Email, CopyLink} from '../../icons';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;

const tabSizes: Array<{
  tabSize: TabSize;
  iconSize: IconSizeKeys;
}> = [
  {tabSize: TabSize.Small, iconSize: 'iconSize010'},
  {tabSize: TabSize.Medium, iconSize: 'iconSize020'},
  {tabSize: TabSize.Large, iconSize: 'iconSize030'},
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
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {
              <Cell xs={4} sm={3}>
                <Stack
                  spaceInline="sizing020"
                  stackDistribution={StackDistribution.SpaceEvenly}
                >
                  <h2>Tab</h2>
                  <Block data-state="Default">
                    <Tab ariaLabel="tab label" overrides={{stylePreset: 'tab'}}>
                      Tab Label
                    </Tab>
                  </Block>

                  <Block data-state="Selected">
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
              <Spacer>
                <Stack flow="horizontal-center" spaceInline="sizing060">
                  {tabSizes.map(tab => (
                    <Tab size={tab.tabSize} ariaLabel="icon tab">
                      <IconType size={tab.iconSize} />
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
              <Spacer>
                <Stack flow="horizontal-center" spaceInline="sizing060">
                  {tabSizes.map(tab => (
                    <Tab size={tab.tabSize} ariaLabel="tab label">
                      <IconType size={tab.iconSize} />
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
              <Stack flow="horizontal-center" spaceInline="sizing060">
                <Tab
                  isSelected
                  ariaLabel="tab label"
                  overrides={{
                    stylePreset: 'tabCustom',
                    typographyPreset: 'label030',
                    space: 'sizing030',
                  }}
                >
                  <Email />
                  Tab Label
                  <Email />
                </Tab>
              </Stack>
            </ThemeProvider>
          </Container>
        </React.Fragment>
      ),
      name: 'tab-with-overrides',
      type: 'story',
    },
  ],
};
