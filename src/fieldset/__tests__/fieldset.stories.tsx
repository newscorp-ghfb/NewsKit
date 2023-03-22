import * as React from 'react';
import {Fieldset} from '..';
import {Block} from '../../block';
import {Image} from '../../image';
import {Checkbox} from '../../checkbox';
import {AssistiveText} from '../../assistive-text';
import {Button} from '../../button';
import {Heading3} from '../../typography';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {TextBlock} from '../../text-block';
import {GridLayout} from '../../grid-layout';

export default {
  title: 'Components/fieldset',
  component: () => 'None',
  disabledRules: ['heading-order'],
};

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

const Header = ({children}: {children: React.ReactNode}) => (
  <TextBlock
    as="h2"
    stylePreset="inkSubtle"
    typographyPreset="utilityBody010"
    marginBlockEnd="space050"
  >
    {children}
  </TextBlock>
);

export const StoryFieldsetDefault = () => (
  <Fieldset legend="Legend">
    <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
    <AssistiveText>Assistive Text</AssistiveText>
  </Fieldset>
);
StoryFieldsetDefault.storyName = 'Default';

export const LegendSizing = () => (
  <GridLayout columns="repeat(3, 1fr)">
    <Block>
      <Header>Small</Header>
      <Fieldset legend="Legend" size="small">
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </Block>
    <Block>
      <Header>Medium</Header>
      <Fieldset legend="Legend" size="medium">
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </Block>
    <Block>
      <Header>Large</Header>
      <Fieldset legend="Legend" size="large">
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </Block>
  </GridLayout>
);
LegendSizing.storyName = 'Size';

export const LegendVariations = () => (
  <GridLayout columns="repeat(3, 1fr)">
    <Block>
      <Header>Heading</Header>
      <Fieldset legend={<Heading3>Legend</Heading3>}>
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </Block>
    <Block>
      <Header>Button</Header>
      <Fieldset legend={<Button>Legend</Button>}>
        <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
        <AssistiveText>Assistive Text</AssistiveText>
      </Fieldset>
    </Block>
    <Block>
      <Header>Image</Header>
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
    </Block>
  </GridLayout>
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

const myCustomTheme = createTheme({
  name: 'my-custom-select-theme',
  overrides: {
    stylePresets: {
      fieldsetCustom: {
        base: {
          backgroundColor: '{{colors.amber020}}',
          borderColor: '{{colors.amber070}}',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
      checkboxInputCustom: {
        base: {
          backgroundColor: '{{colors.amber020}}',
          borderColor: '{{colors.amber070}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          borderStyle: 'solid',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      checkboxLabelCustom: {
        base: {
          color: '{{colors.amber070}}',
        },
      },
      assistiveTextCustom: {
        base: {
          color: '{{colors.amber070}}',
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
    <ThemeProvider theme={myCustomTheme}>
      <StyledFieldsetWithClippedBG
        legend="Legend margin reset to 0 when Fieldset has padding"
        overrides={{
          stylePreset: 'fieldsetCustom',
          paddingBlock: 'space040',
          paddingInline: 'space040',
          legend: {
            typographyPreset: 'utilityBody030',
            spaceStack: 'space000',
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
    </ThemeProvider>
  </>
);
FieldsetWithOverrides.storyName = 'Styling overrides';

export const FieldsetWithLogicalPropsOverrides = () => (
  <GridLayout rowGap="space020">
    <div>
      <Header>Padding overrides</Header>
      <Fieldset
        legend="Legend"
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
    </div>
    <div>
      <Header>Margin overrides</Header>
      <Fieldset
        legend="Legend"
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
    </div>
    <div>
      <Header>Custom outline</Header>
      <StyledDiv>
        <Fieldset
          legend="Legend"
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
    </div>
  </GridLayout>
);
FieldsetWithLogicalPropsOverrides.storyName = 'Overrides';
