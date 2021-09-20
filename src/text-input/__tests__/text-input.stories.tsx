import * as React from 'react';
import {TextInput, TextInputSize} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {Block} from '../../block';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {ThemeProvider, createTheme} from '../../theme';
import {IconFilledSearch} from '../../icons';

const Container = styled.div`
  ${getMediaQueryFromTheme('md')} {
    margin: ${getSizingFromTheme('sizing100')};
  }
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

const CustomBlock = styled.div`
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

const states = ['Default', 'Focus', 'Disabled', 'Read-Only'];

export default {
  title: 'NewsKit Light/text-input',
  component: () => 'None',
  disabledRules: ['color-contrast'],
};

export const StoryTextInputSize = () => (
  <React.Fragment>
    <StorybookHeading>Text Input Sizes</StorybookHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space050"
        wrap="wrap"
      >
        <Block>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <TextInput
            size={TextInputSize.Small}
            label="Label"
            assistiveText="Assistive text"
          />
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <TextInput
            size={TextInputSize.Medium}
            label="Label"
            assistiveText="Assistive text"
          />
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <TextInput
            size={TextInputSize.Large}
            label="Label"
            assistiveText="Assistive text"
          />
        </Block>
      </Stack>
    </Container>
  </React.Fragment>
);
StoryTextInputSize.storyName = 'text-input-size';

export const StoryFullWidthTextInput = () => (
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
);
StoryFullWidthTextInput.storyName = 'full-width-text-input';

export const StoryFixedWidthTextInput = () => (
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
);
StoryFixedWidthTextInput.storyName = 'fixed-width-text-input';

export const StoryTextInputVariations = () => (
  <React.Fragment>
    <StorybookHeading>Text Input Variations</StorybookHeading>
    <StorybookSubHeading>With Hidden Label</StorybookSubHeading>
    <Container>
      <TextInput hideLabel label="Label" assistiveText="Assistive text" />
    </Container>
    <StorybookSubHeading>Without Assistive Text</StorybookSubHeading>
    <Container>
      <TextInput label="Label" />
    </Container>
    <StorybookSubHeading>With Custom Placeholder</StorybookSubHeading>
    <Container>
      <TextInput
        label="Label"
        placeholder="This is some text"
        assistiveText="Assistive text"
      />
    </Container>
  </React.Fragment>
);
StoryTextInputVariations.storyName = 'text-input-variations';

export const StoryTextInputStates = () => (
  <React.Fragment>
    <StorybookHeading>Text Input States</StorybookHeading>
    <Grid>
      <Cell xs={4} sm={4}>
        <Stack
          spaceInline="space100"
          stackDistribution={StackDistribution.Start}
        >
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {
        <Cell xs={8} sm={4}>
          <Stack
            spaceInline="space070"
            stackDistribution={StackDistribution.Start}
          >
            <CustomBlock data-state="Default">
              <TextInput label="Label" assistiveText="Assistive text" />
            </CustomBlock>

            <CustomBlock data-state="Focus">
              <TextInput
                autoFocus
                label="Label"
                assistiveText="Assistive text"
                overrides={{
                  input: {
                    stylePreset: 'textInput',
                  },
                }}
              />
            </CustomBlock>

            <CustomBlock data-state="Disabled">
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
            </CustomBlock>

            <CustomBlock data-state="Read-Only">
              <TextInput
                readOnly
                label="Label"
                assistiveText="Assistive text"
              />
            </CustomBlock>
          </Stack>
        </Cell>
      }
    </Grid>
  </React.Fragment>
);
StoryTextInputStates.storyName = 'text-input-states';

export const StoryTextInputWithOverrides = () => (
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
              typographyPreset: 'utilityLabel030',
            },
            input: {
              stylePreset: 'inputContainerCustom',
              typographyPreset: 'utilityBody030',
              spaceInset: 'spaceInset040',
              minHeight: 'sizing090',
              spaceStack: 'space000',
            },
            assistiveText: {
              stylePreset: 'inputContainerCustom',
              typographyPreset: 'utilityLabel030',
              minHeight: 'sizing050',
            },
          }}
        />
      </ThemeProvider>
    </Container>
  </React.Fragment>
);
StoryTextInputWithOverrides.storyName = 'text-input-with-overrides';

export const StoryTextInputWithLeadingIcon = () => (
  <React.Fragment>
    <StorybookHeading>Text Input With Leading Icon</StorybookHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space050"
        wrap="wrap"
      >
        <Block>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <TextInput
            size={TextInputSize.Small}
            label="Label"
            assistiveText="Assistive text"
            icon={
              <IconFilledSearch
                overrides={{
                  size: 'iconSize020',
                  stylePreset: 'inkSubtle',
                }}
              />
            }
          />
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <TextInput
            size={TextInputSize.Medium}
            label="Label"
            assistiveText="Assistive text"
            icon={
              <IconFilledSearch
                overrides={{
                  size: 'iconSize020',
                  stylePreset: 'inkSubtle',
                }}
              />
            }
          />
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <TextInput
            size={TextInputSize.Large}
            label="Label"
            assistiveText="Assistive text"
            icon={
              <IconFilledSearch
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
            }
          />
        </Block>
        <Block>
          <StorybookSubHeading>
            Medium with custom iconOffset and spaceInset
          </StorybookSubHeading>
          <TextInput
            size={TextInputSize.Medium}
            label="Label"
            assistiveText="Assistive text"
            icon={
              <IconFilledSearch
                overrides={{
                  size: 'iconSize020',
                  stylePreset: 'inkSubtle',
                }}
              />
            }
            overrides={{
              input: {
                spaceStack: 'space000',
                leadingIcon: {
                  spaceInset: 'space080',
                  iconOffset: 'space040',
                },
              },
            }}
          />
        </Block>
      </Stack>
    </Container>
  </React.Fragment>
);
StoryTextInputWithLeadingIcon.storyName = 'text-input-with-leading-icon';
