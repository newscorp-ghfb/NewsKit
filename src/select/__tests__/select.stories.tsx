import React from 'react';
import {Story as StoryType} from '@storybook/react';

import {Select, SelectOption, SelectButtonIcon} from '..';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {Image} from '../../image';
import {Tabs, Tab} from '../../tabs';

import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  IconFilledCheckCircle,
  IconFilledClose,
  IconFilledControlPoint,
  IconFilledInfo,
  IconFilledArrowDropDown,
  IconFilledArrowDropUp,
} from '../../icons';
import {Modal, ModalProps} from '../../modal';
import {Button} from '../../button/button';
import {InlineMessage} from '../../inline-message';
import {GridLayout} from '../../grid-layout';
import {countries} from './phone-countries';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {TextBlock} from '../../text-block';

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

const itemsAsSelectOptions = items.map(item => (
  <SelectOption key={item} value={item}>
    {item}
  </SelectOption>
));

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const SelectOptionInside = styled.div`
  white-space: normal;
`;

const DottedBlock = styled.div`
  border: 1px dashed #d60000;
`;

const CustomModalContainer = styled.div`
  height: 250px;
  overflow-x: auto;
`;

const selectCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-select-theme',
  overrides: {
    stylePresets: {
      selectContainerCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '#D20600',
          placeholderColor: '{{colors.inkSubtle}}',
        },
      },
      selectContainerCustom2: {
        base: {
          color: '{{colors.inkBrand010}}',
          backgroundColor: '{{colors.inkInverse}}',
          borderStyle: 'solid',
          borderColor: '{{colors.teal040}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary010}}',
          borderColor: '{{colors.interactivePrimary030}}',
        },
      },
      selectPanelCustom2: {
        base: {
          color: '{{colors.inkBrand010}}',
          backgroundColor: '{{colors.interface010}}',
          boxShadow: '{{shadows.shadow050}}',
          borderStyle: 'solid',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderColor: '{{colors.teal040}}',
        },
      },
      selectOptionCustom2: {
        base: {
          color: '{{colors.inkBrand010}}',
          backgroundColor: '{{colors.inkInverse}}',
        },
        hover: {
          backgroundColor: '{{colors.interactiveInput030}}',
        },
      },
      divContainer: {
        base: {
          color: '{{colors.inkBase}}',
          backgroundColor: '{{colors.interfaceNeutral020}}',
        },
      },
    },
  },
};

export const StorySelectDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <Label htmlFor="id-default">Label</Label>
      <Select aria-describedby="id-default-at" id="id-default">
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-default-at">Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StorySelectDefault.storyName = 'Default';

export const StorySelectSize = () => (
  <StorybookPage>
    <StorybookCase title="Small">
      <Label htmlFor="id-size-1" size="small">
        Label
      </Label>
      <Select aria-describedby="id-size-1-at" id="id-size-1" size="small">
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-size-1-at" size="small">
        Assistive Text
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Label htmlFor="id-size-2" size="medium">
        Label
      </Label>
      <Select aria-describedby="id-size-2-at" id="id-size-2" size="medium">
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-size-2-at" size="medium">
        Assistive Text
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Large">
      <Label htmlFor="id-size-3" size="large">
        Label
      </Label>
      <Select aria-describedby="id-size-3-at" id="id-size-3" size="large">
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-size-3-at" size="large">
        Assistive Text
      </AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StorySelectSize.storyName = 'Select sizes';

export const StorySelectWidth = () => (
  <StorybookPage>
    <StorybookCase title="Default (100%)">
      <Select overrides={{button: {width: '100%'}}}>
        {itemsAsSelectOptions}
      </Select>
    </StorybookCase>
    <StorybookCase title="Fixed width">
      <Select overrides={{button: {width: '200px'}}}>
        {itemsAsSelectOptions}
      </Select>
    </StorybookCase>
    <StorybookCase title="Max width">
      <Select overrides={{button: {maxWidth: '300px'}}}>
        {itemsAsSelectOptions}
      </Select>
    </StorybookCase>
  </StorybookPage>
);
StorySelectWidth.storyName = 'Width';

export const StorySelectHeight = () => (
  <StorybookPage>
    <StorybookCase title="Default">
      <Select>{itemsAsSelectOptions}</Select>
    </StorybookCase>
    <StorybookCase title="Min height">
      <Select overrides={{button: {minHeight: '100px'}}}>
        {itemsAsSelectOptions}
      </Select>
    </StorybookCase>
  </StorybookPage>
);
StorySelectHeight.storyName = 'Height';

export const StorySelectVariations = () => (
  <StorybookPage>
    <StorybookCase title="Custom placeholder">
      <Label htmlFor="id-var-1">Label</Label>
      <Select
        aria-describedby="id-var-1-at"
        id="id-var-1"
        placeholder="A custom placeholder"
      >
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-var-1-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Disabled">
      <Label htmlFor="id-var-2">Label</Label>
      <Select
        aria-describedby="id-var-2-at"
        id="id-var-2"
        state="disabled"
        placeholder="Disabled"
      >
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-var-2-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Loading">
      <Label htmlFor="id-var-3">Label</Label>
      <Select
        aria-describedby="id-var-3-at"
        id="id-var-3"
        loading
        placeholder="Loading"
      >
        {itemsAsSelectOptions}
      </Select>
      <AssistiveText id="id-var-3-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Custom selected display">
      <Label htmlFor="id-var-4">Label</Label>
      <Select aria-describedby="id-var-4-at" id="id-var-4">
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
      <AssistiveText id="id-var-4-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Pre-selected option">
      <Label htmlFor="id-var-5">Label</Label>
      <Select aria-describedby="id-var-5-at" id="id-var-5">
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption defaultSelected value="Option 2">
          Option 2
        </SelectOption>
      </Select>
      <AssistiveText id="id-var-5-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Start and end enhancers">
      <Label htmlFor="id-var-6">Label</Label>
      <Select
        aria-describedby="id-var-6-at"
        id="id-6"
        startEnhancer={
          <IconFilledControlPoint overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={
          <IconFilledControlPoint overrides={{size: 'iconSize020'}} />
        }
      >
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
      </Select>
      <AssistiveText id="id-var-6-at">Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StorySelectVariations.storyName = 'Variations';

export const StorySelectOptionsDisplay = () => (
  <StorybookPage>
    <StorybookCase title="Padding of options overridden">
      <Label htmlFor="id-opt-2">Label</Label>
      <Select id="id-opt-2" aria-describedby="id-opt-2-at">
        {items.map(item => (
          <SelectOption
            key={item}
            value={item}
            overrides={{
              paddingBlock: 'space050',
              paddingInline: 'space050',
            }}
          >
            {item}
          </SelectOption>
        ))}
      </Select>
      <AssistiveText id="id-opt-2-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Rendering only option value, using selectedDisplay">
      <Label htmlFor="id-opt-3">Label</Label>
      <Select id="id-opt-3" aria-describedby="id-opt-3-at">
        {items.map(item => (
          <SelectOption key={item} value={item} selectedDisplay={item}>
            {item}
          </SelectOption>
        ))}
      </Select>
      <AssistiveText id="id-opt-3-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="minHeight of options overridden">
      <Label htmlFor="id-opt-4">Label</Label>
      <Select id="id-opt-4" aria-describedby="id-opt-4-at">
        {items.map(item => (
          <SelectOption
            key={item}
            value={item}
            overrides={{
              minHeight: 'sizing090',
            }}
          >
            {item}
          </SelectOption>
        ))}
      </Select>
      <AssistiveText id="id-opt-4-at">Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StorySelectOptionsDisplay.storyName = 'Option display';

export const StorySelectScreenReaderExample = () => (
  <StorybookPage>
    <StorybookCase title="With assistive text">
      <Label htmlFor="id-srd-11" id="id-srd-11-label">
        Label
      </Label>
      <Select
        id="id-srd-11"
        aria-labelledby="id-srd-11-label id-srd-11"
        aria-describedby="id-srd-11-at"
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
      <AssistiveText id="id-srd-11-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Without assistive text">
      <Label htmlFor="id-srd-12" id="id-srd-12-label">
        Label
      </Label>
      <Select id="id-srd-12" aria-labelledby="id-srd-12-label id-srd-12">
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
    </StorybookCase>
  </StorybookPage>
);
StorySelectScreenReaderExample.storyName = 'Screen reader example';

export const StorySelectInModal = () => {
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
            header: {paddingInline: 'space000', paddingBlock: 'space000'},
            panel: {maxHeight: '50vh', maxWidth: '280px'},
            content: {paddingInline: 'space010', paddingBlock: 'space010'},
            closeButton: {paddingInline: 'space000', paddingBlock: 'space000'},
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

  return (
    <>
      <div>
        <InlineMessage
          icon={
            <IconFilledInfo
              overrides={{
                size: 'iconSize020',
              }}
            />
          }
        >
          In order to open select options inside a modal you need to resize your
          screen to <b>xs</b> or <b>sm</b> breakpoints, or change the size of
          the preview via the option above.
        </InlineMessage>
        <br />
        <br />
      </div>
      <StorybookPage>
        {selectWithModalVariants.map(({label, props}, indx) => (
          <StorybookCase title={label}>
            <Label htmlFor={`id-modal-${indx}`} size="small">
              Label
            </Label>
            <Select
              aria-describedby={`id-modal-${indx}-at`}
              id={`id-modal-${indx}`}
              size="small"
              useModal={{xs: true, sm: true}}
              {...props}
            >
              {itemsAsSelectOptions}
            </Select>
            <AssistiveText id={`id-modal-${indx}-at`} size="small">
              Assistive Text
            </AssistiveText>
          </StorybookCase>
        ))}
      </StorybookPage>
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

  const timezones = [
    '(UTC-12:00) International Date Line West',
    '(UTC-11:00) Coordinated Universal Time-11',
    '(UTC-10:00) Hawaii',
    '(UTC-09:00) Alaska',
    '(UTC-08:00) Baja California',
    '(UTC-07:00) Pacific Daylight Time (US & Canada)',
    '(UTC-08:00) Pacific Standard Time (US & Canada)',
    '(UTC-07:00) Arizona',
    '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
    '(UTC-07:00) Mountain Time (US & Canada)',
    '(UTC-06:00) Central America',
    '(UTC-06:00) Central Time (US & Canada)',
    '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
    '(UTC-06:00) Saskatchewan',
    '(UTC-05:00) Bogota, Lima, Quito',
    '(UTC-05:00) Eastern Time (US & Canada)',
    '(UTC-04:00) Eastern Daylight Time (US & Canada)',
    '(UTC-05:00) Indiana (East)',
    '(UTC-04:30) Caracas',
    '(UTC-04:00) Asuncion',
    '(UTC-04:00) Atlantic Time (Canada)',
    '(UTC-04:00) Cuiaba',
    '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
    '(UTC-04:00) Santiago',
    '(UTC-03:30) Newfoundland',
    '(UTC-03:00) Brasilia',
    '(UTC-03:00) Buenos Aires',
    '(UTC-03:00) Cayenne, Fortaleza',
    '(UTC-03:00) Greenland',
    '(UTC-03:00) Montevideo',
    '(UTC-03:00) Salvador',
    '(UTC-02:00) Coordinated Universal Time-02',
    '(UTC-02:00) Mid-Atlantic - Old',
    '(UTC-01:00) Azores',
    '(UTC-01:00) Cape Verde Is.',
    '(UTC) Casablanca',
    '(UTC) Coordinated Universal Time',
    '(UTC) Edinburgh, London',
    '(UTC+01:00) Edinburgh, London',
    '(UTC) Dublin, Lisbon',
    '(UTC) Monrovia, Reykjavik',
    '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
    '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
    '(UTC+01:00) West Central Africa',
    '(UTC+01:00) Windhoek',
    '(UTC+02:00) Athens, Bucharest',
    '(UTC+02:00) Beirut',
    '(UTC+02:00) Cairo',
    '(UTC+02:00) Damascus',
    '(UTC+02:00) E. Europe',
    '(UTC+02:00) Harare, Pretoria',
    '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
    '(UTC+03:00) Istanbul',
    '(UTC+02:00) Jerusalem',
    '(UTC+02:00) Tripoli',
    '(UTC+03:00) Amman',
    '(UTC+03:00) Baghdad',
    '(UTC+02:00) Kaliningrad',
    '(UTC+03:00) Kuwait, Riyadh',
    '(UTC+03:00) Nairobi',
    '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk',
    '(UTC+04:00) Samara, Ulyanovsk, Saratov',
    '(UTC+03:30) Tehran',
    '(UTC+04:00) Abu Dhabi, Muscat',
    '(UTC+04:00) Baku',
    '(UTC+04:00) Port Louis',
    '(UTC+04:00) Tbilisi',
    '(UTC+04:00) Yerevan',
    '(UTC+04:30) Kabul',
    '(UTC+05:00) Ashgabat, Tashkent',
    '(UTC+05:00) Yekaterinburg',
    '(UTC+05:00) Islamabad, Karachi',
    '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    '(UTC+05:30) Sri Jayawardenepura',
    '(UTC+05:45) Kathmandu',
    '(UTC+06:00) Nur-Sultan (Astana)',
    '(UTC+06:00) Dhaka',
    '(UTC+06:30) Yangon (Rangoon)',
    '(UTC+07:00) Bangkok, Hanoi, Jakarta',
    '(UTC+07:00) Novosibirsk',
    '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    '(UTC+08:00) Krasnoyarsk',
    '(UTC+08:00) Kuala Lumpur, Singapore',
    '(UTC+08:00) Perth',
    '(UTC+08:00) Taipei',
    '(UTC+08:00) Ulaanbaatar',
    '(UTC+08:00) Irkutsk',
    '(UTC+09:00) Osaka, Sapporo, Tokyo',
    '(UTC+09:00) Seoul',
    '(UTC+09:30) Adelaide',
    '(UTC+09:30) Darwin',
    '(UTC+10:00) Brisbane',
    '(UTC+10:00) Canberra, Melbourne, Sydney',
    '(UTC+10:00) Guam, Port Moresby',
    '(UTC+10:00) Hobart',
    '(UTC+09:00) Yakutsk',
    '(UTC+11:00) Solomon Is., New Caledonia',
    '(UTC+11:00) Vladivostok',
    '(UTC+12:00) Auckland, Wellington',
    '(UTC+12:00) Coordinated Universal Time+12',
    '(UTC+12:00) Fiji',
    '(UTC+12:00) Magadan',
    '(UTC+12:00) Petropavlovsk-Kamchatsky - Old',
    "(UTC+13:00) Nuku'alofa",
    '(UTC+13:00) Samoa',
  ];

  const selectOptionsTimezones = timezones.map(name => (
    <SelectOption key={name} value={name}>
      <SelectOptionInside>{name}</SelectOptionInside>
    </SelectOption>
  ));

  return (
    <StorybookPage>
      <StorybookCase title="Simple data (virtualised)">
        <Label htmlFor="simple-data">Label</Label>
        <Select
          aria-describedby="simple-data-at"
          id="simple-data"
          useModal={{xs: true}}
          virtualized={50}
        >
          {selectOptionsSimple}
        </Select>
        <AssistiveText id="simple-data-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Fixed size (virtualised)">
        <Label htmlFor="countries">Label</Label>
        <Select
          aria-describedby="countries-at"
          id="countries"
          useModal={{xs: true}}
          virtualized={50}
        >
          {selectOptions}
        </Select>
        <AssistiveText id="countries-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Not fixed size (virtualised)">
        <Label htmlFor="simple-virt">Label</Label>
        <Select
          aria-describedby="simple-virt-at"
          id="simple-virt"
          useModal={{xs: true}}
          overrides={{button: {maxWidth: '150px'}}}
          virtualized={50}
        >
          {selectOptionsTimezones}
        </Select>
        <AssistiveText id="simple-virt-at">Assistive Text</AssistiveText>
      </StorybookCase>
    </StorybookPage>
  );
};
SelectVirtualization.storyName = 'Virtualisation';

export const StorySelectControlled = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <StorybookPage>
      <StorybookCase>
        <Label htmlFor="controlled" id="controlled-label">
          Label
        </Label>
        <Select
          aria-describedby="id-controlled-at"
          id="controlled"
          size="medium"
          labelId="controlled-label"
          onChange={handleChange}
          controlled
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
        <Spacer />
        <Button
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
          onClick={() => setSelectedValue('Fermium')}
        >
          Make &apos;Option 8&apos; the selected value
        </Button>
      </StorybookCase>
    </StorybookPage>
  );
};
StorySelectControlled.storyName = 'Controlled';

export const StoryZindexTest = () => (
  <StorybookPage>
    <StorybookCase>
      <Select>
        <SelectOption key="opt 1" value="1">
          Option 1
        </SelectOption>
        <SelectOption key="opt 2" value="2">
          Option 2
        </SelectOption>
      </Select>
      <Spacer />
      <TextBlock
        as="div"
        typographyPreset="editorialParagraph010"
        stylePreset="divContainer"
        paddingBlock="space010"
        paddingInline="space020"
      >
        Div container with text sitting between
        <br />
        the select and tabs components{' '}
      </TextBlock>
      <Spacer />
      <Tabs>
        <Tab label="Tab 1">&nbsp;</Tab>
        <Tab label="Tab 2">&nbsp;</Tab>
        <Tab label="Tab 3">&nbsp;</Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryZindexTest.storyName = 'z-index test';
StoryZindexTest.paramters = {
  // enable JS for the tabs used in this story
  percy: {enableJavaScript: true},
};

export const StorySelectStylingOverrides = () => (
  <StorybookPage>
    <Block>
      <Label
        htmlFor="id-so-1"
        overrides={{
          stylePreset: 'selectOptionCustom2',
        }}
      >
        Label
      </Label>
      <Select
        id="id-so-1"
        aria-describedby="id-so-1-at"
        overrides={{
          button: {
            stylePreset: 'selectContainerCustom2',
          },
          panel: {
            stylePreset: 'selectPanelCustom2',
          },
        }}
      >
        {items.map(item => (
          <SelectOption
            key={item}
            value={item}
            overrides={{
              stylePreset: 'selectOptionCustom2',
            }}
          >
            {item}
          </SelectOption>
        ))}
      </Select>
      <AssistiveText
        id="id-so-1-at"
        overrides={{
          stylePreset: 'selectOptionCustom2',
        }}
      >
        Assistive Text
      </AssistiveText>
    </Block>
  </StorybookPage>
);
StorySelectStylingOverrides.storyName = 'Styling overrides';

export const StoryOverrides = () => {
  const CustomIcon = ({isOpen, ...props}: SelectButtonIcon) =>
    isOpen ? (
      <IconFilledArrowDropUp {...props} overrides={{size: 'iconSize030'}} />
    ) : (
      <IconFilledArrowDropDown {...props} overrides={{size: 'iconSize030'}} />
    );

  return (
    <StorybookPage>
      <StorybookCase title="Custom icon override">
        <Label htmlFor="id-ov-1">Label</Label>
        <Select
          id="id-ov-1"
          aria-describedby="id-ov-1-at"
          overrides={{
            button: {
              indicatorIcon: CustomIcon,
            },
          }}
        >
          {itemsAsSelectOptions}
        </Select>
        <AssistiveText id="id-ov-1-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Custom outline & loading icon">
        <Label htmlFor="id-ov-2">Label</Label>
        <Select
          id="id-ov-2"
          aria-describedby="id-ov-2-at"
          loading
          overrides={{
            button: {
              stylePreset: 'selectContainerCustom',
              typographyPreset: 'utilityButton010',
              loadingIndicator: {
                stylePreset: 'indeterminateProgressIndicatorNegative',
              },
            },
            panel: {
              stylePreset: 'selectPanelCustom',
            },
          }}
        >
          {itemsAsSelectOptions}
        </Select>
        <AssistiveText id="id-ov-2-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Padding of select container">
        <Label htmlFor="id-ov-3">Label</Label>
        <Select
          id="id-ov-3"
          aria-describedby="id-ov-3-at"
          startEnhancer={<span style={{width: '32px'}} />}
          endEnhancer={<span style={{width: '32px'}} />}
        >
          {itemsAsSelectOptions}
        </Select>
        <AssistiveText id="id-ov-3-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Padding of select panel & button overridden">
        <Label htmlFor="id-ov-4">Label</Label>
        <Select
          id="id-ov-4"
          aria-describedby="id-ov-4-at"
          overrides={{
            button: {
              paddingInlineStart: 'space050',
              paddingInlineEnd: 'space050',
              width: 'unset',
            },
            panel: {
              paddingInlineStart: 'space050',
              paddingInlineEnd: 'space050',
            },
          }}
        >
          {itemsAsSelectOptions}
        </Select>
        <AssistiveText id="id-ov-4-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Margin of select panel & button overridden">
        <Label htmlFor="id-ov-5">Label</Label>
        <DottedBlock>
          <Select
            id="id-ov-5"
            aria-describedby="id-ov-5-at"
            overrides={{
              button: {
                marginInlineStart: 'space050',
                marginInlineEnd: 'space050',
                width: 'unset',
              },
              panel: {
                marginInlineStart: 'space050',
                marginInlineEnd: 'space050',
              },
            }}
          >
            {itemsAsSelectOptions}
          </Select>
        </DottedBlock>
        <AssistiveText id="id-ov-5-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Margin of options overridden">
        <Label htmlFor="id-ov-6">Label</Label>
        <Select id="id-ov-6" aria-describedby="id-ov-6-at">
          {items.map(item => (
            <SelectOption
              key={item}
              value={item}
              overrides={{
                marginInlineStart: 'space050',
                marginInlineEnd: 'space050',
              }}
            >
              {item}
            </SelectOption>
          ))}
        </Select>
        <AssistiveText id="id-ov-6-at">Assistive Text</AssistiveText>
      </StorybookCase>

      <StorybookCase title="Min and Max width overrides">
        <Label htmlFor="id-ov-7">Label</Label>
        <Select
          id="id-ov-7"
          aria-describedby="id-ov-7-at"
          overrides={{button: {width: '200px'}, panel: {minWidth: '300px'}}}
        >
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
        <AssistiveText id="id-ov-7-at">Assistive Text</AssistiveText>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    nkDocs: {
      title: 'Select',
      url: 'https://newskit.co.uk/components/select',
      description:
        'Select components allow users to select one option from a list. They typically appear in forms.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          selectCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
