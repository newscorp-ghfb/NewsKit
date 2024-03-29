import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Fieldset} from '..';
import {Block} from '../../block';
import {Image} from '../../image';
import {Checkbox} from '../../checkbox';
import {AssistiveText} from '../../assistive-text';
import {Button} from '../../button';
import {Heading3} from '../../typography';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';

const myCustomTheme: CreateThemeArgs = {
  name: 'my-custom-fieldset-theme',
  overrides: {
    stylePresets: {
      legendCustom: {
        base: {
          color: '{{colors.inkContrast}}',
          backgroundColor: '{{colors.interfaceBackground}}',
        },
      },
      fieldsetCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          borderColor: '{{colors.inkBrand010}}',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
      checkboxInputCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          borderColor: '{{colors.inkBrand010}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          borderStyle: 'solid',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      checkboxLabelCustom: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
      assistiveTextCustom: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
    },
  },
};

export default {
  title: 'Components/Fieldset',
  component: () => 'None',
  disabledRules: ['heading-order'],
  parameters: {
    nkDocs: {
      title: 'Fieldset',
      url: 'https://newskit.co.uk/components/fieldset/',
      description:
        'The fieldset is used to provide contextual information around a group of form controls in a web form.',
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
          myCustomTheme,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

export const StoryFieldsetDefault = () => (
  <Fieldset legend="Legend">
    <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
    <AssistiveText>Assistive Text</AssistiveText>
  </Fieldset>
);
StoryFieldsetDefault.storyName = 'Default';

export const LegendSizing = () => (
  <StorybookPage
    columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
    rowGap="space020"
    columnGap="space020"
  >
    <StorybookCase title="Small">
      <Fieldset legend="Legend" size="small">
        <Checkbox
          label="Label"
          overrides={{spaceStack: 'space030'}}
          size="small"
        />
        <AssistiveText size="small">Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Fieldset legend="Legend" size="medium">
        <Checkbox
          label="Label"
          overrides={{spaceStack: 'space030'}}
          size="medium"
        />
        <AssistiveText size="medium">Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
    <StorybookCase title="Large">
      <Fieldset legend="Legend" size="large">
        <Checkbox
          label="Label"
          overrides={{spaceStack: 'space030'}}
          size="large"
        />
        <AssistiveText size="large">Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
  </StorybookPage>
);
LegendSizing.storyName = 'Size';

export const LegendVariations = () => (
  <StorybookPage
    columns={{sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}}
    rowGap="space020"
    columnGap="space020"
  >
    <StorybookCase title="Heading">
      <Fieldset legend={<Heading3>Legend</Heading3>}>
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
    <StorybookCase title="Button">
      <Fieldset legend={<Button>Legend</Button>}>
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
    <StorybookCase title="Image">
      <Fieldset
        legend={
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
            placeholderIcon
          />
        }
      >
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
  </StorybookPage>
);
LegendVariations.storyName = 'Different legends';

export const FieldsetGrouping = () => (
  <>
    <Fieldset legend="Legend">
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </Fieldset>
    <br />
    <br />
    <br />
    <Fieldset
      legend={
        <Image
          src="/placeholder-3x2.png"
          alt="Example Image"
          overrides={{width: '300px', height: '200px'}}
          placeholderIcon
        />
      }
    >
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </Fieldset>
  </>
);
FieldsetGrouping.storyName = 'Fieldset grouping';

export const FieldsetWithCustomLegend = () => (
  <>
    <Fieldset aria-labelledby="custom-legend-h3">
      <Block spaceStack="space030">
        <Heading3 id="custom-legend-h3">
          This h3 element is the custom legend and is fully nested inside the
          fieldset
        </Heading3>
      </Block>
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </Fieldset>
  </>
);
FieldsetWithCustomLegend.storyName = 'Custom legend';

const StyledFieldsetWithClippedBG = styled(Fieldset)`
  background-clip: content-box;
`;

export const FieldsetWithOverrides = () => (
  <StyledFieldsetWithClippedBG
    legend="Legend margin reset to 0 when Fieldset has padding"
    overrides={{
      stylePreset: 'fieldsetCustom',
      paddingBlock: 'space040',
      paddingInline: 'space040',
      legend: {
        typographyPreset: 'utilityBody030',
        spaceStack: 'space000',
        stylePreset: 'legendCustom',
      },
    }}
  >
    <Checkbox
      label="Label"
      overrides={{
        spaceStack: 'space030',
        marginBlockStart: '-6px',
        input: {stylePreset: 'checkboxInputCustom'},
        label: {stylePreset: 'checkboxLabelCustom'},
      }}
    />
    <AssistiveText overrides={{stylePreset: 'assistiveTextCustom'}}>
      Assistive Text
    </AssistiveText>
  </StyledFieldsetWithClippedBG>
);
FieldsetWithOverrides.storyName = 'Styling overrides';

export const FieldsetWithLogicalPropsOverrides = () => (
  <StorybookPage rowGap="space020">
    <StorybookCase title="Padding overrides">
      <Fieldset
        legend="Legend"
        overrides={{
          paddingBlock: 'space040',
          paddingInline: 'space040',
        }}
      >
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
    <StorybookCase title="Margin overrides">
      <Fieldset
        legend="Legend"
        overrides={{
          marginBlock: 'space040',
          marginInline: 'space040',
        }}
      >
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </StorybookCase>
    <StorybookCase title="Custom outline">
      <StyledDiv>
        <Fieldset
          legend="Legend"
          overrides={{
            marginBlock: 'space040',
            marginInline: 'space040',
          }}
        >
          <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </StyledDiv>
    </StorybookCase>
  </StorybookPage>
);
FieldsetWithLogicalPropsOverrides.storyName = 'Overrides';
