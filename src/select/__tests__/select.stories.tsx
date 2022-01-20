import * as React from 'react';

import {Select, SelectOption} from '..';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {TextFieldSize} from '../../text-field';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createTheme, ThemeProvider} from '../../theme';
import {IconFilledCheckCircle, IconFilledAccountBalance} from '../../icons';

const items = [
  'Neptunium',
  'Plutonium',
  'Americium',
  'Curium',
  'Berkelium',
  'Californium',
  'Einsteinium',
  'Fermium',
  'Mendelevium',
  'Nobelium',
  'Lawrencium',
  'Rutherfordium',
  'Dubnium',
  'Seaborgium',
  'Bohrium',
  'Hassium',
  'Meitnerium',
  'Darmstadtium',
  'Roentgenium',
  'Copernicium',
  'Nihonium',
  'Flerovium',
  'Moscovium',
  'Livermorium',
  'Tennessine',
  'Oganesson',
];

const Container = styled.div`
  margin: 16px;
`;

const Border = styled.div`
  border: solid 1px red;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

export default {
  title: 'NewsKit Light/select',
  component: () => 'None',
};

export const StorySelectSize = () => (
  <>
    <StorybookHeading>Select sizes</StorybookHeading>
    <Container>
      <Stack flow="vertical-left" spaceInline="space040">
        <Block>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <Label htmlFor="id-1" size={'small' as TextFieldSize}>
            Label
          </Label>
          <Select aria-describedby="id-1-at" id="id-1" size="small">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-1-at" size={'small' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <Label htmlFor="id-2" size={'medium' as TextFieldSize}>
            Label
          </Label>
          <Select aria-describedby="id-2-at" id="id-2" size="medium">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-2-at" size={'medium' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <Label htmlFor="id-3" size={'large' as TextFieldSize}>
            Label
          </Label>
          <Select aria-describedby="id-3-at" id="id-3" size="large">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-3-at" size={'large' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </Block>
      </Stack>
    </Container>
  </>
);
StorySelectSize.storyName = 'Select sizes';

export const StoryFullWidthSelect = () => (
  <>
    <StorybookHeading>Full width select</StorybookHeading>
    <Container>
      <Border>
        <Spacer>
          <Select size="small" overrides={{button: {width: '100%'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Spacer>
          <Select size="medium" overrides={{button: {width: '100%'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Select size="large" overrides={{button: {width: '100%'}}}>
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </Border>
    </Container>
  </>
);
StoryFullWidthSelect.storyName = 'Full width select';

export const StoryFixedWidthSelect = () => (
  <>
    <StorybookHeading>Fixed width select</StorybookHeading>
    <Container>
      <Border>
        <Spacer>
          <Select size="small" overrides={{button: {width: '150px'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Spacer>
          <Select size="medium" overrides={{button: {width: '150px'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Select size="large" overrides={{button: {width: '150px'}}}>
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </Border>
    </Container>
  </>
);
StoryFixedWidthSelect.storyName = 'Fixed width select';

export const StoryMaxWidthSelect = () => (
  <>
    <StorybookHeading>Max width select</StorybookHeading>
    <Container>
      <Border>
        <Spacer>
          <Select size="small" overrides={{button: {maxWidth: '150px'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Spacer>
          <Select size="medium" overrides={{button: {maxWidth: '150px'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Select size="large" overrides={{button: {maxWidth: '150px'}}}>
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </Border>
    </Container>
  </>
);
StoryMaxWidthSelect.storyName = 'Max width select';

export const StoryMinHeightSelect = () => (
  <>
    <StorybookHeading>Min height select</StorybookHeading>
    <Container>
      <Border>
        <Spacer>
          <Select size="small" overrides={{button: {minHeight: '100px'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Spacer>
          <Select size="medium" overrides={{button: {minHeight: '100px'}}}>
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Spacer>
        <Select size="large" overrides={{button: {minHeight: '100px'}}}>
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </Border>
    </Container>
  </>
);
StoryMinHeightSelect.storyName = 'Min height select';

export const StorySelectVariations = () => (
  <>
    <StorybookHeading>Select variations</StorybookHeading>
    <Container>
      <Stack flow="horizontal-center" spaceInline="space050" wrap>
        <Block>
          <StorybookSubHeading>With custom placeholder</StorybookSubHeading>
          <Select placeholder="A custom placeholder">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Block>
        <Block>
          <StorybookSubHeading>Disabled</StorybookSubHeading>
          <Select state="disabled" placeholder="Disabled">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Block>
        <Block>
          <StorybookSubHeading>Loading</StorybookSubHeading>
          <Select loading placeholder="Loading">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Block>
        <Block>
          <StorybookSubHeading>With selected icon override</StorybookSubHeading>
          <Select>
            {items.map(item => (
              <SelectOption
                selectedIcon={
                  <IconFilledCheckCircle overrides={{size: 'iconSize020'}} />
                }
                key={item}
                value={item}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
        </Block>
        <Block>
          <StorybookSubHeading>
            Option with custom selected display
          </StorybookSubHeading>
          <Select>
            <SelectOption
              selectedIcon={
                <IconFilledCheckCircle overrides={{size: 'iconSize020'}} />
              }
              value="normal display"
            >
              Normal option
            </SelectOption>
            <SelectOption
              selectedDisplay={<Stack>🏎🚲🚌</Stack>}
              selectedIcon={
                <IconFilledCheckCircle overrides={{size: 'iconSize020'}} />
              }
              value="custom display"
            >
              Custom Display
            </SelectOption>
          </Select>
        </Block>
        <Block>
          <StorybookSubHeading>With a pre-selected option</StorybookSubHeading>
          <Select>
            <SelectOption value="Option 1">Option 1</SelectOption>
            <SelectOption defaultSelected value="Option 2">
              Option 2
            </SelectOption>
          </Select>
        </Block>
        <Block>
          <StorybookSubHeading>With enhancers</StorybookSubHeading>
          <Select
            startEnhancer={
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            }
            endEnhancer={
              <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            }
          >
            <SelectOption value="Option 1">Option 1</SelectOption>
            <SelectOption value="Option 2">Option 2</SelectOption>
          </Select>
        </Block>
      </Stack>
    </Container>
  </>
);
StorySelectVariations.storyName = 'Select variations';

const myCustomTheme = createTheme({
  name: 'my-custom-select-theme',
  overrides: {
    stylePresets: {
      selectContainerCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '#D20600',
          placeholderColor: 'blue',
        },
      },
      selectPanelCustom: {
        base: {
          backgroundColor: 'red',
        },
      },
      selectOptionCustom: {
        base: {
          backgroundColor: 'yellow',
        },
      },
      labelOverrides: {
        base: {
          color: '#325C00',
        },
      },
      assistiveTextOverrides: {
        base: {
          color: '#325C00',
        },
      },
    },
  },
});

export const StorySelectOverrides = () => (
  <>
    <StorybookHeading>Select with overrides</StorybookHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Container>
          <StorybookSubHeading>
            Select loading with overrides
          </StorybookSubHeading>
          <Label
            htmlFor="id-6"
            overrides={{
              stylePreset: 'labelOverrides',
            }}
          >
            Label
          </Label>
          <Select
            id="id-6"
            aria-describedby="id-6-at"
            loading
            overrides={{
              button: {
                stylePreset: 'selectContainerCustom',
                typographyPreset: 'utilityButton010',
                spaceStack: 'space050',
                loadingIndicator: {
                  stylePreset: 'indeterminateProgressIndicatorNegative',
                },
              },
              panel: {
                maxHeight: '100px',
                stylePreset: 'selectPanelCustom',
                spaceInset: 'spaceInset050',
                spaceStack: 'space020',
              },
            }}
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText
            id="id-6-at"
            overrides={{
              stylePreset: 'assistiveTextOverrides',
            }}
          >
            Assistive Text
          </AssistiveText>
        </Container>
        <Container>
          <StorybookSubHeading>
            Select with overrides on menu items
          </StorybookSubHeading>
          <Label
            htmlFor="id-7"
            overrides={{
              stylePreset: 'labelOverrides',
            }}
          >
            Label
          </Label>
          <Select
            id="id-7"
            aria-describedby="id-7-at"
            overrides={{
              button: {
                stylePreset: 'selectContainerCustom',
                typographyPreset: 'utilityButton010',
                spaceStack: 'space050',
              },
              panel: {
                maxHeight: '100px',
                stylePreset: 'selectPanelCustom',
                spaceInset: 'spaceInset050',
                spaceStack: 'space020',
              },
            }}
          >
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                overrides={{
                  spaceInset: 'space050',
                  typographyPreset: 'utilityButton010',
                  stylePreset: 'selectOptionCustom',
                }}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText
            id="id-7-at"
            overrides={{
              stylePreset: 'assistiveTextOverrides',
            }}
          >
            Assistive Text
          </AssistiveText>
        </Container>
        <Container>
          <StorybookSubHeading>
            Select with minHeight override on menu items
          </StorybookSubHeading>
          <Label
            htmlFor="id-8"
            overrides={{
              stylePreset: 'labelOverrides',
            }}
          >
            Label
          </Label>
          <Select id="id-8" aria-describedby="id-8-at">
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                overrides={{
                  minHeight: '100px',
                }}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText id="id-8-at">Assistive Text</AssistiveText>
        </Container>
      </ThemeProvider>
    </Container>
  </>
);
StorySelectOverrides.storyName = 'Select with overrides';

export const StorySelectOptionsDisplay = () => (
  <>
    <StorybookHeading>
      Examples of ways to display selected options
    </StorybookHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Block>
          <StorybookSubHeading>
            Displaying options as-is, including the padding
          </StorybookSubHeading>
          <Label htmlFor="id-9">Label</Label>
          <Select id="id-9" aria-describedby="id-9-at">
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                overrides={{
                  spaceInset: 'space050',
                }}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText id="id-9-at">Assistive Text</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>
            Rendering only option value, using <code>selectedDisplay</code>
          </StorybookSubHeading>
          <Label htmlFor="id-10">Label</Label>
          <Select id="id-10" aria-describedby="id-10-at">
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                selectedDisplay={item}
                overrides={{
                  spaceInset: 'space050',
                }}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText id="id-10-at">Assistive Text</AssistiveText>
        </Block>
      </ThemeProvider>
    </Container>
  </>
);
StorySelectOptionsDisplay.storyName = 'Select option display';

export const StorySelectScreenReaderExample = () => (
  <>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Block>
          <StorybookSubHeading>With Assistive Text</StorybookSubHeading>
          <Label htmlFor="id-11" id="id-11-label">
            Choose an element
          </Label>
          <Select
            id="id-11"
            aria-labelledby="id-11-label id-11"
            aria-describedby="id-11-at"
          >
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                aria-label={`Testing if aria labels work ${item}`}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText id="id-11-at">Assistive Text</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Without Assistive Text</StorybookSubHeading>
          <Label htmlFor="id-12" id="id-12-label">
            Choose an element
          </Label>
          <Select id="id-12" aria-labelledby="id-12-label id-12">
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                aria-label={`Testing if aria labels work ${item}`}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
        </Block>
      </ThemeProvider>
    </Container>
  </>
);
StorySelectScreenReaderExample.storyName = 'Select screen reader example';

export const StorySelectWithLayoutProps = () => (
  <>
    <StorybookSubHeading>With LayoutProps</StorybookSubHeading>
    <div style={{background: 'red', overflow: 'overlay'}}>
      <ThemeProvider theme={myCustomTheme}>
        <Select
          id="id-13"
          overrides={{
            button: {
              width: '200px',
              spaceStack: 'unset',
              marginInline: 'space060',
              marginBlock: 'space060',
            },
            panel: {
              marginInline: 'space060',
            },
          }}
        >
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </ThemeProvider>
    </div>
  </>
);
StorySelectWithLayoutProps.storyName = 'Select with LayoutProps';
