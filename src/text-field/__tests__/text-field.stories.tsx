import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {TextField} from '..';
import {Block} from '../../block';
import {Button} from '../../button';
import {IconButton} from '../../icon-button';
import {
  IconFilledAddCircle,
  IconFilledCheckCircle,
  IconFilledClose,
  IconFilledArrowDropDown,
  IconFilledError,
} from '../../icons';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {Select, SelectOption} from '../..';

const TEXT_FIELD_COLUMNS = {xs: '1fr', md: '1fr 1fr'};

const textFieldCustomThemeObject: CreateThemeArgs = {
  name: 'text-input-custom-theme',
  overrides: {
    stylePresets: {
      inputContainerCustom: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          placeholderColor: '{{colors.inkBrand010}}',
          color: '{{colors.inkBrand010}}',
          borderStyle: 'solid',
          borderRadius: '{{borders.borderRadiusDefault}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderColor: '{{colors.interactiveInput020}}',
        },
      },
      labelOverrides: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
      assistiveTextOverrides: {
        base: {
          color: '{{colors.inkBrand010}}',
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
          outlineOffset: '5px',
        },
      },
    },
  },
};

export const StoryTextFieldDefault = () => (
  <StorybookPage columns={TEXT_FIELD_COLUMNS}>
    <StorybookCase>
      <Label htmlFor="default">Label</Label>
      <TextField
        id="default"
        aria-describedby="default-at"
        placeholder="Placeholder"
      />
      <AssistiveText id="default-at">Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryTextFieldDefault.storyName = 'Default';

export const StoryTextFieldSize = () => (
  <StorybookPage columns={TEXT_FIELD_COLUMNS}>
    <StorybookCase title="Small">
      <Label htmlFor="small">Label</Label>
      <TextField
        id="small"
        aria-describedby="small-at"
        size="small"
        placeholder="Placeholder"
      />
      <AssistiveText id="small-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Label htmlFor="medium">Label</Label>
      <TextField
        id="medium"
        aria-describedby="medium-at"
        size="medium"
        placeholder="Placeholder"
      />
      <AssistiveText id="medium-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Large">
      <Label htmlFor="large">Label</Label>
      <TextField
        id="large"
        aria-describedby="large-at"
        size="large"
        placeholder="Placeholder"
      />
      <AssistiveText id="large-at">Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryTextFieldSize.storyName = 'Size';

export const StoryTextFieldStates = () => (
  <StorybookPage columns={TEXT_FIELD_COLUMNS}>
    <StorybookCase title="Base">
      <Label htmlFor="base">Label</Label>
      <TextField
        id="base"
        aria-describedby="base-at"
        placeholder="Placeholder"
      />
      <AssistiveText id="base-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Auto Focus">
      <Label htmlFor="auto-focus">Label</Label>
      <TextField
        id="auto-focus"
        aria-describedby="auto-focus-at"
        placeholder="Placeholder"
        autoFocus
      />
      <AssistiveText id="auto-focus-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Valid">
      <Label htmlFor="valid">Label (Optional)</Label>
      <TextField
        id="valid"
        aria-describedby="valid-at"
        placeholder="Placeholder"
        state="valid"
        endEnhancer={
          <IconFilledCheckCircle
            overrides={{size: 'iconSize020', stylePreset: 'inkPositive'}}
          />
        }
      />
      <AssistiveText id="valid-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Invalid">
      <Label htmlFor="invalid">Label</Label>
      <TextField
        id="invalid"
        aria-describedby="invalid-at"
        placeholder="Placeholder"
        state="invalid"
        endEnhancer={
          <IconFilledError
            overrides={{size: 'iconSize020', stylePreset: 'inkNegative'}}
          />
        }
      />
      <AssistiveText overrides={{stylePreset: 'inkNegative'}} id="invalid-at">
        Assistive Text
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Disabled">
      <Label htmlFor="disabled">Label</Label>
      <TextField
        id="disabled"
        aria-describedby="disabled-at"
        placeholder="Placeholder"
        state="disabled"
      />
      <AssistiveText id="disabled-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Read only">
      <Label htmlFor="read-only">Label</Label>
      <TextField
        id="read-only"
        aria-describedby="read-only-at"
        placeholder="Placeholder"
        readOnly
      />
      <AssistiveText id="read-only-at">Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryTextFieldStates.storyName = 'States';

export const StoryTextFieldAddons = () => {
  const [searchTextIcon, setSearchTextIcon] = React.useState('');
  const [searchTextButton, setSearchTextButton] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('UK');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  const items = ['BG', 'UK', 'USA', 'DE', 'NL'];

  const Dropdown = () => (
    <Select
      size="small"
      onChange={handleChange}
      startEnhancer={
        <IconFilledArrowDropDown overrides={{size: 'iconSize020'}} />
      }
      overrides={{
        button: {
          marginBlockStart: 'space020',
          marginInlineStart: 'space000',
          indicatorIcon: {size: 'iconSize000'},
        },
      }}
    >
      {items.map(item => (
        <SelectOption key={item} value={item} selected={item === selectedValue}>
          {item}
        </SelectOption>
      ))}
    </Select>
  );

  return (
    <StorybookPage columns={TEXT_FIELD_COLUMNS}>
      <StorybookCase title="Dropdown">
        <Label htmlFor="dropdown">Label</Label>
        <TextField
          id="dropdown"
          aria-describedby="dropdown-at"
          placeholder="Placeholder"
          startEnhancer={<Dropdown />}
        />
        <AssistiveText id="dropdown-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Icon button">
        <Label htmlFor="icon-button">Label</Label>
        <TextField
          id="icon-button"
          aria-describedby="icon-button-at"
          placeholder="Placeholder"
          endEnhancer={
            <IconButton
              aria-label="plus-icon"
              overrides={{stylePreset: 'iconButtonSolidInverse'}}
            >
              <IconFilledAddCircle overrides={{size: 'iconSize010'}} />
            </IconButton>
          }
        />
        <AssistiveText id="icon-button-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="'Clear' icon button">
        <Label htmlFor="clear-icon-button">
          Please type inside the text field
        </Label>
        <TextField
          id="clear-icon-button"
          aria-describedby="clear-icon-button-at"
          value={searchTextIcon}
          onChange={event => setSearchTextIcon(event.target.value)}
          placeholder="Placeholder"
          endEnhancer={
            <IconButton
              aria-label="clear-icon"
              onClick={() => setSearchTextIcon('')}
              overrides={{stylePreset: 'iconButtonSolidInverse'}}
            >
              <IconFilledClose overrides={{size: 'iconSize010'}} />
            </IconButton>
          }
        />
        <AssistiveText id="clear-icon-button-at">Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="'Clear' button">
        <Label htmlFor="clear-button">Please type inside the text field</Label>
        <TextField
          id="clear-button"
          aria-describedby="clear-button-at"
          value={searchTextButton}
          onChange={event => setSearchTextButton(event.target.value)}
          placeholder="Placeholder"
          endEnhancer={
            <Button
              size="small"
              onClick={() => setSearchTextButton('')}
              overrides={{stylePreset: 'buttonOutlinedSecondary'}}
            >
              Clear
            </Button>
          }
        />
        <AssistiveText id="clear-button-at">Assistive Text</AssistiveText>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryTextFieldAddons.storyName = 'Addons';

export const StoryTextFieldStylingOverrides = () => (
  <StorybookPage columns={TEXT_FIELD_COLUMNS}>
    <StorybookCase>
      <Label
        htmlFor="styling-overrides"
        overrides={{stylePreset: 'labelOverrides'}}
      >
        Label
      </Label>
      <TextField
        id="styling-overrides"
        aria-describedby="styling-overrides-at"
        placeholder="Placeholder"
        overrides={{
          stylePreset: 'inputContainerCustom',
          typographyPreset: 'utilityBody030',
        }}
      />
      <AssistiveText
        id="styling-overrides-at"
        overrides={{stylePreset: 'assistiveTextOverrides'}}
      >
        Assistive Text
      </AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryTextFieldStylingOverrides.storyName = 'Styling overrides';

export const StoryTextFieldOverrides = () => (
  <StorybookPage columns={TEXT_FIELD_COLUMNS}>
    <StorybookCase title="Logical props">
      <Label htmlFor="logical-props">Label</Label>
      <TextField
        id="logical-props"
        aria-describedby="logical-props-at"
        placeholder="Placeholder"
        overrides={{
          paddingBlock: 'space050',
          paddingInline: 'space050',
          marginBlock: 'space050',
        }}
      />
      <AssistiveText id="logical-props-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Custom outline">
      <Label htmlFor="custom-outline">Label</Label>
      <TextField
        id="custom-outline"
        aria-describedby="custom-outline-at"
        placeholder="Placeholder"
        overrides={{stylePreset: 'customOutlineStyle'}}
      />
      <AssistiveText id="custom-outline-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Icon placement">
      <Label htmlFor="icon-placement">Label</Label>
      <TextField
        id="icon-placement"
        aria-describedby="icon-placement-at"
        placeholder="Placeholder"
        startEnhancer={
          <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={<IconFilledAddCircle overrides={{size: 'iconSize020'}} />}
      />
      <AssistiveText id="icon-placement-at">Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Two icons and IconSize">
      <Label htmlFor="two-icons-and-iconsize">Label</Label>
      <TextField
        id="two-icons-and-iconsize"
        aria-describedby="two-icons-and-iconsize-at"
        placeholder="Placeholder"
        startEnhancer={
          <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={
          <>
            <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
            <Block marginInlineEnd="space020" />
            <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
          </>
        }
      />
      <AssistiveText id="two-icons-and-iconsize-at">
        Assistive Text
      </AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryTextFieldOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Text field',
  component: TextField,
  disabledRules: ['color-contrast'],
  parameters: {
    nkDocs: {
      title: 'Text field',
      url: 'https://www.newskit.co.uk/components/text-field',
      description:
        'Text fields allow users to enter and edit text content into a UI. They typically appear in forms.',
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
          textFieldCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
