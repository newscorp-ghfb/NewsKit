import * as React from 'react';
import {Fieldset} from '..';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {Image} from '../../image';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Checkbox} from '../../checkbox';
import {AssistiveText} from '../../assistive-text';
import {Button} from '../../button';
import {IconFilledAddCircleOutline} from '../../icons';
import {Heading3} from '../../typography';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';

export default {
  title: 'NewsKit Light/fieldset',
  component: () => 'None',
  disabledRules: ['heading-order'],
};

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

export const FieldsetSimpleExample = () => (
  <>
    <StorybookHeading>Fieldset default</StorybookHeading>
    <Fieldset legend="Legend">
      <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </Fieldset>
  </>
);
FieldsetSimpleExample.storyName = 'fieldset-simple-example';

export const LegendSizing = () => (
  <>
    <StorybookHeading>Legend sizes</StorybookHeading>
    <Stack stackDistribution="space-between" flow="horizontal-center">
      <Block>
        <StorybookSubHeading>Small</StorybookSubHeading>
        <Fieldset legend="Legend" size="small">
          <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </Block>
      <Block>
        <StorybookSubHeading>Medium</StorybookSubHeading>
        <Fieldset legend="Legend" size="medium">
          <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </Block>
      <Block>
        <StorybookSubHeading>Large</StorybookSubHeading>
        <Fieldset legend="Legend" size="large">
          <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </Block>
    </Stack>
  </>
);
LegendSizing.storyName = 'fieldset-legend-sizing';

export const LegendVariations = () => (
  <>
    <StorybookHeading>Legend variations</StorybookHeading>
    <Stack stackDistribution="space-between" flow="horizontal-top">
      <Block>
        <StorybookSubHeading>with legend as heading</StorybookSubHeading>
        <Fieldset legend={<Heading3>Legend</Heading3>}>
          <Checkbox
            label="Checkbox List Item"
            overrides={{spaceStack: 'space030'}}
          />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </Block>
      <Block>
        <StorybookSubHeading>with legend as button</StorybookSubHeading>
        <Fieldset
          legend={
            <Button size="small">
              <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
              Legend
              <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
            </Button>
          }
        >
          <Checkbox
            label="Checkbox List Item"
            overrides={{spaceStack: 'space030'}}
          />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </Block>
      <Block>
        <StorybookSubHeading>with legend as image</StorybookSubHeading>
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
          <Checkbox
            label="Checkbox List Item"
            overrides={{spaceStack: 'space030'}}
          />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </Block>
    </Stack>
  </>
);
LegendVariations.storyName = 'fieldset-different-legends';

export const FieldsetGrouping = () => (
  <>
    <StorybookHeading>Fieldset grouping</StorybookHeading>
    <Fieldset legend="Favorite activities">
      <Checkbox label="Reading" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Hiking" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Running" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Cooking" overrides={{spaceStack: 'space030'}} />
      <Checkbox label="Pub" overrides={{spaceStack: 'space030'}} />
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
      <Checkbox
        label="Checkbox List Item"
        overrides={{spaceStack: 'space030'}}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </Fieldset>
  </>
);
FieldsetGrouping.storyName = 'fieldset-grouping';

const myCustomTheme = createTheme({
  name: 'my-custom-select-theme',
  overrides: {
    stylePresets: {
      fieldsetCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          borderColor: '{{colors.purple060}}',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
      legendCustom: {
        base: {
          backgroundColor: '{{colors.green040}}',
        },
      },
    },
  },
});

const StyledFieldsetWithClippedBG = styled(Fieldset)`
  background-clip: content-box;
`;

export const FieldsetWithOverrides = () => (
  <>
    <StorybookHeading>Fieldset with overrides</StorybookHeading>
    <ThemeProvider theme={myCustomTheme}>
      <StyledFieldsetWithClippedBG
        legend="Legend margin reset to 0 when Fieldset has padding"
        overrides={{
          stylePreset: 'fieldsetCustom',
          spaceInset: 'space040',
          legend: {
            stylePreset: 'legendCustom',
            typographyPreset: 'utilityBody030',
            spaceStack: 'space000',
          },
        }}
      >
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </StyledFieldsetWithClippedBG>
    </ThemeProvider>
  </>
);
FieldsetWithOverrides.storyName = 'fieldset-with-overrides';

export const FieldsetWithCustomLegend = () => (
  <>
    <StorybookHeading>Fieldset with custom legend</StorybookHeading>
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
FieldsetWithCustomLegend.storyName = 'fieldset-with-custom-legend';

export const FieldsetWithLogicalPropsOverrides = () => (
  <>
    <StorybookHeading>Fieldset with logical props overrides</StorybookHeading>
    <ThemeProvider theme={myCustomTheme}>
      <Fieldset
        legend="Logical padding"
        overrides={{
          stylePreset: 'fieldsetCustom',
          paddingBlock: 'space040',
          marginInline: 'space040',
          legend: {
            stylePreset: 'legendCustom',
            typographyPreset: 'utilityBody030',
            spaceStack: 'space000',
          },
        }}
      >
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
      <br />
      <StyledDiv>
        <Fieldset
          legend="Logical margin"
          overrides={{
            stylePreset: 'fieldsetCustom',
            marginBlock: 'space040',
            marginInline: 'space040',
            legend: {
              stylePreset: 'legendCustom',
              typographyPreset: 'utilityBody030',
            },
          }}
        >
          <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </StyledDiv>
    </ThemeProvider>
  </>
);
FieldsetWithLogicalPropsOverrides.storyName =
  'fieldset-with-logical-props-overrides';
