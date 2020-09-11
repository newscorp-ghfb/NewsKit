import * as React from 'react';
import {TextInput, TextInputSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {ThemeProvider, createTheme} from '../../theme';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing100')};
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const Border = styled.div`
  border: solid 1px red;
`;

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  name: 'my-custom-text-input-theme',
  overrides: {
    stylePresets: {
      inputContainerCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '#D20600',
        },
      },
    },
  },
});

const states = ['Default', 'Focus', 'Hover', 'Disabled', 'Read-Only'];

export default {
  name: 'text-input',
  children: [
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Text Input Size</StorybookHeading>
          <Container>
            <Stack flow="horizontal-center" spaceInline="sizing070" wrap="wrap">
              <TextInput
                size={TextInputSize.Small}
                label="Label"
                assistiveText="Assistive text"
              />
              <TextInput
                size={TextInputSize.Medium}
                label="Label"
                assistiveText="Assistive text"
              />
              <TextInput
                size={TextInputSize.Large}
                label="Label"
                assistiveText="Assistive text"
              />
            </Stack>
          </Container>
        </React.Fragment>
      ),
      name: 'text-input-size',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Full-Width Text Input</StorybookHeading>
          <Container>
            <Border>
              <Spacer>
                <TextInput
                  size={TextInputSize.Small}
                  label="Label"
                  assistiveText="Assistive text"
                  overrides={{
                    width: '100%',
                  }}
                />
              </Spacer>
              <Spacer>
                <TextInput
                  size={TextInputSize.Medium}
                  label="Label"
                  assistiveText="Assistive text"
                  overrides={{
                    width: '100%',
                  }}
                />
              </Spacer>
              <TextInput
                size={TextInputSize.Large}
                label="Label"
                assistiveText="Assistive text"
                overrides={{
                  width: '100%',
                }}
              />
            </Border>
          </Container>
        </React.Fragment>
      ),
      name: 'full-width-text-input',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Fixed-Width Text Input</StorybookHeading>
          <Container>
            <Border>
              <Spacer>
                <TextInput
                  size={TextInputSize.Small}
                  label="Label"
                  assistiveText="Assistive text"
                  overrides={{
                    width: 'sizing120',
                  }}
                />
              </Spacer>
              <Spacer>
                <TextInput
                  size={TextInputSize.Medium}
                  label="Label"
                  assistiveText="Assistive text"
                  overrides={{
                    width: 'sizing120',
                  }}
                />
              </Spacer>
              <TextInput
                size={TextInputSize.Large}
                label="Label"
                assistiveText="Assistive text"
                overrides={{
                  width: 'sizing120',
                }}
              />
            </Border>
          </Container>
        </React.Fragment>
      ),
      name: 'fixed-width-text-input',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Text Input Hidden Label</StorybookHeading>
          <Container>
            <TextInput hideLabel label="Label" assistiveText="Assistive text" />
          </Container>
        </React.Fragment>
      ),
      name: 'text-input-hidden-label',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Text Input Without Assistive Text</StorybookHeading>
          <Container>
            <TextInput label="Label" />
          </Container>
        </React.Fragment>
      ),
      name: 'text-input-without-assistive-text',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Text Input With Custom Placeholder
          </StorybookHeading>
          <Container>
            <TextInput
              label="Label"
              placeholder="This is some text"
              assistiveText="Assistive text"
            />
          </Container>
        </React.Fragment>
      ),
      name: 'text-input-with-custom-placeholder',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Text Input States</StorybookHeading>
          <Grid>
            <Cell xsHidden sm={4}>
              <Stack
                spaceInline="sizing100"
                stackDistribution={StackDistribution.Start}
              >
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {
              <Cell xs={4} sm={4}>
                <Stack
                  spaceInline="sizing070"
                  stackDistribution={StackDistribution.Start}
                >
                  <Block data-state="Default">
                    <TextInput label="Label" assistiveText="Assistive text" />
                  </Block>

                  <Block data-state="Focus">
                    <TextInput
                      label="Label"
                      assistiveText="Assistive text"
                      overrides={{
                        input: {
                          stylePreset: 'textInput',
                        },
                      }}
                    />
                  </Block>

                  <Block data-state="Hover">
                    <TextInput
                      label="Label"
                      assistiveText="Assistive text"
                      overrides={{
                        input: {
                          stylePreset: 'textInput',
                        },
                      }}
                    />
                  </Block>

                  <Block data-state="Disabled">
                    <TextInput
                      disabled
                      label="Label"
                      assistiveText="Assistive text"
                      overrides={{
                        input: {
                          stylePreset: 'textInput',
                        },
                        assistiveText: {
                          stylePreset: 'textInputAssistiveText',
                        },
                      }}
                    />
                  </Block>

                  <Block data-state="Read-Only">
                    <TextInput
                      readOnly
                      label="Label"
                      assistiveText="Assistive text"
                    />
                  </Block>
                </Stack>
              </Cell>
            }
          </Grid>
        </React.Fragment>
      ),
      name: 'text-input-states',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Text Input With Overrides</StorybookHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <TextInput
                label="Label"
                assistiveText="Assistive text"
                overrides={{
                  label: {
                    stylePreset: 'inputContainerCustom',
                    typographyPreset: 'label030',
                  },
                  input: {
                    stylePreset: 'inputContainerCustom',
                    typographyPreset: 'body030',
                  },
                  assistiveText: {
                    stylePreset: 'inputContainerCustom',
                    typographyPreset: 'label030',
                  },
                }}
              />
            </ThemeProvider>
          </Container>
        </React.Fragment>
      ),
      name: 'text-input-with-overrides',
      type: 'story',
    },
  ],
};
