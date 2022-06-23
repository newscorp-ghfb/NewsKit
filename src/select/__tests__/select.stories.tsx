import * as React from 'react';

import {Select, SelectOption} from '..';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {TextFieldSize} from '../../text-field';
import {Tabs, Tab} from '../../tabs';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createTheme, ThemeProvider} from '../../theme';
import {
  IconFilledCheckCircle,
  IconFilledAccountBalance,
  IconFilledClose,
} from '../../icons';
import {Modal, ModalProps} from '../../modal';
import {Button} from '../../button/button';
import {InlineMessage} from '../../inline-message';
import {GridLayout} from '../../grid-layout';
import {countries} from './phone-countries';

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

export const StorySelectLogicalProps = () => (
  <>
    <StorybookHeading>Select with overrides</StorybookHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Container>
          <StorybookSubHeading>
            Select with logical prop overrides
          </StorybookSubHeading>
          <Label
            htmlFor="id-logical-props"
            overrides={{
              stylePreset: 'labelOverrides',
            }}
          >
            Label
          </Label>
          <Select
            id="id-logical-props"
            aria-describedby="id-logical-props-at"
            overrides={{
              button: {
                marginInline: '40px',
                paddingBlock: '20px',
                width: 'unset',
              },
              panel: {
                paddingInline: '30px',
                marginBlock: '30px',
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
          <AssistiveText id="id-logical-props-at">Assistive Text</AssistiveText>
        </Container>
        <Container>
          <StorybookSubHeading>
            Select with logical prop item overrides
          </StorybookSubHeading>
          <Label
            htmlFor="id-item-logical-props"
            overrides={{
              stylePreset: 'labelOverrides',
            }}
          >
            Label
          </Label>
          <Select
            id="id-item-logical-props"
            aria-describedby="id-item-logical-props-at"
          >
            {items.map(item => (
              <SelectOption
                key={item}
                value={item}
                overrides={{
                  paddingInline: '10px',
                  marginBlock: '10px',
                  stylePreset: 'selectOptionCustom',
                }}
              >
                {item}
              </SelectOption>
            ))}
          </Select>
          <Block spaceStack="space020" />
          <AssistiveText id="id-item-logical-props-at">
            Assistive Text
          </AssistiveText>
        </Container>
      </ThemeProvider>
    </Container>
  </>
);
StorySelectLogicalProps.storyName = 'Select with logical props';

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

const CustomModalContainer = styled.div`
  height: 250px;
  overflow-x: auto;
`;

const selectWithModalVariants = [
  {
    label: 'default',
    props: {overrides: {button: {width: '100%'}}},
  },
  {
    label: 'style overrides',
    props: {
      overrides: {
        button: {width: '100%'},
        modal: {
          header: {spaceInset: 'space000'},
          panel: {maxHeight: '50vh', maxWidth: '280px'},
          content: {spaceInset: 'space010'},
          closeButton: {spaceInset: 'space000'},
        },
      },
    },
  },
  {
    label: 'props override',
    props: {
      overrides: {
        button: {width: '100%'},
        modal: {
          props: {
            header: 'make your selection',
            closePosition: 'none',
          },
        },
      },
    },
  },
  {
    label: 'component override',
    props: {
      overrides: {
        button: {width: '100%'},
        modal: ({children, ...restProps}: ModalProps) => (
          <Modal {...restProps} closePosition="none">
            <CustomModalContainer>{children}</CustomModalContainer>
            <Block spaceStack="space040" />
            <Button
              onClick={restProps?.onDismiss}
              aria-label="close"
              overrides={{width: '100%'}}
            >
              Close <IconFilledClose />
            </Button>
          </Modal>
        ),
      },
    },
  },
];

export const StorySelectInModal = () => {
  const selectOptions = items.map(item => (
    <SelectOption key={item} value={item}>
      {item}
    </SelectOption>
  ));

  return (
    <>
      <StorybookHeading>Select useModal</StorybookHeading>
      <Container>
        <Block spaceStack="space050">
          <InlineMessage>
            In order to open select options inside a modal you need to resize
            your screen to <b>xs</b> or <b>sm</b> breakpoints. Or use the device
            dropdown and choose the appropriate one.
          </InlineMessage>
        </Block>
        {selectWithModalVariants.map(({label, props}, indx) => (
          <Block spaceStack="space050">
            <Label htmlFor={`id-modal-${indx}`} size={'small' as TextFieldSize}>
              Select with modal ( {label} )
            </Label>
            <Select
              aria-describedby={`id-modal-${indx}-at`}
              id={`id-modal-${indx}`}
              size="small"
              useModal={{xs: true, sm: true}}
              {...props}
            >
              {selectOptions}
            </Select>
            <AssistiveText
              id={`id-modal-${indx}-at`}
              size={'small' as TextFieldSize}
            >
              Assistive Text
            </AssistiveText>
          </Block>
        ))}
      </Container>
    </>
  );
};
StorySelectInModal.storyName = 'useModal';

export const SelectVirtualization = () => {
  const selectOptions = countries.map(({value, name}) => (
    <SelectOption value={value} key={value} aria-label={name}>
      <GridLayout columns="auto 1fr" columnGap="space020" alignItems="center">
        <img
          src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
          width="16"
          height="12"
          alt={name}
        />
        <span>{name}</span>
      </GridLayout>
    </SelectOption>
  ));

  const selectOptionsSimple = countries.map(({name}) => (
    <SelectOption key={name} value={name}>
      {name}
    </SelectOption>
  ));

  return (
    <>
      <Container>
        <StorybookHeading>Select with virtualization</StorybookHeading>
        <Block spaceStack="space050">
          <Label htmlFor="countries" size={'medium' as TextFieldSize}>
            Select your country ( virtualized )
          </Label>
          <Select
            aria-describedby="countries-at"
            id="countries"
            size="medium"
            useModal={{xs: true}}
            virtualized={50}
          >
            {selectOptions}
          </Select>
          <AssistiveText id="countries-at" size={'small' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </Block>
        <Block spaceStack="space050">
          <Label htmlFor="simple-data" size={'medium' as TextFieldSize}>
            Simple data ( virtualized )
          </Label>
          <Select
            aria-describedby="simple-data-at"
            id="simple-data"
            size="medium"
            useModal={{xs: true}}
            virtualized={50}
          >
            {selectOptionsSimple}
          </Select>
          <AssistiveText id="simple-data-at" size={'small' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </Block>
      </Container>
    </>
  );
};

export const StorySelectControlled = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Container>
      <Block>
        <Label htmlFor="controlled">Controlled</Label>
        <Select
          aria-describedby="id-controlled-at"
          id="controlled"
          size="medium"
          onChange={handleChange}
        >
          {items.map(item => (
            <SelectOption
              key={item}
              value={item}
              selected={item === selectedValue}
            >
              {item}
            </SelectOption>
          ))}
        </Select>
        <AssistiveText id="id-controlled-at">Assistive text</AssistiveText>
        <Button onClick={() => setSelectedValue('Fermium')}>
          Make Fermium selected value
        </Button>
      </Block>
    </Container>
  );
};
StorySelectControlled.storyName = 'Select controlled';

export const StoryZindexTest = () => (
  <>
    <StorybookHeading>Z-index</StorybookHeading>
    <Container>
      <Select>
        <SelectOption key="sel 1" value="select 1">
          select 1
        </SelectOption>
        <SelectOption key="sel 2" value="select 2">
          select 2
        </SelectOption>
      </Select>
      <div style={{height: '30px', background: 'salmon'}}>
        Div container with text sitting between the Select and Tabs components{' '}
      </div>
      <Tabs>
        <Tab label="Tab 1">option 1</Tab>
        <Tab label="Tab 2">option 2</Tab>
      </Tabs>
    </Container>
  </>
);
StoryZindexTest.storyName = 'Select zIndex test';
