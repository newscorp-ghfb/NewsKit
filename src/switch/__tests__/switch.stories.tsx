import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Switch} from '..';
import {getColorCssFromTheme, styled} from '../../utils';
import {
  AssistiveText,
  Block,
  CreateThemeArgs,
  Fieldset,
  GridLayout,
  ThemeProvider,
} from '../..';
import {IconFilledCheck, IconFilledClose} from '../../icons';
import {
  icons,
  labelPositions,
  overrideScenarios,
  sizes,
  states,
} from './helpers';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';

const switchCustomThemeObject: CreateThemeArgs = {
  name: 'bordered-thumb-theme',
  overrides: {
    stylePresets: {
      customThumb: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
        },
      },
      borderedThumb: {
        base: {
          backgroundColor: '{{colors.inkInverse}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput040}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      customInput: {
        base: {
          backgroundColor: '{{colors.inkBrand010}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
        checked: {
          backgroundColor: '{{colors.inkBrand010}}',
        },
      },
      outlinedInput: {
        base: {
          backgroundColor: '{{colors.interactiveInput020}}',
          borderRadius: '{{borders.borderRadiusPill}}',
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '1px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
        checked: {
          backgroundColor: '{{colors.interactiveInput040}}',
        },
      },
      customTrackIcon: {
        base: {
          iconColor: '{{colors.interfaceInformative020}}',
        },
      },
    },
  },
};

const properCase = (s: string) =>
  `${s.slice(0, 1).toUpperCase()}${s.substring(1)}`;

export const StorySwitchDefault = () => <Switch label="Label" defaultChecked />;

StorySwitchDefault.storyName = 'Default';

export const StorySwitchSizes = () => (
  <StorybookPage>
    {[false, true].map(defaultChecked => (
      <StorybookCase title={defaultChecked ? 'Checked' : 'Base'}>
        <GridLayout
          columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
          rowGap="space020"
          columnGap="space020"
        >
          {sizes.map(size => (
            <StorybookCase title={properCase(size)}>
              <Switch
                label="Label"
                defaultChecked={defaultChecked}
                size={size}
              />
            </StorybookCase>
          ))}
        </GridLayout>
      </StorybookCase>
    ))}
  </StorybookPage>
);

StorySwitchSizes.storyName = 'Sizes';

export const StorySwitchStates = () => (
  <StorybookPage
    columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr'}}
    rowGap="space050"
    columnGap="space020"
  >
    {states.map(([label, props]) => (
      <StorybookCase title={label}>
        <Switch label="Label" {...props} />
      </StorybookCase>
    ))}
  </StorybookPage>
);

StorySwitchStates.storyName = 'States';

export const StorySwitchThumbAndTrackIconOptions = () => (
  <StorybookPage
    columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
    rowGap="space050"
    columnGap="space020"
  >
    {icons.map(
      ([
        label,
        {
          overrides: {thumbIcon, onIcon, offIcon},
          defaultChecked,
        },
      ]) => (
        <StorybookCase title={label}>
          <Switch
            label="Label"
            defaultChecked={defaultChecked}
            overrides={{
              thumbIcon,
              onIcon,
              offIcon,
            }}
          />
        </StorybookCase>
      ),
    )}
  </StorybookPage>
);

StorySwitchThumbAndTrackIconOptions.storyName = 'Thumb and track icon options';

const HorizontalLine = styled.div`
  border-bottom: 1px solid;
  ${() => getColorCssFromTheme('borderColor', 'interface050')};
`;

export const StorySwitchLabels = () => (
  <StorybookPage columns="250px 250px" rowGap="space020" columnGap="space020">
    {labelPositions.map(labelPosition => (
      <StorybookCase title={properCase(labelPosition)}>
        <Block marginBlockEnd="space050">
          <Switch labelPosition={labelPosition} label="Label" />
        </Block>
        <HorizontalLine />
        <Block marginBlockStart="space050">
          <Switch
            labelPosition={labelPosition}
            label="This is a very long label to show how the label aligns to the switch"
          />
        </Block>
      </StorybookCase>
    ))}
  </StorybookPage>
);

StorySwitchLabels.storyName = 'Label alignment';

export const StorySwitchHideFeedback = () => (
  <Switch label="Label" defaultChecked hideFeedback />
);

StorySwitchHideFeedback.storyName = 'Feedback element hidden';

export const StorySwitchFieldset = () => (
  <Fieldset legend="Legend">
    <Switch label="Label" overrides={{marginBlockEnd: 'space020'}} />
    <AssistiveText>Assistive text</AssistiveText>
  </Fieldset>
);

StorySwitchFieldset.storyName = 'Switch in fieldset';

const StyledIconCheck = () => (
  <IconFilledCheck overrides={{stylePreset: 'customTrackIcon'}} />
);
const StyledIconClose = () => (
  <IconFilledClose overrides={{stylePreset: 'customTrackIcon'}} />
);

export const StorySwitchStylingOverrides = () => (
  <Switch
    label="Label"
    defaultChecked
    overrides={{
      thumb: {
        stylePreset: 'customThumb',
      },
      input: {
        stylePreset: 'customInput',
      },
      onIcon: StyledIconCheck,
      offIcon: StyledIconClose,
    }}
  />
);

StorySwitchStylingOverrides.storyName = 'Styling overrides';

export const StorySwitchOverrides = () => (
  <StorybookPage
    columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
    rowGap="space050"
    columnGap="space020"
  >
    {overrideScenarios.map(([label, overrides]) => (
      <StorybookCase title={label}>
        <Switch label="Label" defaultChecked overrides={overrides} />
      </StorybookCase>
    ))}
  </StorybookPage>
);

StorySwitchOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Switch',
  component: () => 'None',
  disabledRules: [],
  parameters: {
    nkDocs: {
      title: 'Switch',
      url: 'https://newskit.co.uk/components/switch',
      description:
        'A switch is a selection control (toggle) that allows users to turn a setting on or off.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {globals: {backgrounds: {value: string}}; name: string},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          switchCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
