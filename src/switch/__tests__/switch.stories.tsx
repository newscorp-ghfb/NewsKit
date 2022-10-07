import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Switch} from '..';
import {styled} from '../../utils';
import {Cell, Fieldset, Grid, ThemeProvider, CreateThemeArgs} from '../..';
import {
  IconFilledCheck,
  IconFilledClose,
  IconFilledDragHandle,
} from '../../icons';
import {icons, labels, sizeOverrides, sizes, states} from './helpers';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const switchCustomThemeObject: CreateThemeArgs = {
  name: 'bordered-thumb-theme',
  overrides: {
    stylePresets: {
      borderedThumb: {
        base: {
          backgroundColor: '{{colors.inkInverse}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.inkContrast}}',
          borderColor: '{{colors.interactiveInput040}}',
          borderStyle: 'solid',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      controlLabel: {
        base: {
          color: '{{colors.inkContrast}}',
        },
        disabled: {
          color: '{{colors.inkNonEssential}}',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.interactiveInput020}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.interactiveInput020}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.interactiveInput020}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.interactiveInput020}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

const Container = styled.div`
  margin: 20px;
  display: flex;
`;

export const StorySwitchDefault = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} sm={4}>
        <StorybookSubHeading>States</StorybookSubHeading>

        {states.map(([id, {checked, ...props}]) => (
          <Container key={id}>
            <Switch {...props} defaultChecked={checked} label={id} />
          </Container>
        ))}
      </Cell>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Sizes</StorybookSubHeading>

        {sizes.map(size => (
          <React.Fragment key={size}>
            <Container>
              <Switch size={size} label={size} />
            </Container>
            <Container>
              <Switch size={size} label={`${size}-checked`} defaultChecked />
            </Container>
          </React.Fragment>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchDefault.storyName = 'switch-default';

export const StorySwitchIcons = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Icons</StorybookSubHeading>

        {icons.map(([id, {thumbIcon, onIcon, offIcon, ...props}]) => (
          <Container key={id}>
            <Switch
              defaultChecked
              label={id}
              overrides={{
                thumbIcon,
                onIcon,
                offIcon,
              }}
              {...props}
            />
          </Container>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchIcons.storyName = 'switch-icons';

export const StorySwitchOverrides = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Size / spacing overrides</StorybookSubHeading>
        {sizeOverrides.map(([id, overrides, ...props]) => (
          <Container key={id}>
            <Switch
              defaultChecked
              label={id}
              overrides={overrides}
              {...props}
            />
          </Container>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchOverrides.storyName = 'switch-overrides';

export const StorySwitchLabels = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Labels</StorybookSubHeading>
        {labels.map(([id, {label, labelPosition, ...props}]) => (
          <Container key={id}>
            <Switch
              defaultChecked
              label={label}
              labelPosition={labelPosition}
              {...props}
            />
          </Container>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchLabels.storyName = 'switch-labels';

export const StorySwitchFieldset = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Fieldset</StorybookSubHeading>

        <Container>
          <Fieldset legend="Fieldset label">
            <Switch
              label="Switch label"
              defaultChecked
              overrides={{
                thumbIcon: IconFilledDragHandle,
                onIcon: IconFilledCheck,
                offIcon: IconFilledClose,
              }}
            />
          </Fieldset>
        </Container>
      </Cell>
    </Grid>
  </>
);

StorySwitchFieldset.storyName = 'switch-fieldset';

export const StorySwitchHideFeedback = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Hide feedback</StorybookSubHeading>

        <Container>
          <Switch label="Feedback hidden" defaultChecked hideFeedback />
        </Container>
      </Cell>
    </Grid>
  </>
);

StorySwitchHideFeedback.storyName = 'hide-feedback';

export const StorySwitchLogicalProps = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8}>
        <StorybookSubHeading>Logical props</StorybookSubHeading>

        <Container>
          <Switch
            defaultChecked
            label="Margin and padding"
            overrides={{
              marginBlock: '50px',
              paddingInline: '100px',
            }}
          />
        </Container>
      </Cell>
    </Grid>
  </>
);

StorySwitchLogicalProps.storyName = 'switch-logical-props';

export const StorySwitchOutlineOverrides = () => (
  <>
    <StorybookHeading>Outline overrides</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <Container key="Custom Color">
          <Switch
            label="Custom Color"
            overrides={{
              input: {
                stylePreset: 'customOutlineColor',
              },
            }}
          />
        </Container>
        <Container key="Custom Style">
          <Switch
            label="Custom Style"
            overrides={{
              input: {
                stylePreset: 'customOutlineStyle',
              },
            }}
          />
        </Container>
        <Container key="Custom Width">
          <Switch
            label="Custom Width"
            overrides={{
              input: {
                stylePreset: 'customOutlineWidth',
              },
            }}
          />
        </Container>
        <Container key="Custom Offset">
          <Switch
            label="Custom Offset"
            overrides={{
              input: {
                stylePreset: 'customOutlineOffset',
              },
            }}
          />
        </Container>
      </Cell>
    </Grid>
  </>
);

StorySwitchOutlineOverrides.storyName = 'switch-outline-overrides';

export default {
  title: 'Components/switch',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          switchCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
