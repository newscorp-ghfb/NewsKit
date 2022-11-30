import * as React from 'react';
import {Story as StoryType} from '@storybook/react';

import {Select, SelectOption, SelectButtonIcon} from '..';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {Image} from '../../image';
import {Tabs, Tab} from '../../tabs';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  IconFilledCheckCircle,
  IconFilledAccountBalance,
  IconFilledClose,
  IconFilledKeyboardArrowUp,
  IconFilledKeyboardArrowDown,
} from '../../icons';
import {Modal, ModalProps} from '../../modal';
import {Button} from '../../button/button';
import {InlineMessage} from '../../inline-message';
import {GridLayout} from '../../grid-layout';
import {countries} from './phone-countries';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

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

const selectCustomThemeObject: CreateThemeArgs = {
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
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

const CustomIcon = ({isOpen, ...props}: SelectButtonIcon) =>
  isOpen ? (
    <IconFilledKeyboardArrowUp {...props} />
  ) : (
    <IconFilledKeyboardArrowDown {...props} />
  );

export const StorySelectSize = () => (
  <>
    <StorybookHeading>Select sizes</StorybookHeading>
    <Container>
      <Stack flow="vertical-left" spaceInline="space040">
        <Block>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <Label htmlFor="id-1" size="small">
            Label
          </Label>
          <Select aria-describedby="id-1-at" id="id-1" size="small">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-1-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <Label htmlFor="id-2" size="medium">
            Label
          </Label>
          <Select aria-describedby="id-2-at" id="id-2" size="medium">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-2-at" size="medium">
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <Label htmlFor="id-3" size="large">
            Label
          </Label>
          <Select aria-describedby="id-3-at" id="id-3" size="large">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-3-at" size="large">
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

export const StorySelectOverrides = () => (
  <>
    <StorybookHeading>Select with overrides</StorybookHeading>
    <Container>
      <Container>
        <StorybookSubHeading>Select loading with overrides</StorybookSubHeading>
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
    </Container>
  </>
);
StorySelectOverrides.storyName = 'Select with overrides';

export const StorySelectLogicalProps = () => (
  <>
    <StorybookHeading>Select with overrides</StorybookHeading>
    <Container>
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
    </Container>
  </>
);
StorySelectOptionsDisplay.storyName = 'Select option display';

export const StorySelectScreenReaderExample = () => (
  <>
    <Container>
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
            <Label htmlFor={`id-modal-${indx}`} size="small">
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
            <AssistiveText id={`id-modal-${indx}-at`} size="small">
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
        <Image
          src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
          // width="16"
          // height="12"
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
          <Label htmlFor="countries" size="medium">
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
          <AssistiveText id="countries-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
        <Block spaceStack="space050">
          <Label htmlFor="simple-data" size="medium">
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
          <AssistiveText id="simple-data-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
      </Container>
    </>
  );
};

export const StorySelectControlled = () => {
  const [selectedValue, setSelectedValue] = React.useState('Fermium');
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
StoryZindexTest.paramters = {
  // enable JS for the tabs used in this story
  percy: {enableJavaScript: true},
};

export const StoryOutlineOverride = () => (
  <>
    <StorybookHeading>Outline override</StorybookHeading>
    <Container>
      <Stack flow="vertical-left" spaceInline="space040">
        <Block>
          <StorybookSubHeading>Custom Color</StorybookSubHeading>
          <Label htmlFor="id-outline-1" size="small">
            Label
          </Label>
          <Select
            overrides={{
              button: {
                stylePreset: 'customOutlineColor',
              },
            }}
            aria-describedby="id-outline-1-at"
            id="id-outline-1"
            size="small"
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-outline-1-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Custom Style</StorybookSubHeading>
          <Label htmlFor="id-outline-2" size="small">
            Label
          </Label>
          <Select
            overrides={{
              button: {
                stylePreset: 'customOutlineStyle',
              },
            }}
            aria-describedby="id-outline-2-at"
            id="id-outline-2"
            size="small"
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-outline-2-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Custom Width</StorybookSubHeading>
          <Label htmlFor="id-outline-3" size="small">
            Label
          </Label>
          <Select
            overrides={{
              button: {
                stylePreset: 'customOutlineWidth',
              },
            }}
            aria-describedby="id-outline-3-at"
            id="id-outline-3"
            size="small"
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-outline-3-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Custom Offset</StorybookSubHeading>
          <Label htmlFor="id-outline-4" size="small">
            Label
          </Label>
          <Select
            overrides={{
              button: {
                stylePreset: 'customOutlineOffset',
              },
            }}
            aria-describedby="id-outline-4-at"
            id="id-outline-4"
            size="small"
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-outline-4-at" size="small">
            Assistive Text
          </AssistiveText>
        </Block>
      </Stack>
    </Container>
  </>
);
StoryOutlineOverride.storyName = 'Select Outline override';

export const StorySelectIconOverrides = () => (
  <>
    <StorybookHeading>Select Icon Override</StorybookHeading>
    <Container>
      <Stack flow="vertical-left" spaceInline="space040">
        <Block>
          <Label htmlFor="id-icon-overrides-1" size="small">
            Custom icon override
          </Label>
          <Select
            id="id-icon-overrides-1"
            size="small"
            overrides={{
              button: {
                indicatorIcon: CustomIcon,
              },
            }}
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Block>
        <Block>
          <Label htmlFor="id-icon-overrides-2" size="small">
            Inline icon override
          </Label>
          <Select
            id="id-icon-overrides-2"
            size="small"
            overrides={{
              button: {
                indicatorIcon: {
                  size: 'iconSize010',
                  stylePreset: 'inkPositive',
                },
              },
            }}
          >
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
        </Block>
      </Stack>
    </Container>
  </>
);
StorySelectIconOverrides.storyName = 'Select Icon overrides';

export const StorySelectWithOverflowScroll = () => (
  <div style={{height: '90vh', width: '100%', overflow: 'hidden'}}>
    <div
      style={{
        height: '90vh',
        position: 'relative',
        overflow: 'auto',
        border: '3px solid blue',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          padding: '75vh 0',
          position: 'relative',
          border: '3px solid red',
          boxSizing: 'border-box',
        }}
      >
        <Select>
          <SelectOption value="A"> Pikachu </SelectOption>
          <SelectOption value="B"> Charmander </SelectOption>
          <SelectOption value="C"> Pikachu </SelectOption>
          <SelectOption value="D"> Pikachu </SelectOption>
        </Select>
      </div>
    </div>
  </div>
);

export default {
  title: 'Components/select',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          selectCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
