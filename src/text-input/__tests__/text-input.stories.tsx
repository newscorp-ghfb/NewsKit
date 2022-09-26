import * as React from 'react';
import {TextInput} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Stack} from '../../stack';
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
  title: 'Components/text-input',
  component: () => 'None',
  disabledRules: ['color-contrast'],
};

export const StoryTextInputSize = () => (
  <>
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
            size="small"
            label="Label"
            assistiveText="Assistive text"
          />
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <TextInput
            size="medium"
            label="Label"
            assistiveText="Assistive text"
          />
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <TextInput
            size="large"
            label="Label"
            assistiveText="Assistive text"
          />
        </Block>
      </Stack>
    </Container>
  </>
);
StoryTextInputSize.storyName = 'text-input-size';

export const StoryFullWidthTextInput = () => (
  <>
    <StorybookHeading>Full-Width Text Input</StorybookHeading>
    <Container>
      <Border>
        <Spacer>
          <TextInput
            size="small"
            label="Label"
            assistiveText="Assistive text"
            overrides={{
              width: '100%',
            }}
          />
        </Spacer>
        <Spacer>
          <TextInput
            size="medium"
            label="Label"
            assistiveText="Assistive text"
            overrides={{
              width: '100%',
            }}
          />
        </Spacer>
        <TextInput
          size="large"
          label="Label"
          assistiveText="Assistive text"
          overrides={{
            width: '100%',
          }}
        />
      </Border>
    </Container>
  </>
);
StoryFullWidthTextInput.storyName = 'full-width-text-input';

export const StoryFixedWidthTextInput = () => (
  <>
    <StorybookHeading>Fixed-Width Text Input</StorybookHeading>
    <Container>
      <Border>
        <Spacer>
          <TextInput
            size="small"
            label="Label"
            assistiveText="Assistive text"
            overrides={{
              width: 'sizing120',
            }}
          />
        </Spacer>
        <Spacer>
          <TextInput
            size="medium"
            label="Label"
            assistiveText="Assistive text"
            overrides={{
              width: 'sizing120',
            }}
          />
        </Spacer>
        <TextInput
          size="large"
          label="Label"
          assistiveText="Assistive text"
          overrides={{
            width: 'sizing120',
          }}
        />
      </Border>
    </Container>
  </>
);
StoryFixedWidthTextInput.storyName = 'fixed-width-text-input';

export const StoryTextInputVariations = () => (
  <>
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
  </>
);
StoryTextInputVariations.storyName = 'text-input-variations';

export const StoryTextInputStates = () => (
  <>
    <StorybookHeading>Text Input States</StorybookHeading>
    <Grid>
      <Cell xs={4} sm={4}>
        <Stack spaceInline="space100" stackDistribution="flex-start">
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      <Cell xs={8} sm={4}>
        <Stack spaceInline="space070" stackDistribution="flex-start">
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
            <TextInput readOnly label="Label" assistiveText="Assistive text" />
          </CustomBlock>
        </Stack>
      </Cell>
    </Grid>
  </>
);
StoryTextInputStates.storyName = 'text-input-states';

export const StoryTextInputWithOverrides = () => (
  <>
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
  </>
);
StoryTextInputWithOverrides.storyName = 'text-input-with-overrides';

export const StoryTextInputWithLeadingIcon = () => (
  <>
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
            size="small"
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
            size="medium"
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
            size="medium"
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
            size="medium"
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
  </>
);
StoryTextInputWithLeadingIcon.storyName = 'text-input-with-leading-icon';
